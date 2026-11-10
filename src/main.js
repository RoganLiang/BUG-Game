import {fresh,playerView} from './game/state.js';
import {selectBirthplace,randomBirthplace,startStory,act} from './game/engine.js';
import {loadSave,persistSave} from './storage/save.js';
import {characterMarkup,storyMarkup,recordsMarkup,worldMarkup} from './ui/render.js';
import {createClipPlayer} from './ui/clip.js';
import {setLanguage,language,localizeDOM} from './i18n/runtime.js';
const $=s=>document.querySelector(s);
let initialLanguage='zh-Hant';try{initialLanguage=localStorage.getItem('bug-language')||'zh-Hant';}catch{}
setLanguage(initialLanguage);$('#language').value=language();
function translate(){localizeDOM();$('#translation-note').hidden=language()==='zh-Hant';}
const clip=createClipPlayer(()=>translate());
$('#language').onchange=e=>{setLanguage(e.target.value);try{localStorage.setItem('bug-language',language());}catch{}render();};
let storage;try{storage=window.localStorage;}catch{storage=null;}
const loaded=loadSave(storage);let state=loaded.state||fresh(),saved=loaded.state,screen='home',tab='story',selected=null,saveMessage=loaded.message;
function persist(){saveMessage=persistSave(storage,state);saved=structuredClone(state);}
function render(focus=false){
 document.body.classList.toggle('in-story',screen!=='home');
 document.body.classList.toggle('view-clip',screen==='home'||state.currentNodeId==='video-0817');
 $('#save-status').textContent=saveMessage;$('#home').hidden=screen!=='home';$('#play').hidden=screen==='home';
 $('#continue').disabled=!saved;$('#continue').hidden=!saved;
 $('#character').innerHTML=characterMarkup(playerView(state));$('#scene-place').textContent='2026-11-01 · PARIS 11';$('#scene-time').textContent=state.gameTime;
 for(const name of ['story','records','world']){$('#'+name).hidden=tab!==name;$('#'+name+'-tab').setAttribute('aria-current',tab===name?'page':'false');}
 $('#story').innerHTML=storyMarkup(playerView(state));$('#records').innerHTML=recordsMarkup(playerView(state));$('#world').innerHTML=worldMarkup(playerView(state),selected);
 translate();
 if(focus){const heading=$(screen==='home'?'#home h2':'#'+tab+' h2');heading?.focus({preventScroll:true});heading?.scrollIntoView({block:'nearest',behavior:'instant'});}
}
let startWithSetup=false;
function newJourney(){clip.pause();state=startWithSetup?randomBirthplace(fresh()):startStory(selectBirthplace(fresh(),'seoul-mapo'));screen='play';tab='story';persist();render(true);}
function requestJourney(setup){startWithSetup=setup;if(saved&&saved.currentNodeId!=='home')$('#new-dialog').showModal();else newJourney();}
$('#setup-start').onclick=()=>requestJourney(true);
$('#start').onclick=()=>requestJourney(false);
$('#confirm-new').onclick=()=>{$('#new-dialog').close();newJourney();};$('#cancel-new').onclick=()=>$('#new-dialog').close();
$('#continue').onclick=()=>{clip.pause();state=structuredClone(saved);screen=state.currentNodeId==='home'?'home':'play';render(true);};
$('#home-button').onclick=()=>{screen='home';render(true);};
for(const name of ['story','records','world'])$('#'+name+'-tab').onclick=()=>{tab=name;render(true);};
function reset(){clip.reset();state=fresh();saved=null;selected=null;tab='story';screen='home';try{storage.removeItem('moth-effect-bug-v2');saveMessage='本輪進度已清除';}catch{saveMessage='無法清除本機資料；記憶體中的本輪已重設';}render(true);}
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
render();
