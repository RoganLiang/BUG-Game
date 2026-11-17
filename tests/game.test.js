import test from 'node:test';
import assert from 'node:assert/strict';
import {fresh,playerView,minuteValue} from '../src/game/state.js';
import {act,allows,currentNode,selectBirthplace,randomBirthplace,startStory,replaySave,knownInformation,summary} from '../src/game/engine.js';
import {nodes,information} from '../src/story/nodes.js';
import {birthplaces} from '../src/world/cities.js';
import {storyMarkup,worldMarkup,recordsMarkup,characterMarkup} from '../src/ui/render.js';
import {loadSave,persistSave,SAVE_KEY} from '../src/storage/save.js';
const start=()=>startStory(selectBirthplace(fresh('test-run'),'seoul-mapo'));
function paths(s=start()){const n=currentNode(s);if(n.id==='ending')return [s];return n.choices.filter(c=>allows(c.availabilityConditions,s)).flatMap(c=>paths(act(s,n.id,c.id)));}
const endings=paths();
test('story graph: unique IDs, valid effects, conditions, targets and information schema',()=>{
 assert.equal(new Set(nodes.map(n=>n.id)).size,nodes.length);
 const flagIds=new Set(nodes.flatMap(n=>n.choices.flatMap(c=>Object.keys(c.effects.flags))));
 for(const n of nodes){assert.ok(/^\d{2}:\d{2}$/.test(n.time));assert.ok(n.locationId);assert.ok(Array.isArray(n.entryConditions));assert.equal(new Set(n.choices.map(c=>c.id)).size,n.choices.length);for(const id of n.entryFacts)assert.ok(information[id]);for(const c of n.choices){assert.ok(nodes.some(n=>n.id===c.nextNodeId));assert.ok(Number.isInteger(c.effects.minutes)&&c.effects.minutes>0);for(const k of Object.keys(c.effects.stats))assert.ok(k in fresh().stats);assert.ok(Object.values(c.effects.stats).every(Number.isFinite));assert.ok(Number.isInteger(c.effects.spread));for(const id of c.effects.facts)assert.ok(information[id]);for(const condition of c.availabilityConditions){assert.ok(condition.anyFlags.length);assert.ok(condition.anyFlags.every(f=>flagIds.has(f)));}}}
 for(const f of Object.values(information))for(const field of ['id','origin','observedAt','claimedAt','content','evidenceType','verificationStatus','visibility'])assert.ok(field in f);
});
test('all 32 available paths finish in three decisions, with monotonic time and differing visible outcomes',()=>{
 assert.equal(endings.length,32);
 for(const end of endings){assert.equal(end.decisionHistory.length,3);assert.equal(end.currentNodeId,'ending');let previous=minuteValue('08:17');for(const d of end.decisionHistory){assert.ok(minuteValue(d.fromTime)>=previous);assert.ok(minuteValue(d.actionAt)>minuteValue(d.fromTime));previous=minuteValue(d.actionAt);}assert.ok(minuteValue(end.gameTime)>=previous);assert.ok(Object.values(end.stats).every(v=>v>=0&&v<=100));for(const id of end.knownFacts)assert.ok(minuteValue(information[id].observedAt)<=minuteValue(end.gameTime));}
 const a=endings.find(s=>s.flags.verified&&s.flags.contacted&&s.flags.compared),b=endings.find(s=>s.flags.shared&&s.flags.waited&&s.flags.amplified);
 assert.notDeepEqual(a.knownFacts,b.knownFacts);assert.notEqual(summary(a).style,summary(b).style);assert.notEqual(recordsMarkup(playerView(a)),recordsMarkup(playerView(b)));assert.notEqual(a.worldState.rumorSpread,b.worldState.rumorSpread);
});
test('birthplace demo draws never overwrite residence; fixed route is reachable',()=>{for(let i=0;i<4;i++){let s=randomBirthplace(fresh(),()=>i/4);assert.equal(s.birthplaceId,birthplaces[i].id);assert.equal(s.residenceId,'paris-11');s=selectBirthplace(s,'seoul-mapo');assert.equal(s.residenceId,'paris-11');assert.equal(startStory(s).currentNodeId,'video-0817');}});
test('every allowed action changes state and guarded, stale, duplicate actions are no-ops',()=>{function walk(s){const n=currentNode(s);for(const c of n.choices){const before=JSON.stringify(s),next=act(s,n.id,c.id);assert.equal(JSON.stringify(s),before);if(allows(c.availabilityConditions,s)){assert.notEqual(next,s);assert.equal(act(next,n.id,c.id),next);walk(next);}else assert.equal(next,s);}}walk(start());const s=start();assert.equal(act(s,'window-0841','spread-theory'),s);assert.equal(act(s,'video-0817','not-real'),s);assert.equal(startStory(fresh()).currentNodeId,'home');});
test('hidden world state and unacquired city facts never reach UI projections',()=>{let s=start();let view=playerView(s);assert.ok(!('worldState'in view));const html=worldMarkup(view,null)+recordsMarkup(view)+storyMarkup(view);assert.ok(!html.includes(information.reply.content));assert.ok(!html.includes(information.window.content));assert.ok(!html.includes(information.tokyo.content));assert.equal(view.visibleSignals.length,1);s=act(s,'video-0817','ignore-video');assert.equal(s.visibleSignals.length,2);s=act(s,'friend-0829','wait-window');assert.equal(s.visibleSignals.length,2);assert.ok(!s.knownFacts.includes('tokyo'));const other=act(act(start(),'video-0817','verify-video'),'friend-0829','trace-source');assert.equal(other.visibleSignals.length,4);assert.ok(!worldMarkup(playerView(other)).includes('undetermined'));});
test('save replay restores all branches, ignores tampered derived data, and rejects invalid history or versions',()=>{for(const s of endings)assert.deepEqual(replaySave(JSON.parse(JSON.stringify(s))),s);const s=start();const modified={...s,stats:{energy:999},knownFacts:['reply'],worldState:{videoCause:'revealed'}};assert.deepEqual(replaySave(modified),s);for(const value of [null,{}, {...s,gameVersion:'0.1.0'},{...s,birthplaceId:'fake'}, {...s,decisionHistory:[{nodeId:'window-0841',choiceId:'spread-theory'}]}])assert.equal(replaySave(value),null);});
test('storage failure and incompatible versions are handled safely; fresh resets all run-specific fields',()=>{const data=new Map(),storage={getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v)};const s=endings[0];persistSave(storage,s);assert.deepEqual(loadSave(storage).state,s);storage.setItem(SAVE_KEY,'bad JSON');assert.equal(loadSave(storage).state,null);storage.setItem(SAVE_KEY,JSON.stringify({...s,gameVersion:'old'}));assert.match(loadSave(storage).message,/不相容/);assert.match(persistSave(null,s),/無法存檔/);assert.equal(loadSave(null).state,null);const blank=fresh('new-run');assert.equal(blank.birthplaceId,null);assert.equal(blank.residenceId,'paris-11');assert.deepEqual(blank.knownFacts,[]);assert.deepEqual(blank.decisionHistory,[]);assert.deepEqual(blank.visibleSignals,[]);assert.notEqual(blank.runId,s.runId);});

