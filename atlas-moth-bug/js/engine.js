import {SCENARIO_DB,loadScenarioBatch,fallbackScenario} from '../data/scenarios.js';
export const SAVE_KEY='atlas-moth-run-v1';
export const RESIDUE_KEY='atlas-moth-residue-v1';
export const ENGINE_VERSION=1;
const endings={self:'[頻率重疊：兩個相同的靈魂不該同時呼吸。你的存在已被時間軸抹除。]',chain:'[鏈條斷裂：代號 25942 某個節點已熄滅。因果反噬啟動。]',sync:'[輪廓失焦：門後的人停下腳步。你的聲音沒有被留下。]',time:'[刻度歸零：最後一片鱗粉落下，紙上的地址已經空白。]',survived:'[時間線閉環已修復。擬態解除。皇蛾已離巢。]'};
const clone=value=>structuredClone(value);
function clamp(value,min,max){return Math.max(min,Math.min(max,value));}
export function hashSeed(text){return [...String(text)].reduce((a,c)=>(Math.imul(a,31)+c.charCodeAt(0))>>>0,2166136261);}
export function seededRandom(seed){let n=hashSeed(seed);return ()=>{n=(Math.imul(n,1664525)+1013904223)>>>0;return n/4294967296;};}
export function shuffleChoices(array,rng=Math.random){const result=array.slice();for(let i=result.length-1;i>0;i--){const j=Math.min(i,Math.max(0,Math.floor(rng()*(i+1))));[result[i],result[j]]=[result[j],result[i]];}return result;}
export class StealthSurvey{
 static read(values){return {job:String(values.job||'').trim().slice(0,80),skill:String(values.skill||'').trim().slice(0,80),avoid:String(values.avoid||'').trim().slice(0,80)};}
 static select(values,seed){const v=this.read(values);if(v.job||v.skill||v.avoid)return fallbackScenario(v);return SCENARIO_DB.scenarios[hashSeed(seed)%SCENARIO_DB.scenarios.length];}
}
export class ProximityRadar{
 static level(distance){return distance<=0?3:distance<100?2:distance<500?1:0;}
 static message(level,residue,distance){if(residue.past_causes_of_death?.includes('self')&&distance<600)return '你的後頸突然一陣發涼，彷彿在另一個時空死過一次。';return ['玻璃上的輪廓暫時安穩。','手機邊框滲出靜電，指針退了一格。','轉角像被摺過兩次。門後的人影失去輪廓。',''][level];}
}
export class ReverseTimeEngine{
 constructor(scenario,values={},seed=globalThis.crypto?.randomUUID?.()||String(Date.now()),residue={}){
  this.scenario=loadScenarioBatch([scenario])[0];this.input=StealthSurvey.read(values);this.seed=String(seed).slice(0,120);this.residue=normalizeResidue(residue);
  this.state={version:ENGINE_VERSION,status:'playing',index:0,elapsed:0,remaining:300,sync:100,pressure:0,distance:900,clues:0,relayReady:false,orders:this.scenario.nodes.map((n,i)=>shuffleChoices(n.choices.map(c=>c.id),seededRandom(this.seed+':'+i))),chain:Array.from({length:5},(_,i)=>({id:i+1,controls:(i+1)%5+1,status:'lit'})),feed:[],marks:[],log:[],trace:[],endCause:null};
  if(this.residue.play_count>=2&&this.residue.past_hosts.length){const past=this.residue.past_hosts.at(-1);this.state.feed.push(`收音機倒著吐出一行舊聞：${past.city}，${past.outcome==='survived'?'一盞窗燈在清晨熄滅。':'某扇門在夜裡留下一張空白紙。'}`);}
 }
 get day(){return this.state.status==='survived'?0:Math.max(1,5-this.state.index);}
 get worldMinutes(){return this.day*1440+856-this.state.elapsed;}
 get clock(){const min=((this.worldMinutes%1440)+1440)%1440;return `${String(Math.floor(min/60)).padStart(2,'0')}:${String(min%60).padStart(2,'0')}`;}
 get node(){return this.scenario.nodes[this.state.index]||null;}
 end(cause){if(this.state.status!=='playing')return;this.state.status=cause==='survived'?'survived':'dead';this.state.endCause=cause;if(cause==='chain')this.state.chain[2].status='dark';}
 check(){if(this.state.distance<=0)this.end('self');else if(this.state.sync<=0)this.end('sync');else if(this.state.remaining<=0)this.end('time');}
 tick(seconds=1,record=true){if(this.state.status!=='playing'||!Number.isFinite(seconds)||seconds<=0)return false;const amount=Math.min(300,Math.floor(seconds));if(!amount)return false;this.state.elapsed+=amount;this.state.remaining=Math.max(0,this.state.remaining-amount);if(record)this.state.trace.push({type:'tick',seconds:amount});this.check();return true;}
 choose(nodeId,choiceId,record=true){const s=this.state,n=this.node;if(s.status!=='playing'||!n||nodeId!==n.id)return false;const choice=n.choices.find(c=>c.id===choiceId||`choice-${hashSeed(this.seed+n.id+c.id).toString(36)}`===choiceId);if(!choice)return false;
  const before=this.day;this.tick(8,false);
  if(s.status!=='playing'){if(record)s.trace.push({type:'choose',nodeId,choiceId});return true;}
  if(choice.effect==='notice'){s.sync=clamp(s.sync-(s.index===4?0:22),0,100);s.clues++;s.distance=Math.min(1800,s.distance+110);s.pressure=Math.max(0,s.pressure-8);s.relayReady=true;s.chain[(s.index%4)+1].status='lit';s.feed.push('另一端的紙角退回原位。有人沿著空出來的路離開。');}
  else if(choice.effect==='delay'){s.pressure=clamp(s.pressure+25,0,100);s.distance=Math.max(0,s.distance-180);s.sync=Math.min(100,s.sync+3);s.feed.push('遠端的光閃了一下，回音比剛才更近。');}
  else{s.sync=Math.max(0,s.sync-35);s.pressure=clamp(s.pressure+20,0,100);s.distance=Math.max(0,s.distance-60);s.feed.push('有人停下手上的動作，隔著玻璃看向這邊。');}
  if(s.pressure>=75)s.sync=Math.max(0,s.sync-8);
  if(s.index===2&&choice.effect!=='notice'&&!s.relayReady)s.chain[2].status='faint';
  if(s.index===3&&s.chain[2].status==='faint'&&choice.effect!=='notice'&&!s.relayReady){this.end('chain');}
  if(choice.effect==='notice'&&s.chain[2].status==='faint')s.chain[2].status='lit';
  if(s.index===2&&s.relayReady){s.sync=Math.min(100,s.sync+4);s.distance=Math.min(1800,s.distance+40);s.pressure=Math.max(0,s.pressure-4);s.feed.push('第四盞燈把一行倒置字跡送回來。走廊的腳步退遠，你的呼吸重新穩住。');}
  s.log.push({day:before,text:choice.text});s.index++;if(record)s.trace.push({type:'choose',nodeId,choiceId});this.check();if(s.status==='playing'&&s.index>=5)this.end('survived');return true;
 }
 action(name,payload='',record=true){const s=this.state;if(s.status!=='playing'||!['approach','retreat','mark','pulse','ground'].includes(name))return false;
  if(name==='mark'&&(this.day>=5||!String(payload).trim()||[...String(payload).trim()].length>10||s.marks.some(m=>m.day===this.day)))return false;
  if(name==='pulse'&&(ProximityRadar.level(s.distance)<1||s.distance<=0||![2,3].includes(Number(payload))))return false;
  this.tick({approach:12,retreat:12,mark:10,pulse:6,ground:12}[name],false);if(s.status!=='playing'){if(record)s.trace.push({type:'action',name,payload});return true;}
  if(name==='approach'){s.distance=Math.max(0,s.distance-(s.distance>=500?250:s.distance>100?100:60));s.pressure=clamp(s.pressure+5,0,100);}
  else if(name==='retreat'){s.distance=Math.min(1800,s.distance+200);s.sync=Math.max(0,s.sync-2);}
  else if(name==='ground'){s.sync=Math.min(100,s.sync+4);s.pressure=Math.max(0,s.pressure-25);}
  else if(name==='mark'){const text=String(payload).trim();if(this.day>=5||!text||[...text].length>10||s.marks.some(m=>m.day===this.day))return false;s.marks.push({day:this.day,receivingLayer:this.day+1,text});s.relayReady=true;s.feed.push('書頁的邊角浮出一行比紙更舊的墨痕。另一端的燈重新亮起。');s.chain[2].status='lit';}
  else if(name==='pulse'){if(ProximityRadar.level(s.distance)<1||s.distance<=0||![2,3].includes(Number(payload)))return false;if(Number(payload)===3)s.relayReady=true;s.feed.push(Number(payload)===2?'遠端的兩下閃光，接著是一片安靜。':'遠端的三下閃光，紙頁翻回同一個位置。');}
  else return false;
  if(record)s.trace.push({type:'action',name,payload});this.check();return true;
 }
 view(){const s=this.state,n=this.node;const original=this.input.job||'一個熟悉的日常',memory=s.index>=3?'[▓▓▓]':s.index>=1?original.slice(0,2)+'[▓▓▓]':original;return {status:s.status,day:this.day,clock:this.clock,remaining:s.remaining,sync:s.sync,pressure:s.pressure,bug:ProximityRadar.level(s.distance),warning:ProximityRadar.message(ProximityRadar.level(s.distance),this.residue,s.distance),host:clone(this.scenario.host_profile),constraint:this.scenario.host_debuff,text:n?.text||'',nodeId:n?.id||'',choices:n&&s.status==='playing'?s.orders[s.index].map(id=>({id:`choice-${hashSeed(this.seed+n.id+id).toString(36)}`,text:n.choices.find(c=>c.id===id).text})):[],chain:s.chain.map(n=>({id:n.id,status:n.status})),feed:s.feed.slice(-5),marks:clone(s.marks),log:clone(s.log),memory,ending:endings[s.endCause]||'',canMark:this.day<5&&!s.marks.some(m=>m.day===this.day),instinct:this.residue.past_causes_of_death.includes('self')};}
 serialize(now=Date.now()){return {version:ENGINE_VERSION,scenarioId:this.scenario.id,input:this.input,seed:this.seed,residue:this.residue,trace:clone(this.state.trace),savedAt:now};}
 static restore(raw,now=Date.now()){
  if(!raw||raw.version!==ENGINE_VERSION||typeof raw.seed!=='string'||raw.seed.length>120||!Array.isArray(raw.trace)||raw.trace.length>1200||!Number.isFinite(raw.savedAt)||raw.savedAt>now+60000)throw new Error('無法讀取這輪存檔');
  const input=StealthSurvey.read(raw.input||{}),scenario=raw.scenarioId?.startsWith('custom-')?fallbackScenario(input):SCENARIO_DB.scenarios.find(s=>s.id===raw.scenarioId);if(!scenario||scenario.id!==raw.scenarioId)throw new Error('無法讀取這輪存檔');const engine=new ReverseTimeEngine(scenario,input,raw.seed,raw.residue);
  for(const event of raw.trace){if(!event||engine.state.status!=='playing')throw new Error('無法讀取這輪存檔');let ok=false;if(event.type==='tick'&&Number.isInteger(event.seconds)&&event.seconds>0&&event.seconds<=300)ok=engine.tick(event.seconds);else if(event.type==='choose')ok=engine.choose(event.nodeId,event.choiceId);else if(event.type==='action')ok=engine.action(event.name,event.payload);if(!ok)throw new Error('無法讀取這輪存檔');}
  const away=Math.max(0,Math.floor((now-raw.savedAt)/1000));if(away&&engine.state.status==='playing')engine.tick(away);return engine;
 }
}
export function normalizeResidue(raw){const r=raw&&typeof raw==='object'?raw:{};return {version:1,play_count:Number.isInteger(r.play_count)?clamp(r.play_count,0,100000):0,past_hosts:Array.isArray(r.past_hosts)?r.past_hosts.slice(-12).filter(x=>x&&typeof x.city==='string'&&typeof x.name==='string'&&['dead','survived'].includes(x.outcome)).map(x=>({city:x.city.slice(0,80),name:x.name.slice(0,80),outcome:x.outcome})):[],past_causes_of_death:Array.isArray(r.past_causes_of_death)?r.past_causes_of_death.filter(x=>['self','chain','sync','time'].includes(x)).slice(-12):[],recordedRuns:Array.isArray(r.recordedRuns)?r.recordedRuns.filter(x=>typeof x==='string').slice(-12):[]};}
export function recordOutcome(residue,engine){const r=normalizeResidue(residue);if(engine.state.status==='playing'||r.recordedRuns.includes(engine.seed))return r;r.play_count++;r.recordedRuns.push(engine.seed);r.past_hosts.push({name:engine.scenario.host_profile.name,city:engine.scenario.host_profile.city,outcome:engine.state.status});if(engine.state.status==='dead')r.past_causes_of_death.push(engine.state.endCause);return normalizeResidue(r);}
