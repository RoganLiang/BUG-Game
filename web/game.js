export const origins = [
 {name:'臺北',tag:'雨巷裡的記錄者',trait:'觀察 +8',bonus:{insight:8}},
 {name:'巴黎',tag:'塞納河畔的夜行者',trait:'共鳴 +8',bonus:{empathy:8}},
 {name:'京都',tag:'庭院邊的守望者',trait:'能量 +8',bonus:{energy:8}},
 {name:'奈洛比',tag:'高原上的逐光者',trait:'影響 +8',bonus:{influence:8}}
];
export const chapters = [
 {title:'一隻蛾，落在最後一班地鐵',place:'PARIS · 23:17',text:'你抵達巴黎的第一夜，地鐵站忽然停電。一隻皇蛾停在售票機上，翅紋像兩隻睜開的眼。月台另一端，有人遺落一本寫著「BUG」的筆記。',options:[{label:'拾起筆記，記錄翅膀的圖樣',hint:'觀察 +12 · 能量 −6',delta:{insight:12,energy:-6},result:'你在翅紋裡找到一組座標。巴黎的微光被記錄下來。',event:'paris',impact:-8},{label:'先幫迷路的孩子找到出口',hint:'共鳴 +12 · 能量 −4',delta:{empathy:12,energy:-4},result:'孩子把一張紙蛾交給你。陌生人的善意沿著月台傳開。',event:'paris',impact:-12}]},
 {title:'塞納河上的第二次振翅',place:'PARIS · 00:06',text:'筆記指向河邊的舊廣播站。收音機傳來三個城市的雜訊：熱浪、失去方向的候鳥，以及即將熄滅的街燈。你只能先傳出一則訊息。',options:[{label:'公開座標，邀請大家一起觀測',hint:'影響 +14 · 能量 −8',delta:{influence:14,energy:-8},result:'觀測者開始連線。臺北收到訊號，夜間棲地多了一點喘息。',event:'taipei',impact:-15},{label:'把候鳥的訊號交給保育站',hint:'共鳴 +10 · 觀察 +6 · 能量 −5',delta:{empathy:10,insight:6,energy:-5},result:'奈洛比的守望者接住訊號，為候鳥留下暗夜通道。',event:'nairobi',impact:-18}]},
 {title:'黎明之前，做一個小小的決定',place:'PARIS · 04:52',text:'皇蛾停在你的肩上。你終於理解：世界不會因一次選擇被拯救，但每一次選擇，都會改變下一次相遇。黎明前，你還有時間留下一個行動。',options:[{label:'關掉廣播站外多餘的燈',hint:'能量 +10 · 共鳴 +6',delta:{energy:10,empathy:6},result:'暗下來的街角成為飛蛾的路標。京都響應了這場小小的熄燈。',event:'kyoto',impact:-16},{label:'整理筆記，留下觀測指南',hint:'觀察 +10 · 影響 +8 · 能量 −4',delta:{insight:10,influence:8,energy:-4},result:'你的指南傳到更多人的手裡。巴黎的觀測網持續擴大。',event:'paris',impact:-14}]}
];
export const eventSeed = [
 {id:'paris',city:'巴黎',label:'城市光害',risk:64,x:48,y:27},
 {id:'taipei',city:'臺北',label:'夜間棲地縮減',risk:72,x:82,y:47},
 {id:'nairobi',city:'奈洛比',label:'候鳥路徑擾動',risk:58,x:56,y:70},
 {id:'kyoto',city:'京都',label:'昆蟲導航失序',risk:61,x:90,y:36}
];
export function fresh(){return {version:1,origin:null,step:0,stats:{energy:70,insight:30,empathy:30,influence:10},events:eventSeed.map(e=>({...e})),history:[]};}
export function draw(state,rng=Math.random){if(state.origin!==null)return state;const origin=Math.min(origins.length-1,Math.max(0,Math.floor(rng()*origins.length)));const next=structuredClone(state);next.origin=origin;for(const [key,value] of Object.entries(origins[origin].bonus))next.stats[key]+=value;return next;}
export function choose(state,index){if(state.origin===null||state.step>=chapters.length||!chapters[state.step].options[index])return state;const next=structuredClone(state),option=chapters[state.step].options[index];for(const [key,value] of Object.entries(option.delta))next.stats[key]=Math.max(0,Math.min(100,next.stats[key]+value));next.events.find(e=>e.id===option.event).risk=Math.max(0,next.events.find(e=>e.id===option.event).risk+option.impact);next.history.push({title:chapters[state.step].title,label:option.label,result:option.result,hint:option.hint,event:option.event});next.step++;return next;}
export function restore(raw){try{const s=JSON.parse(raw);if(!s||s.version!==1||!(s.origin===null||Number.isInteger(s.origin)&&s.origin>=0&&s.origin<origins.length)||!Number.isInteger(s.step)||s.step<0||s.step>chapters.length)return fresh();let next=fresh();if(s.origin!==null)next=draw(next,()=>s.origin/origins.length);if(!Array.isArray(s.history)||s.history.length!==s.step)return fresh();for(let i=0;i<s.step;i++){const index=chapters[i].options.findIndex(o=>o.label===s.history[i].label);if(index<0)return fresh();next=choose(next,index);}return next;}catch{return fresh();}}