import {catalog} from '../src/i18n/catalog.js';
import {supportedLanguages,setLanguage,language,translateText} from '../src/i18n/runtime.js';
test('six complete translation columns, stable language fallback, full narrative coverage',()=>{
 assert.equal(supportedLanguages.length,6);assert.equal(new Set(catalog.map(r=>r[0])).size,catalog.length);
 for(const row of catalog){assert.equal(row.length,6);assert.ok(row.every(v=>typeof v==='string'&&v.length>0));}
 const sources=new Set(catalog.map(r=>r[0]));
 for(const node of nodes){assert.ok(sources.has(node.title),node.title);assert.ok(sources.has(node.text),node.text);for(const c of node.choices){assert.ok(sources.has(c.label),c.label);assert.ok(sources.has(c.description),c.description);}}
 for(const item of Object.values(information))for(const key of ['content','origin','evidenceType','verificationStatus'])assert.ok(sources.has(item[key]),item[key]);
 setLanguage('en');assert.equal(language(),'en');setLanguage('invalid');assert.equal(language(),'zh-Hant');
 for(const [code]of supportedLanguages)assert.ok(translateText('皇蛾效應',code));
});
test('all branches translate visible renderers without leftover Chinese in English, Spanish or French',()=>{
 function walk(s){for(const code of ['en','es','fr'])for(const fn of [storyMarkup,worldMarkup,recordsMarkup,characterMarkup])for(const line of fn(playerView(s)).replace(/<[^>]*>/g,'\n').split('\n'))assert.ok(!/[\u3400-\u9fff]/.test(translateText(line,code)),code+': '+line);for(const c of currentNode(s)?.choices||[])if(allows(c.availabilityConditions,s))walk(act(s,currentNode(s).id,c.id));}
 const setup=selectBirthplace(fresh(),'seoul-mapo');walk(setup);walk(startStory(setup));
});

