import {StealthSurvey,ReverseTimeEngine,SAVE_KEY,RESIDUE_KEY,normalizeResidue,recordOutcome} from './engine.js';
import {MothAudioSynthesizer} from './audio.js';
const q=selector=>document.querySelector(selector);
export class GameUI{
 constructor(){this.engine=null;this.storage=null;this.residue=normalizeResidue({});this.audio=new MothAudioSynthesizer();this.lastAt=Date.now();this.effects=false;this.previousBug=0;this.pendingValues=null;this.error='';
  try{this.storage=window.localStorage;this.residue=normalizeResidue(JSON.parse(this.storage.getItem(RESIDUE_KEY)||'{}'));const raw=this.storage.getItem(SAVE_KEY);if(raw)this.engine=ReverseTimeEngine.restore(JSON.parse(raw));}catch{this.error='本機紀錄無法讀取；你仍可開始新的一輪。';}
  this.bind();if(this.engine&&this.engine.state.status!=='playing')this.persist();this.home();this.timer=setInterval(()=>this.tick(),500);document.addEventListener('visibilitychange',()=>{if(this.engine&&document.hidden){this.tick();this.persist();}else this.tick();});window.addEventListener('pagehide',()=>this.persist());
 }
 bind(){
  q('#survey').addEventListener('submit',event=>{event.preventDefault();this.pendingValues=Object.fromEntries(new FormData(event.target));if(this.engine?.state.status==='playing')q('#confirm-new').showModal();else this.start(this.pendingValues);});
  q('#cancel-new').onclick=()=>q('#confirm-new').close();q('#accept-new').onclick=()=>{q('#confirm-new').close();this.start(this.pendingValues||{});};
  q('#continue').onclick=()=>{this.lastAt=Date.now();this.tick();this.render(true);};
  q('#approach').onclick=()=>this.action('approach');q('#retreat').onclick=()=>this.action('retreat');q('#ground').onclick=()=>this.action('ground');
  q('#mark-form').addEventListener('submit',event=>{event.preventDefault();const text=q('#mark').value;if([...text.trim()].length>10){q('#relay-status').textContent='這張紙只留得下10個字。';return;}if(this.action('mark',text)){q('#mark').value='';q('#relay-status').textContent='紙角留在了原處。';this.audio.cue('mark');}else q('#relay-status').textContent='這一頁還沒有留下字跡的位置。';});
  q('#pulse-two').onclick=()=>{if(!this.action('pulse',2))q('#relay-status').textContent='敲擊只留下自己的回音。';};q('#pulse-three').onclick=()=>{if(!this.action('pulse',3))q('#relay-status').textContent='敲擊只留下自己的回音。';};
  q('#leave').onclick=()=>{this.persist();this.home();};q('#replay').onclick=()=>this.start({});q('#ending-home').onclick=()=>this.home();
  q('#audio-toggle').onclick=async()=>{if(!this.audio.muted){this.audio.mute();}else{const ok=await this.audio.enable();if(!ok)q('#announcement').textContent='此瀏覽器無法啟用聲音；可繼續靜音遊玩。';}q('#audio-toggle').textContent=this.audio.muted?'靜音':'聲音開啟';q('#audio-toggle').setAttribute('aria-pressed',String(!this.audio.muted));};
  q('#effects').onchange=event=>{this.effects=event.target.checked;document.body.classList.toggle('effects',this.effects);};
  q('#erase').onclick=()=>q('#confirm-reset').showModal();q('#cancel-erase').onclick=()=>q('#confirm-reset').close();q('#confirm-erase').onclick=()=>{q('#confirm-reset').close();this.engine=null;this.residue=normalizeResidue({});try{this.storage?.removeItem(SAVE_KEY);this.storage?.removeItem(RESIDUE_KEY);}catch{this.error='無法清除瀏覽器儲存；本頁記憶已清空。';}this.home();};
 }
 start(values){const seed=globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random()}`;this.engine=new ReverseTimeEngine(StealthSurvey.select(values,seed),values,seed,this.residue);this.lastAt=Date.now();this.previousBug=0;this.persist();this.render(true);}
 home(){q('#onboarding').hidden=false;q('#session').hidden=true;q('#ending').hidden=true;q('#continue').hidden=!this.engine;q('#storage-note').textContent=this.error;q('#onboarding h2').focus({preventScroll:true});document.body.classList.remove('bug-1','bug-2','rift');}
 tick(){const now=Date.now(),seconds=Math.max(0,Math.floor((now-this.lastAt)/1000));if(!seconds)return;this.lastAt+=seconds*1000;if(!this.engine||this.engine.state.status!=='playing')return;this.engine.tick(seconds);this.persist();if(this.engine.state.status!=='playing'){this.render(true);return;}if(!q('#session').hidden){this.renderClock();this.audio.cue('tick');}}
 action(name,payload=''){if(!this.engine)return false;this.tick();const ok=this.engine.action(name,payload);if(ok){this.persist();this.render();}return ok;}
 choose(nodeId,id){if(!this.engine)return;this.tick();if(this.engine.choose(nodeId,id)){this.persist();this.render(true);}}
 persist(){if(!this.engine)return;if(this.engine.state.status!=='playing')this.residue=recordOutcome(this.residue,this.engine);try{if(!this.storage)throw new Error('storage');this.storage.setItem(SAVE_KEY,JSON.stringify(this.engine.serialize()));this.storage.setItem(RESIDUE_KEY,JSON.stringify(this.residue));}catch{this.error='此瀏覽器無法存檔；離開頁面會遺失這輪。';q('#announcement').textContent=this.error;}}
 renderClock(){const v=this.engine.view();q('#day-label').textContent=`DAY ${v.day} / 5 → 0`;q('#clock').textContent=v.clock;q('#remaining').textContent=`本輪剩餘 ${Math.floor(v.remaining/60)}:${String(v.remaining%60).padStart(2,'0')}`;}
 render(focus=false){if(!this.engine)return;const v=this.engine.view();q('#onboarding').hidden=true;q('#session').hidden=v.status!=='playing';q('#ending').hidden=v.status==='playing';if(v.status!=='playing'){q('#ending-text').textContent=v.ending;q('#ending-text').focus({preventScroll:true});if(v.status==='dead')this.audio.cue('dead');setTimeout(()=>{q('#audio-toggle').textContent=this.audio.muted?'靜音':'聲音開啟';q('#audio-toggle').setAttribute('aria-pressed',String(!this.audio.muted));},450);this.residue=recordOutcome(this.residue,this.engine);return;}
  this.renderClock();q('#warning').textContent=v.warning;q('#city').textContent=`${v.host.city} / ${v.host.place}`;q('#host').textContent=v.host.name;q('#constraint').textContent=v.constraint;q('#sync').value=v.sync;q('#sync-number').textContent=`${v.sync}%`;q('#body-cue').textContent=v.pressure>=65?'冷汗聚在指尖。先把身體靠在穩固的位置。':v.pressure>=30?'呼吸不太順，手上的節奏也慢了半拍。':'衣領裡的溫度，還不是你熟悉的那一種。';q('#story').textContent=v.text;
  const group=q('#choices');group.replaceChildren();for(const c of v.choices){const button=document.createElement('button');button.className='choice';button.dataset.choice=c.id;button.dataset.node=v.nodeId;button.textContent=c.text;button.addEventListener('click',()=>this.choose(v.nodeId,c.id));group.append(button);}
  q('#chain').replaceChildren();for(const n of v.chain){const span=document.createElement('span');span.className='node '+n.status;span.textContent=`${n.id} ${n.status==='lit'?'●':n.status==='faint'?'◐':'○'}`;span.setAttribute('aria-label',`節點${n.id} ${n.status==='lit'?'亮起':n.status==='faint'?'微弱':'熄滅'}`);q('#chain').append(span);}
  q('#mark-send').disabled=!v.canMark;q('#mark').disabled=!v.canMark;q('#feed').replaceChildren();for(const text of v.feed.length?v.feed:['沙沙聲中，有一張紙正在被翻回去。']){const li=document.createElement('li');li.textContent=text;q('#feed').append(li);}
  q('#memory').textContent=`原來的日常：${v.memory}`;q('#log').replaceChildren();for(const row of v.log){const li=document.createElement('li');li.textContent=`DAY ${row.day} / ${row.text}`;q('#log').append(li);}
  document.body.classList.toggle('bug-1',v.bug===1);document.body.classList.toggle('bug-2',v.bug>=2);if(v.bug!==this.previousBug){this.audio.cue(v.bug>=2?'rift':'near');if(v.bug>=2&&this.effects){document.body.classList.add('rift');setTimeout(()=>document.body.classList.remove('rift'),800);}this.previousBug=v.bug;}
  q('#announcement').textContent=`DAY ${v.day}，${v.clock}。${v.warning}`;if(focus){q('#host').focus({preventScroll:true});q('#story').scrollIntoView({block:'nearest'});}
 }
}
new GameUI();
