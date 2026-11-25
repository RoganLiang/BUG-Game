import test from 'node:test';
import assert from 'node:assert/strict';
import {SCENARIO_DB,loadScenarioBatch,fallbackScenario} from '../data/scenarios.js';
import {ReverseTimeEngine,StealthSurvey,ProximityRadar,shuffleChoices,seededRandom,recordOutcome,normalizeResidue} from '../js/engine.js';
const first=()=>new ReverseTimeEngine(SCENARIO_DB.scenarios[0],{},'engine-test');
test('200 complete pairs / 400 valid unique directions, including 20 seeds and 180 generated pairs',()=>{
 const rows=loadScenarioBatch(SCENARIO_DB);assert.equal(rows.length,400);assert.equal(new Set(rows.map(r=>r.id)).size,400);assert.equal(rows.filter(r=>r.origin==='seed').length,40);assert.equal(rows.filter(r=>r.origin==='procedural').length,360);assert.equal(new Set(rows.map(r=>r.host_profile.city)).size>=10,true);
 for(let i=0;i<400;i+=2){assert.equal(rows[i].id.replace('-ab',''),rows[i+1].id.replace('-ba',''));assert.notEqual(rows[i].real_job,rows[i+1].real_job);assert.ok(rows[i+1].host_profile.name.endsWith(rows[i].real_job));}
 for(const bad of [null,{},[],[{id:'x'}],{scenarios:[rows[0],rows[0]]},{scenarios:[{...rows[0],breakout_index:3}]}])assert.throws(()=>loadScenarioBatch(bad));
});
test('all 400 routes survive with consistent countdown, 5-node cycle and restorable saves',()=>{
 for(const row of SCENARIO_DB.scenarios){let engine=new ReverseTimeEngine(row,{},'win-'+row.id);assert.equal(new Set(engine.state.chain.map(n=>n.controls)).size,5);assert.deepEqual(engine.state.chain.map(n=>n.controls),[2,3,4,5,1]);let previous=engine.worldMinutes;
  for(let i=0;i<5;i++){assert.equal(engine.view().choices.length,3);const oldNode=engine.node.id;assert.equal(engine.choose(oldNode,'notice'),true);assert.equal(engine.choose(oldNode,'notice'),false);assert.ok(engine.worldMinutes<previous);previous=engine.worldMinutes;engine=ReverseTimeEngine.restore(engine.serialize(1000),1000);}
  assert.equal(engine.state.status,'survived');assert.equal(engine.day,0);assert.equal(engine.view().choices.length,0);assert.match(engine.view().ending,/皇蛾已離巢/);assert.equal(engine.action('approach'),false);
 }
});
test('all branches of twenty seeds finish without undefined states; all four failure causes are reachable',()=>{
 const outcomes=new Set();for(const row of SCENARIO_DB.scenarios.filter(r=>r.origin==='seed'&&r.id.endsWith('-ab'))){function walk(engine){if(engine.state.status!=='playing'){outcomes.add(engine.state.endCause);return;}for(const id of ['notice','wait','press']){const branch=ReverseTimeEngine.restore(engine.serialize(1000),1000);assert.equal(branch.choose(branch.node.id,id),true);walk(branch);}}walk(new ReverseTimeEngine(row,{},'graph-'+row.id));}
 const contact=first();while(contact.state.status==='playing')contact.action('approach');outcomes.add(contact.state.endCause);const timeout=first();timeout.tick(300);outcomes.add(timeout.state.endCause);assert.deepEqual([...outcomes].sort(),['chain','self','survived','sync','time']);
});
test('Fisher–Yates orders vary across seeds, remain stable while reading, and do not expose scoring',()=>{
 const positions=new Set();for(let i=0;i<100;i++){const shuffled=shuffleChoices(['wait','press','notice'],seededRandom('order-'+i));assert.equal(new Set(shuffled).size,3);positions.add(shuffled.indexOf('notice'));}assert.equal(positions.size,3);
 const e=first(),before=e.view().choices;e.tick(1);assert.deepEqual(e.view().choices,before);for(const choice of before)assert.deepEqual(Object.keys(choice).sort(),['id','text']);const v=e.view();for(const key of ['breakout_index','real_skill','real_job','distance','orders','trace','controls'])assert.ok(!(key in v));assert.equal(JSON.stringify(v).includes('breakout_index'),false);
});
test('proximity thresholds, indirect marks, sensory messages and reciprocal chain consequences',()=>{
 assert.deepEqual([900,500,499,100,99,0].map(ProximityRadar.level),[0,0,1,1,2,3]);const e=first();assert.equal(e.action('mark','紙角'),false);e.choose(e.node.id,'wait');assert.equal(e.action('mark','12345678901'),false);assert.equal(e.action('mark','<紙角>'),true);assert.equal(e.state.marks[0].receivingLayer,5);assert.equal(e.action('mark','第二次'),false);assert.equal(e.state.relayReady,true);
 e.action('approach');assert.equal(e.view().bug,1);assert.equal(e.action('pulse',2),true);assert.equal(e.action('pulse',3),true);assert.equal(e.action('pulse',4),false);e.action('retreat');assert.ok(e.state.distance>0);
 const unmarked=first();for(let i=0;i<4;i++)unmarked.choose(unmarked.node.id,'wait');assert.equal(unmarked.state.endCause,'chain');const marked=first();marked.choose(marked.node.id,'wait');marked.action('mark','角落');for(let i=1;i<4;i++)marked.choose(marked.node.id,'wait');assert.equal(marked.state.status,'playing');assert.ok(marked.state.feed.some(x=>x.includes('第四盞燈')));
});
test('local residue is idempotent, bounded, case-safe, and adds previous-run memory without explanations',()=>{
 const e=first();e.tick(300);let residue=recordOutcome({},e);assert.equal(residue.play_count,1);assert.deepEqual(recordOutcome(residue,e),residue);const next=new ReverseTimeEngine(SCENARIO_DB.scenarios[1],{},'another',residue);next.tick(300);residue=recordOutcome(residue,next);assert.equal(residue.play_count,2);const replay=new ReverseTimeEngine(SCENARIO_DB.scenarios[2],{},'third',residue);assert.ok(replay.state.feed.length>0);
 const deadSelf=first();while(deadSelf.state.status==='playing')deadSelf.action('approach');const scar=recordOutcome({},deadSelf),again=new ReverseTimeEngine(SCENARIO_DB.scenarios[2],{},'scar',scar);again.action('approach');again.action('approach');assert.match(again.view().warning,/另一個時空/);assert.equal(normalizeResidue({play_count:-4}).play_count,0);
});
test('saved history rebuilds derived state and accounts for time away; rejects malformed histories',()=>{
 const e=first();e.choose(e.node.id,'notice');const raw=e.serialize(1000);assert.equal(ReverseTimeEngine.restore({...raw,sync:999,distance:999},1000).state.sync,e.state.sync);assert.equal(ReverseTimeEngine.restore(raw,6000).state.remaining,e.state.remaining-5);assert.equal(ReverseTimeEngine.restore(raw,1000000).state.endCause,'time');
 for(const bad of [null,{}, {...raw,version:22},{...raw,scenarioId:'missing'},{...raw,trace:[{type:'action',name:'bad'}]},{...raw,trace:[{type:'choose',nodeId:e.node.id,choiceId:'missing'}]},{...raw,trace:[{type:'tick',seconds:-1}]}])assert.throws(()=>ReverseTimeEngine.restore(bad,1000));
});
test('custom input has a deterministic free fallback and is treated only as data',()=>{
 const input={job:'<script>alert(1)</script>',skill:'記住紙角',avoid:'吵雜'};assert.deepEqual(fallbackScenario(input),fallbackScenario(input));const choice=StealthSurvey.select(input,'seed');assert.ok(choice.id.startsWith('custom-'));const e=new ReverseTimeEngine(choice,input,'custom');e.choose(e.node.id,'notice');assert.deepEqual(ReverseTimeEngine.restore(e.serialize(1000),1000).state,e.state);assert.equal(StealthSurvey.read({job:'字'.repeat(1000)}).job.length,80);
});
test('a narrative batch with only the agreed keys loads without engine refactoring',()=>{
 const base=SCENARIO_DB.scenarios[0];const minimal=Object.fromEntries(['id','real_job','real_skill','host_profile','host_debuff','reverse_crisis','choices','breakout_index'].map(k=>[k,base[k]]));minimal.id='import-test';const [expanded]=loadScenarioBatch([minimal]);assert.equal(expanded.nodes.length,5);const engine=new ReverseTimeEngine(minimal,{},'import');while(engine.state.status==='playing')engine.choose(engine.node.id,'option-2');assert.equal(engine.state.status,'survived');
});