import {stationPool,pickStation,getStation} from '../src/world/stations.js';
import {startAwakening,awakeningNode,powerFor,useMicroPower,powerCatalog,awakeningOptions} from '../src/story/awakening.js';
test('25 confirmed starting locations are reachable; Paris, Beijing and New York are not new starts',()=>{
 assert.equal(stationPool.length,25);assert.equal(new Set(stationPool.map(s=>s.id)).size,25);
 for(let i=0;i<25;i++){assert.equal(pickStation(()=>i/25).id,stationPool[i].id);const s=startAwakening(selectBirthplace(fresh(),'seoul-mapo'),stationPool[i].id);assert.equal(s.residenceId,stationPool[i].id);assert.equal(s.birthplaceId,'seoul-mapo');assert.equal(s.currentNodeId,'awakening-0');assert.equal(awakeningNode(s).choices.length,5);assert.ok(!awakeningNode(s).text.includes('巴黎'));}
 for(const id of ['paris','beijing','new-york'])assert.equal(getStation(id),null);
});
test('six coherent questions, five actions each, five powers, branch-aware scenes and save replay',()=>{
 const seenPowers=new Set(),seenRoutes=new Set();
 for(const station of stationPool)for(let route=0;route<5;route++)for(const axis of ['observe','care','adapt','resolve','coordinate']){
  let s=startAwakening(selectBirthplace(fresh('awake-test'),'seoul-mapo'),station.id);
  for(let q=0;q<6;q++){const node=awakeningNode(s);assert.equal(node.choices.length,5);assert.equal(s.awakening.powerId,null);assert.equal(useMicroPower(s),s);const choice=q===0?node.choices[route]:node.choices.find(c=>c.axis===axis);const before=JSON.stringify(s);const next=act(s,node.id,choice.id);assert.notEqual(next,s);assert.equal(JSON.stringify(s),before);assert.equal(act(next,node.id,choice.id),next);assert.ok(minuteValue(next.gameTime)>minuteValue(s.gameTime));s=next;seenRoutes.add(s.awakening.route);assert.deepEqual(replaySave(JSON.parse(JSON.stringify(s))),s);}
  assert.equal(s.decisionHistory.length,6);assert.equal(s.currentNodeId,'awakening-result');const power=powerFor(s);assert.equal(power.axis,axis);seenPowers.add(power.id);
  const used=useMicroPower(s);assert.equal(used.stats.energy,s.stats.energy-4);assert.equal(used.awakening.used,true);assert.equal(useMicroPower(used),used);assert.deepEqual(replaySave(JSON.parse(JSON.stringify(used))),used);
 }
 assert.equal(seenPowers.size,5);assert.deepEqual([...seenRoutes].sort(),['away','bus','library','stop']);
});
test('initial scene never reveals the sleeping librarian; hidden knowledge is not fabricated',()=>{
 let bus=startAwakening(selectBirthplace(fresh(),'seoul-mapo'),'tokyo');assert.ok(!awakeningNode(bus).text.includes('識別證'));
 bus=act(bus,'awakening-0','q0-1');assert.ok(!awakeningNode(bus).text.includes('識別證'));bus=act(bus,'awakening-1','q1-0');assert.ok(awakeningNode(bus).text.includes('識別證'));
 const variants=new Set(['tokyo','seoul','shanghai','hong-kong','manila','alaska'].map(id=>awakeningNode(startAwakening(fresh(),id)).text));assert.equal(variants.size,6);
});
test('new setup restores independently, malformed city/history and premature power use are rejected',()=>{
 const setup={...startAwakening(selectBirthplace(fresh('setup-check'),'taipei-daan'),'rio'),currentNodeId:'setup'};assert.deepEqual(replaySave(setup),setup);assert.equal(selectBirthplace(setup,'seoul-mapo').residenceId,'rio');
 for(const change of [{scenarioId:'paris'},{birthplaceId:'fake'},{decisionHistory:[null]},{decisionHistory:[{nodeId:'awakening-2',choiceId:'q2-0'}]},{awakening:{used:true}},{currentNodeId:'awakening-result'}])assert.equal(replaySave({...setup,...change,currentNodeId:change.currentNodeId||'awakening-0'}),null);
});
test('ability ties use the most recent action among tied leading strategies',()=>{
 let s=startAwakening(selectBirthplace(fresh(),'seoul-mapo'),'tokyo');
 for(const axis of ['observe','care','adapt','care','observe','resolve']){const n=awakeningNode(s);s=act(s,n.id,n.choices.find(c=>c.axis===axis).id);}
 assert.equal(powerFor(s).axis,'observe');assert.equal(s.awakening.scores.care,2);assert.equal(s.awakening.scores.observe,2);
});

