import {fresh,playerView} from './game/state.js';
import {selectBirthplace,randomBirthplace,startStory,act} from './game/engine.js';
import {loadSave,persistSave} from './storage/save.js';
import {characterMarkup,storyMarkup,recordsMarkup,worldMarkup} from './ui/render.js';
import {paintScene} from './ui/scene.js';
const $=s=>document.querySelector(s);
let storage;try{storage=window.localStorage;}catch{storage=null;}
const loaded=loadSave(storage);let state=loaded.state||fresh(),saved=loaded.state,screen='home',tab='story',selected=null,saveMessage=loaded.message;
function persist(){saveMessage=persistSave(storage,state);saved=structuredClone(state);}
function render(focus=false){
 $('#save-status').textContent=saveMessage;$('#home').hidden=screen!=='home';$('#play').hidden=screen==='home';
 $('#continue').disabled=!saved;$('#continue').hidden=!saved;
 $('#character').innerHTML=characterMarkup(playerView(state));$('#scene-place').textContent='2026-11-01 · PARIS 11';$('#scene-time').textContent=state.gameTime;
 for(const name of ['story','records','world']){$('#'+name).hidden=tab!==name;$('#'+name+'-tab').setAttribute('aria-current',tab===name?'page':'false');}
 $('#story').innerHTML=storyMarkup(playerView(state));$('#records').innerHTML=recordsMarkup(playerView(state));$('#world').innerHTML=worldMarkup(playerView(state),selected);
 if(focus){const heading=$(screen==='home'?'#home h2':'#'+tab+' h2');heading?.focus({preventScroll:true});heading?.scrollIntoView({block:'nearest',behavior:'instant'});}
}
function newJourney(){state=randomBirthplace(fresh());screen='play';tab='story';persist();render(true);}
$('#start').onclick=()=>{if(saved&&saved.currentNodeId!=='home')$('#new-dialog').showModal();else newJourney();};
$('#confirm-new').onclick=()=>{$('#new-dialog').close();newJourney();};$('#cancel-new').onclick=()=>$('#new-dialog').close();
$('#continue').onclick=()=>{state=structuredClone(saved);screen=state.currentNodeId==='home'?'home':'play';render(true);};
$('#home-button').onclick=()=>{screen='home';render(true);};
for(const name of ['story','records','world'])$('#'+name+'-tab').onclick=()=>{tab=name;render(true);};
function reset(){state=fresh();saved=null;selected=null;tab='story';screen='home';try{storage.removeItem('moth-effect-bug-v2');saveMessage='本輪進度已清除';}catch{saveMessage='無法清除本機資料；記憶體中的本輪已重設';}render(true);}
$('#reset').onclick=()=>$('#reset-dialog').showModal();$('#cancel-reset').onclick=()=>$('#reset-dialog').close();$('#confirm-reset').onclick=()=>{$('#reset-dialog').close();reset();};
$('#crt').onchange=e=>document.body.classList.toggle('crt',e.target.checked);
$('#play').addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button||button.disabled)return;
 if(button.dataset.choice){const next=act(state,button.dataset.node,button.dataset.choice);if(next!==state){state=next;persist();$('#live-status').textContent=`已記錄選擇，目前遊戲時間 ${state.gameTime}`;render(true);}return;}
 if(button.dataset.city){selected=button.dataset.city;render();$('#city-'+selected).scrollIntoView({block:'nearest'});return;}
 const action=button.dataset.action;
 if(action==='begin'){state=startStory(state);persist();render(true);}
 else if(action==='draw'||action==='fixed'){state=action==='draw'?randomBirthplace(state):selectBirthplace(state,'seoul-mapo');persist();render(true);}
 else if(action==='world'||action==='records'){tab=action;render(true);}
 else if(action==='reset')$('#reset-dialog').showModal();
});
paintScene();render();
