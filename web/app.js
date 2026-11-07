import {origins,chapters,fresh,draw,choose,restore} from './game.js';
const $=s=>document.querySelector(s), key='moth-effect-bug-v1';
let state=fresh(), tab='story', selected=-1, storageOK=true;
try{state=restore(localStorage.getItem(key));}catch{storageOK=false;}
function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch{storageOK=false;}}
function render(){
 $('#save-status').textContent=storageOK?'本機自動存檔':'無法存檔 · 本次仍可遊玩';
 $('#origin-name').textContent=state.origin===null?'尚未誕生的旅人':`${origins[state.origin].name}出生的旅人`;
 $('#origin-trait').textContent=state.origin===null?'命運尚未決定你的起點':`${origins[state.origin].tag} · ${origins[state.origin].trait}`;
 $('#stats').innerHTML=Object.entries(state.stats).map(([k,v])=>`<div class="stat"><div class="stat-head"><span>${{energy:'能量',insight:'觀察',empathy:'共鳴',influence:'影響'}[k]}</span><b>${v}</b></div><div class="bar" role="meter" aria-label="${k}" aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100"><i style="width:${v}%"></i></div></div>`).join('');
 $('#story').hidden=tab!=='story';$('#world').hidden=tab!=='world';
 for(const t of ['story','world'])$('#'+t+'-tab').setAttribute('aria-selected',String(tab===t));
 const last=state.history.at(-1);
 const feedback=last?`<div class="feedback"><span>✦ 回響 / ${last.result}</span><small>${last.hint} · 全球觀測已更新</small></div>`:'';
 if(state.origin===null){$('#story').innerHTML='<div class="chapter-meta">YOUR FIRST WINGBEAT / 起點</div><h2>世界很大，你會在哪裡誕生？</h2><p class="prose">從四座城市中，抽選你的出生地。每個起點都帶著不同天賦；而同一隻皇蛾，會將你引向巴黎。</p><button class="primary" id="draw">✦ 抽選我的出生地</button><p class="draw-note">臺北 / 巴黎 / 京都 / 奈洛比 · 各 25%</p>';$('#draw').onclick=()=>{state=draw(state);save();render();};}
 else if(state.step<chapters.length){const c=chapters[state.step];$('#story').innerHTML=feedback+`<div class="chapter-meta">CHAPTER 0${state.step+1} / ${c.place}</div><div class="progress">${chapters.map((_,i)=>`<i class="${i<=state.step?'done':''}"></i>`).join('')}</div><h2>${c.title}</h2><p class="prose">${c.text}</p>${c.options.map((o,i)=>`<button class="choice" data-choice="${i}"><span class="key">0${i+1}</span>${o.label}<small>${o.hint}</small></button>`).join('')}`;document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{state=choose(state,Number(b.dataset.choice));save();render();});}
 else{$('#story').innerHTML=feedback+`<div class="chapter-meta">PROLOGUE COMPLETE / 巴黎前導完</div><h2>你已經改變了這個黎明。</h2><p class="prose">三次選擇，三道回響。旅程暫時停在這裡，你留下的影響仍在觀測台上延續。</p><button class="primary" id="view-world">◎ 查看我的全球回響</button><h3>這一夜的行動紀錄</h3>${state.history.map(h=>`<details class="history"><summary>${h.label}</summary><p>${h.result}</p><p>${h.hint}</p></details>`).join('')}`;$('#view-world').onclick=()=>{tab='world';render();};}
 $('#world').innerHTML=`<div class="chapter-meta">WORLD OBSERVATORY / 模擬訊號</div><h2>每一次振翅，都留下痕跡。</h2><p class="prose">四座城市，同一張看不見的網。風險越低，棲地越穩定。選擇城市查看你的影響。</p><div class="world-map"><svg viewBox="0 0 320 150" aria-hidden="true"><path fill="#61765c" d="M22 24h50v12h22v14H78v19H60v17H45V65H30V45H22z M74 87h25v16h12v18H96v22H84v-31H74z M144 25h43v11h42v-9h52v22h20v18h-34v15h-23V65h-24v-9h-36v15h-13v-21h-27z M153 70h42v20h13v21h-18v20h-18v-24h-19z M251 108h38v12h15v14h-49z"/></svg>${state.events.map((e,i)=>`<button class="pin" data-city="${i}" style="left:${e.x}%;top:${e.y}%;min-height:0;padding:0;border:0" aria-label="查看${e.city}"><span>${e.city}</span></button>`).join('')}</div>${state.events.map((e,i)=>{const original={paris:64,taipei:72,nairobi:58,kyoto:61}[e.id];return `<div class="event" id="event-${i}"><div class="event-head"><span>${e.city} / ${e.label}</span><b>風險 ${e.risk}%</b></div><div class="bar"><i style="width:${e.risk}%"></i></div><p>${original===e.risk?'尚未受到你的行動影響':`你的行動使風險降低 ${original-e.risk} 點`}</p>${selected===i?`<p>觀測紀錄：${state.history.filter(h=>h.event===e.id).map(h=>h.result).join(' ')||'等待下一次振翅。'}</p>`:''}</div>`;}).join('')}`;
 document.querySelectorAll('[data-city]').forEach(b=>b.onclick=()=>{selected=Number(b.dataset.city);render();$('#event-'+selected).scrollIntoView({block:'nearest'});});
}
for(const t of ['story','world'])$('#'+t+'-tab').onclick=()=>{tab=t;render();};
$('#reset').onclick=()=>$('#reset-dialog').showModal();$('#cancel-reset').onclick=()=>$('#reset-dialog').close();$('#confirm-reset').onclick=()=>{state=fresh();tab='story';selected=-1;save();$('#reset-dialog').close();render();};
// Original procedural pixel art. No external assets or network requests.
const ctx=$('#scene').getContext('2d');
function rect(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h);}
rect(0,0,320,144,'#24383f');rect(0,58,320,50,'#35474a');
for(let i=0;i<55;i++){const x=(i*67+13)%320,y=(i*31+8)%65;rect(x,y,1,1,i%3?'#8d9d89':'#e2d4a0');}
rect(249,21,12,12,'#d6d8ad');rect(246,24,18,6,'#d6d8ad');rect(246,20,10,9,'#24383f');
for(let i=0;i<21;i++){const x=i*17,h=12+(i*13)%25;rect(x,101-h,15,h,'#1a2a30');rect(x+2,98-h,10,4,'#1a2a30');for(let j=0;j<3;j++)if((i+j)%3)rect(x+3+j*4,91,2,3,'#a89e70');}
for(let y=38;y<103;y+=3){const spread=(y-38)*.29;rect(107-spread,y,3,3,'#ab9e72');rect(107+spread,y,3,3,'#ab9e72');if(y%2===0)rect(107-spread,y,spread*2,1,'#7b8066');}rect(106,29,2,12,'#c4b17c');rect(96,71,25,3,'#c4b17c');rect(87,93,43,3,'#c4b17c');rect(99,91,17,12,'#24383f');
rect(0,104,320,40,'#20363d');for(let i=0;i<90;i++){rect((i*47)%320,108+(i*17)%36,3+(i%5)*3,1,i%4?'#3b5556':'#99976b');}
rect(0,101,320,3,'#657462');for(let i=0;i<6;i++){rect(27+i*59,78,2,27,'#121f24');rect(23+i*59,76,10,2,'#b9ac70');rect(25+i*59,78,6,3,'#d4c583');}
const moth=['110000011','111000111','122101221','123212321','012222210','001222100','001010100'];for(let y=0;y<moth.length;y++)for(let x=0;x<9;x++)if(moth[y][x]!=='0')rect(190+x*2,42+y*2,2,2,{'1':'#bdc58f','2':'#e5d59d','3':'#4b5650'}[moth[y][x]]);
render();