import {makeLandMap,landProfile,landNeighbors} from '../src/world/terrain.js';
import {startLand,landAct,canLandAction,landInformation} from '../src/game/land.js';
import {landMarkup} from '../src/ui/land-render.js';
function landStart(id='tokyo',axis='observe',practice=false){let s=startAwakening(selectBirthplace(fresh('land-test'),'seoul-mapo'),id);for(let q=0;q<6;q++){const n=awakeningNode(s);s=act(s,n.id,n.choices.find(c=>c.axis===axis).id);}if(practice)s=useMicroPower(s);return startLand(s);}
function landStep(s,a,i=null){const before=JSON.stringify(s),n=landAct(s,a,i);assert.notEqual(n,s,`${a} blocked at ${s.land.turn}`);assert.equal(JSON.stringify(s),before);assert.deepEqual(replaySave(JSON.parse(JSON.stringify(n))),n);assert.ok(minuteValue(n.gameTime)>=minuteValue(s.gameTime));return n;}
test('land: all 25 regions and five abilities reach a stable settlement, including old practiced saves',()=>{
 const maps=new Set();for(const st of stationPool)for(const axis of powerCatalog.map(p=>p.axis)){
  let s=landStart(st.id,axis,true);maps.add(JSON.stringify(s.land.map));assert.equal(s.birthplaceId,'seoul-mapo');assert.equal(s.residenceId,st.id);assert.ok(s.land.map.every(t=>t.building===null));
  for(const [a,i]of [['camp',7],['well',14],['farm',8],['power',null],['event-risk',null],['rest',null],['rest',null],['rest',null],['rest',null],['event-prepare',null],['rest',null]])s=landStep(s,a,i);
  assert.equal(s.land.status,'settled');assert.equal(s.land.turn,9);assert.ok(s.land.resources.food>=4&&s.land.resources.water>=4);assert.ok(landInformation(s).some(i=>i.content.includes('竹扣')));
 }assert.ok(maps.size>=20);assert.notEqual(landProfile('cairo').farmYield,landProfile('singapore').farmYield);
});
test('land: geographical build rules, finite resources, fog isolation, costs and stale guards',()=>{
 let s=landStart();
 const invalid=fresh();assert.equal(startLand(invalid),invalid);
 assert.equal(canLandAction(s,'well',8),false);assert.equal(canLandAction(s,'well',14),true);assert.equal(canLandAction(s,'farm',8),false);assert.equal(canLandAction(s,'camp',15),false);
 const fog=playerView(s).land.map.filter(t=>!s.land.visible.includes(t.index));assert.ok(fog.every(t=>t.kind==='fog'&&t.stock===null));assert.equal(landAct(s,'gather',0),s);
 const previous=s;s=landStep(s,'camp',7);assert.equal(s.land.resources.wood,previous.land.resources.wood-6);assert.equal(canLandAction(s,'camp',8),false);assert.equal(landAct(s,'camp',7,0),s);
 s=landStep(s,'gather',13);s=landStep(s,'gather',13);s=landStep(s,'gather',13);assert.ok(s.land.event);assert.equal(landAct(s,'rest'),s);s=landStep(s,'event-risk');assert.equal(canLandAction(s,'gather',13),false);
 const before=s.stats.energy;s=landStep(s,'power');assert.equal(s.stats.energy,before-4);assert.equal(canLandAction(s,'power'),false);assert.equal(landAct(s,'power'),s);
 assert.deepEqual(replaySave({...s,land:{resources:{wood:99999},visible:Array.from({length:36},(_,i)=>i)}}),s);
 for(const bad of [{...s,currentNodeId:'land-bad'},{...s,decisionHistory:[...s.decisionHistory,{nodeId:'land',choiceId:'gather',index:999,expectedTurn:s.land.turn}]}])assert.equal(replaySave(bad),null);
});
test('land: river siting changes flood losses; mysteries reveal only after choosing investigation',()=>{
 let vulnerable=landStart();for(const [a,i]of [['well',9],['farm',14],['rest',null],['rest',null]])vulnerable=landStep(vulnerable,a,i);
 const r=vulnerable.land.resources.food;const flooded=landAct(vulnerable,'event-risk');assert.equal(flooded.land.resources.food,r-4);
 let safe=landStart();for(let i=0;i<4;i++)safe=landStep(safe,'rest');const food=safe.land.resources.food;safe=landStep(safe,'event-risk');assert.equal(safe.land.resources.food,food);
 while(safe.land.turn<8)safe=landStep(safe,'rest');assert.ok(!landMarkup(playerView(safe)).includes('鬆脫的竹扣'));const investigated=landStep(safe,'event-prepare'),sealed=landStep(safe,'event-risk');assert.notEqual(investigated.land.log.at(-1).text,sealed.land.log.at(-1).text);
 for(const code of ['en','es','fr'])for(const state of [landStart(),safe,investigated,sealed])for(const line of landMarkup(playerView(state)).replace(/<[^>]*>/g,'\n').split('\n'))assert.ok(!/[\u3400-\u9fff]/.test(translateText(line,code)),code+': '+line);
});
test('land: all environment responses, the later traveler, and the 18-turn incomplete outcome replay safely',()=>{
 for(const id of ['tokyo','cairo','ulaanbaatar'])for(const response of ['event-prepare','event-risk']){
  let s=landStart(id);while(s.land.turn<18){if(s.land.event)s=landStep(s,response);else s=landStep(s,'rest');}
  assert.equal(s.land.status,'unfinished');assert.equal(s.land.event,null);assert.equal(s.land.log.filter(x=>x.event==='visitor').length,1);assert.equal(landAct(s,'rest'),s);
  for(const code of ['en','es','fr'])for(const line of landMarkup(playerView(s)).replace(/<[^>]*>/g,'\n').split('\n'))assert.ok(!/[\u3400-\u9fff]/.test(translateText(line,code)),code+': '+line);
 }
});
