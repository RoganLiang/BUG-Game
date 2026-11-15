import {getStation,pickStation} from '../world/stations.js';
import {fresh,clockTime,minuteValue} from '../game/state.js';
export const powerCatalog=[
 {id:'afterimage',axis:'observe',name:'異相殘留',effect:'你能看見近距離物體剛移動留下的一瞬殘影。',limit:'只能辨認移動位置，不能讀心、預知或知道誰動過。',cost:'一次使用消耗4點能量，之後需要休息。',practice:'車票被風吹動時，紙角留下極淡的重影。你看清被折住的站名。'},
 {id:'warmth',axis:'care',name:'掌心餘溫',effect:'你能讓掌心接觸的一小片紙張微微升溫。',limit:'只能影響掌心大小的紙張，無法加熱人體或治療疾病。',cost:'一次使用消耗4點能量，之後需要休息。',practice:'受潮的車票在掌心慢慢乾了一角，站名重新清晰。'},
 {id:'refraction',axis:'adapt',name:'微光折射',effect:'你能讓指尖附近一小塊反光偏移一點角度。',limit:'只能改變微小反光，不能隱身或製造影像。',cost:'一次使用消耗4點能量，之後需要休息。',practice:'你把車窗上的反光挪開一點，終於看清玻璃後方的站名。'},
 {id:'nudge',axis:'resolve',name:'指尖偏移',effect:'你能讓一枚迴紋針大小的輕物移動一點距離。',limit:'只能作用於眼前輕物，不能推動人或大型物件。',cost:'一次使用消耗4點能量，之後需要休息。',practice:'卡在車票上的小迴紋針移開了。被遮住的站名露出來。'},
 {id:'rhythm',axis:'coordinate',name:'節律共鳴',effect:'你能讓自己敲出的兩段微弱節拍短暫同步。',limit:'只能影響近距離輕微振動，不能控制他人的想法或行動。',cost:'一次使用消耗4點能量，之後需要休息。',practice:'兩次敲擊的回音重合了。你分清站名廣播與車內回音，補齊最後一個字。'}
];
const openingFlavors={
 station:'車門旁的到站螢幕，和你手中的車票顯示不同站名。',
 parcel:'你的座位旁有一個沒人認領的紙袋，提把上繫著一張圖書館借書單。',
 receipt:'一張早餐收據黏在袖口，背面有人寫著：「先問清楚，再害怕。」',
 harbor:'窗外的風掀起站牌時刻表，車內廣播卻說今天沒有下一班。',
 blackout:'車廂的燈忽然熄了一秒。再亮起時，婦人的包換了位置。',
 radio:'司機旁的收音機重播同一句話，窗外的站名卻已經換了一次。'
};
export const awakeningTitles=['你在公車上醒來','終點站的說法對不上','每個人都在害怕什麼','同一分鐘，不同的目擊','先接住眼前的人','你願意留下什麼'];
const texts={
 bus:[
  '',
  '你仍在車內。司機捏著方向盤，說「已經到站」；車票卻顯示還有一站。婦人把包抱得更緊。你要先做什麼？',
  '後座傳來很輕的一聲哈欠。你這才發現一位年輕人也睡在車上，胸前掛著圖書館識別證。他剛醒來，並不比你清楚狀況。',
  '廣播重播相同站名。年輕人小聲說，他已經看見同一位西裝男子躲進樹叢好幾次。司機卻只一直看你。',
  '司機的手在發抖，婦人也站不穩。沒有人攻擊你，但大家都以為別人知道些什麼。你只有時間先做一件事。',
  '你可以把各人的目擊拼起來，也可以帶著有限線索離開。這次要留下的，是你的最後一個行動。'
 ],
 stop:[
  '',
  '你在圖書館站牌下。剛才的婦人也下車了。樹叢裡的西裝男子向你招手：「先別急著相信任何人。」他看起來同樣害怕。',
  '男子說自己經歷過相似情況十二次。婦人聽見後退了一步：「你怎麼也一直看著我？」她手上拿著今天要還的書。',
  '站牌時鐘停了一瞬，公車廣播又響了一次。男子說重複出現的是司機；婦人卻說她反覆遇見圖書館員。你手上的證詞開始交錯。',
  '男子蹲下來喘氣，婦人想把散落的書撿起來。此刻沒有怪物出現，只有幾個被自己嚇壞的人。你先照顧哪件事？',
  '圖書館的門還開著，回家的路也在。要不要繼續，不再由司機或傳言替你決定。'
 ],
 library:[
  '',
  '你來到圖書館門前。門上寫著開館，閱覽區卻沒有讀者。婦人抱著書走在後方，像是也準備還書。',
  '婦人把借書單放在櫃檯，問你為什麼一直盯著她。櫃檯暫時沒人，椅子旁放著一件圖書館員的外套。',
  '一位年輕館員從公車方向走進來，還帶著剛睡醒的神情。他問：「那個西裝男子又躲起來了嗎？」你不知道他說的是哪一次。',
  '館員搬書時踉蹌了一下，婦人的借書單掉在地上。你可以先幫忙，也可以保持距離核對手中的時間。',
  '你現在能確定的，只有自己親眼見過與別人明說的部分。最後一次，你打算怎麼做？'
 ],
 away:[
  '',
  '你走向回家的路。便利商店還開著，店員問你要不要加熱飯糰。你暫時離開了公車上的紛擾。',
  '手機跳出一張站牌照片。你可以回頭核對，也可以先買完晚餐。沒有誰把你硬拉回那班車。',
  '你注意到收據上的分鐘數和手機不同。店員說收銀機的時鐘常常慢一點。這也可能只是日常的小故障。',
  '一位路人的購物袋破了，橘子滾到你腳邊。你可以幫忙，也可以先顧好自己手上快冷掉的晚餐。',
  '你沒有親眼看完公車站的事件。今晚仍可以安穩結束；不確定的地方，不需要硬補成答案。'
 ]
};
// Every question has five pre-authored actions, not a moral answer key.
export const awakeningOptions=[
 [
  ['下車，先確認自己在哪裡','adapt','stop','你下了車，先與司機的吼聲拉開距離。'],
  ['留在座位，比對車票和站名','observe','bus','你保留車票，沒有急著相信終點站的說法。'],
  ['詢問司機是否需要幫忙','care','bus','司機暫時不肯解釋，只請你別再靠近駕駛座。'],
  ['走去圖書館找服務櫃檯','coordinate','library','你選擇到有服務人員的地方核對狀況。'],
  ['先走回家，今晚不追這件事','resolve','away','你決定先回家。車站的事仍在發生，但不會追著你跑。']
 ],
 [
  ['比對時間與現場能看到的標示','observe',null,'你記下兩個不同時間，暫時不把其中一個當成真相。'],
  ['先確認旁邊的人有沒有受傷','care',null,'沒有人明顯受傷，但你的關心讓對方願意多說一句。'],
  ['把剛才的事用一句話問清楚','coordinate',null,'對方只回答自己知道的部分，你仍沒有完整答案。'],
  ['先換個位置，保留離開的路','adapt',null,'你換到能看清出口的位置，沒有逼自己繼續冒進。'],
  ['照原本計畫行動，不再等別人決定','resolve',null,'你自己選了下一步，也接受可能錯過一些線索。']
 ],
 [
  ['找出兩段說法能互相核對的細節','observe',null,'你找到一處能核對的細節，仍有其他部分不明。'],
  ['把水或座位讓給最緊張的人','care',null,'對方慢慢平靜，但沒有因此把所有秘密告訴你。'],
  ['請兩人輪流說，先不判定誰說謊','coordinate',null,'兩段不同的見聞被並排留下，不再互相蓋過。'],
  ['不透露自己的推測，先聽完','adapt',null,'你先聽完，避免自己的猜測改變對方的說法。'],
  ['指出一個矛盾，請對方直接回答','resolve',null,'對方承認有一件事記不清，這次沒有答案。']
 ],
 [
  ['留下可重複核對的時間紀錄','observe',null,'你記錄了現象，沒有把它直接解釋成超能力。'],
  ['先讓旁邊的人站穩，再看異常','care',null,'你錯過一瞬畫面，但對方沒有跌倒。'],
  ['交換各自看見的順序','coordinate',null,'大家發現，彼此看見的重複對象並不相同。'],
  ['離開最擁擠的位置，再觀察一次','adapt',null,'你減少干擾，但也聽不見最遠處的對話了。'],
  ['做一個小測試，確認物件是否真有移動','resolve',null,'小測試排除一個猜測，沒有解釋全部現象。']
 ],
 [
  ['先看清狀況，再伸手幫忙','observe',null,'你看清障礙的位置，幫忙時避開了它。'],
  ['接住快掉落的東西，晚一點再追線索','care',null,'你少收集一條線索，卻接住了眼前的日常。'],
  ['請旁邊的人各幫一點忙','coordinate',null,'幾個很小的動作湊在一起，場面終於不再混亂。'],
  ['把礙路物件移開，留出安全空間','adapt',null,'你沒有要求任何人相信你，只先留出一條路。'],
  ['先完成手上的事，再回來確認','resolve',null,'你守住自己的安排，也接受別人不一定等你。']
 ],
 [
  ['把確定與未確定的事分開留下','observe',null,'你留下可核對的紀錄，沒有替空白編答案。'],
  ['確認對方能安全離開再走','care',null,'你等到對方站穩，才把自己的路接回去。'],
  ['讓每個人說完自己看到的部分','coordinate',null,'最後一次交換資訊，讓互相懷疑的人願意合作。'],
  ['保存線索，暫時退出這段事件','adapt',null,'你保留回來的可能，沒有勉強自己解決一切。'],
  ['選定一條路，帶著代價往前走','resolve',null,'你做出了決定。沒有掌聲，但這一次是你自己選的。']
 ]
];
export function startAwakening(state,stationId=null){const station=stationId?getStation(stationId):pickStation();if(!station||!['home','setup'].includes(state.currentNodeId))return state;const next=structuredClone(state);next.gameVersion='0.4.0';next.scenarioId=station.id;next.residenceId=station.id;next.currentNodeId='awakening-0';next.gameTime='21:36';next.awakening={route:'bus',scores:{observe:0,care:0,adapt:0,resolve:0,coordinate:0},answers:[],powerId:null,used:false};next.worldState={loopCause:'undetermined',rumorSpread:0};next.knownFacts=[];next.visibleSignals=[];return next;}
export function awakeningNode(state){const a=state.awakening,station=getStation(state.scenarioId);if(!a||!station)return null;if(state.currentNodeId==='awakening-result')return {id:'awakening-result',time:state.gameTime,locationId:station.id,title:'第一次覺醒',text:'六次行動，留下了一種反覆出現的策略。',entryConditions:[],entryFacts:[],choices:[]};const index=Number(state.currentNodeId.replace('awakening-',''));if(!Number.isInteger(index)||index<0||index>5||a.answers.length!==index)return null;return {id:state.currentNodeId,time:state.gameTime,locationId:station.id,title:awakeningTitles[index],text:index===0?'你在公車上醒來。司機大聲說「終點站到了」。一位抱著書的婦人看了你一眼，西裝男子匆匆下車。'+openingFlavors[station.event]:texts[a.route][index],entryConditions:[],entryFacts:[],choices:awakeningOptions[index].map((o,i)=>({id:`q${index}-${i}`,label:o[0],description:'',nextNodeId:index===5?'awakening-result':`awakening-${index+1}`,availabilityConditions:[],effects:{minutes:1,facts:[],flags:{},stats:{},spread:0},axis:o[1],route:o[2],result:o[3]}))};}
export function actAwakening(state,nodeId,choiceId){const node=awakeningNode(state);if(state.currentNodeId!==nodeId||!node)return state;const c=node.choices.find(o=>o.id===choiceId);if(!c)return state;const next=structuredClone(state);const index=next.awakening.answers.length;next.awakening.answers.push({choiceId,axis:c.axis,label:c.label,result:c.result,routeAtChoice:state.awakening.route});next.awakening.scores[c.axis]++;if(c.route)next.awakening.route=c.route;next.decisionHistory.push({nodeId,choiceId,label:c.label,fromTime:state.gameTime,actionAt:clockTime(minuteValue(state.gameTime)+1),spread:0});next.gameTime=clockTime(minuteValue(state.gameTime)+1);next.currentNodeId=c.nextNodeId;next.stats[{observe:'insight',care:'empathy',adapt:'energy',resolve:'influence',coordinate:'empathy'}[c.axis]]=Math.min(100,next.stats[{observe:'insight',care:'empathy',adapt:'energy',resolve:'influence',coordinate:'empathy'}[c.axis]]+2);if(index===5){const max=Math.max(...Object.values(next.awakening.scores));const tied=powerCatalog.filter(p=>next.awakening.scores[p.axis]===max);const latest=next.awakening.answers.slice().reverse().find(answer=>tied.some(p=>p.axis===answer.axis));next.awakening.powerId=tied.find(p=>p.axis===latest.axis).id;}return next;}
export function powerFor(state){return powerCatalog.find(p=>p.id===state.awakening?.powerId)||null;}
export function useMicroPower(state){if(state.currentNodeId!=='awakening-result'||!powerFor(state)||state.awakening.used||state.stats.energy<4)return state;const next=structuredClone(state);next.awakening.used=true;next.stats.energy-=4;return next;}
export function replayAwakening(input){if(input.gameVersion!=='0.4.0'||!getStation(input.scenarioId)||typeof input.runId!=='string'||input.runId.length>120||!Array.isArray(input.decisionHistory)||input.decisionHistory.length>6)return null;let next=fresh(input.runId);if(typeof input.birthplaceId!=='string')return null;next.birthplaceId=input.birthplaceId;next=startAwakening(next,input.scenarioId);if(input.currentNodeId==='setup')return input.decisionHistory.length===0?{...next,currentNodeId:'setup'}:null;for(const d of input.decisionHistory){if(!d||typeof d.nodeId!=='string'||typeof d.choiceId!=='string')return null;const n=actAwakening(next,d.nodeId,d.choiceId);if(n===next)return null;next=n;}if(next.currentNodeId!==input.currentNodeId)return null;if(input.awakening?.used===true){const n=useMicroPower(next);if(n===next)return null;next=n;}return next;}
