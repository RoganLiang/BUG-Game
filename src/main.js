import {startLand,landAct} from './game/land.js';
import {paintLand} from './ui/land-render.js';
import {startAwakening,useMicroPower} from './story/awakening.js';
import {getStation} from './world/stations.js';
import {paintArrival} from './ui/arrival-scene.js';
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
 document.body.classList.toggle('in-land',Boolean(state.land)&&screen!=='home');
 document.body.classList.toggle('in-story',screen!=='home');
 document.body.classList.toggle('view-clip',screen==='home'||Boolean(state.scenarioId)||state.currentNodeId==='video-0817');
 document.body.classList.toggle('global-opening',screen==='home'||Boolean(state.scenarioId));
 $('#save-status').textContent=saveMessage;$('#home').hidden=screen!=='home';$('#play').hidden=screen==='home';
 $('#continue').disabled=!saved;$('#continue').hidden=!saved;$('#legacy-save-note').hidden=!(saved&&saved.gameVersion==='0.2.0');
 $('#character').innerHTML=characterMarkup(playerView(state));$('#scene-place').textContent=getStation(state.scenarioId)?.names[0]||'PARIS 11';$('#scene-time').textContent=state.gameTime;
 for(const name of ['story','records','world']){$('#'+name).hidden=tab!==name;$('#'+name+'-tab').setAttribute('aria-current',tab===name?'page':'false');}
 $('#story').innerHTML=storyMarkup(playerView(state),selectedLand);$('#records').innerHTML=recordsMarkup(playerView(state));$('#world').innerHTML=worldMarkup(playerView(state),selected,selectedLand);
 if(state.scenarioId){if(state.land)paintLand(playerView(state));else paintArrival(playerView(state));$('#clip-caption').textContent=getStation(state.scenarioId).names[0];$('#clip-clock').textContent=state.gameTime;}else if(screen==='home'){$('#clip-caption').textContent='WORLD / ARRIVAL';$('#clip-clock').textContent='06 CHOICES';}
 translate();
 if(focus){const heading=$(screen==='home'?'#home h2':'#'+tab+' h2');heading?.focus({preventScroll:true});heading?.scrollIntoView({block:'nearest',behavior:'instant'});}
}
let selectedLand=14;
let startWithSetup=false;
function newJourney(){clip.pause();state=startAwakening(randomBirthplace(fresh()));if(startWithSetup)state.currentNodeId='setup';screen='play';tab='story';persist();render(true);}
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
 if(button.dataset.landTile!==undefined){selectedLand=Number(button.dataset.landTile);render();document.querySelector('#'+tab+' [data-land-tile="'+selectedLand+'"]')?.focus({preventScroll:true});return;}
 if(button.dataset.landAction){const next=landAct(state,button.dataset.landAction,button.dataset.landIndex===''?null:Number(button.dataset.landIndex),Number(button.dataset.landTurn));if(next!==state){state=next;persist();$('#live-status').textContent=state.land.log.at(-1).text;render();}return;}
 const action=button.dataset.action;
 if(action==='start-land'){state=startLand(state);tab='story';persist();render(true);return;}
 if(action==='use-power'){state=useMicroPower(state);persist();render(true);return;}
 if(action==='begin'){state=startStory(state);persist();render(true);}
 else if(action==='draw'||action==='fixed'){state=action==='draw'?randomBirthplace(state):selectBirthplace(state,'seoul-mapo');persist();render(true);}
 else if(action==='world'||action==='records'){tab=action;render(true);}
 else if(action==='reset')$('#reset-dialog').showModal();
});
$('#play').addEventListener('keydown',event=>{const tile=event.target.closest('[data-land-tile]');if(!tile)return;const i=Number(tile.dataset.landTile),delta={ArrowLeft:-1,ArrowRight:1,ArrowUp:-6,ArrowDown:6}[event.key];if(!delta)return;event.preventDefault();const n=i+delta;if(n<0||n>35||event.key==='ArrowLeft'&&i%6===0||event.key==='ArrowRight'&&i%6===5)return;selectedLand=n;render();document.querySelector('#'+tab+' [data-land-tile="'+n+'"]')?.focus({preventScroll:true});});
render();
