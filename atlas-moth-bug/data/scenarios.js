export const SCHEMA_VERSION = 1;

const roleRows = [
 ['樂團主唱','丹田與聲音節奏','把呼吸拆成短拍，指尖沿桌面輕敲','跟著人群退向另一扇門','站起來叫所有人照你的步調走','聲音必須壓低','台北'],
 ['銀行櫃檯行員','紙張觸感與帳單核對','用指腹捻過紙角，再核對重複數字','把整疊紙交給門邊的人保管','把紙推回去，要對方當場認錯','數字被改寫，時間有限','高雄'],
 ['便利商店大夜班店員','編號記憶與補貨動線','把小物排成一列，照編號移回空位','先把全部物件搬到走廊地上','催促身旁的人，要求立刻清空桌面','陌生流程與擁擠走道','巴黎'],
 ['急診室外科醫生','手部精細動作與混亂中的核對','把手腕靠在桌邊，逐項對照圖示','先把整張圖交給門口的人決定','握住桌緣，要求所有人立刻停手','手部不適，無法久站','底特律'],
 ['幼稚園老師','耐心傾聽與注意力轉移','蹲低一點，等對方把一句話說完','把眼前的話題留給另一個人接手','提高音量，要求對方立刻表態','陌生人靠近時容易緊張','西西里'],
 ['職業電競選手','畫面切換與路徑預判','先看角落圖示，按順序記下亮點','照最亮的畫面一路向前尋找出口','把整排開關都按過一次再說','視野模糊，需要分段移動','倫敦'],
 ['香水調香師','配方標籤與揮發先後記憶','不開瓶蓋，按標籤排列先後順序','把手邊的瓶子全交給走廊的人','拔掉封條，要求大家立刻離開現場','無法依賴嗅覺','東京'],
 ['資深美編','灰階結構與透視比例','把紙轉向側光，只對照線條交點','先按畫框外的標籤決定留下哪張','把眼前的紙撕開，要求對方說實話','不能依賴顏色判讀','首爾'],
 ['有氧教練','節拍與群體動作協調','抬手分成四拍，等對面跟上再移動','跟著最前面的人一路擠向門口','大聲催促全場立即往同一處移動','呼吸需要放慢，不能久跑','維也納'],
 ['電話客服人員','整理情緒與關鍵訊息','在紙上圈出重複字句，推到對方面前','把紙留在桌邊，先去找旁人解釋','把整張紙舉高，要求所有人看過來','需要依靠書寫溝通','巴塞隆納'],
 ['鷹架師傅','結構受力與繩結檢視','退到穩固地面，對照接點與鬆緊','直接沿著最近的邊緣往出口走','抓住眼前支架，要大家一起用力拉','高處會引起暈眩','蘇黎世'],
 ['婚禮主持人','掌握流程與自然圓場','留一個停頓，把問題交回對方手上','把剩下的話一次說完便走向門口','打斷現場流程，要求所有人重新來過','單獨面對陌生程序','德州'],
 ['物流理貨員','分類與空間路徑安排','先把地面分成幾區，只清出一條線','把眼前東西全往最近的角落堆去','要求大家立即搬走全部物件','雜物遮住出口與標記','香港'],
 ['美甲師','細小表面觀察與材料標示','用紙角擦開表面水氣，側看凹痕','先把整個盒子搬到門外再查看','用力敲開眼前的盒蓋，先取出內容','手指僵硬，動作需要放慢','雷克雅維克'],
 ['房仲業務員','空間格局與房屋痕跡辨認','沿著牆角水痕，對照紙上的缺口','照招牌所指的大路直接走向出口','翻動所有房間的物件來找一張地圖','不熟悉所在街區','布拉格'],
 ['學校廚工','成分標示與分批備餐','先留下包裝，按標示分開不同盤子','先跟著旁人拿起相同的一份餐點','把桌上所有食物混到同一個盤子','食物來源需要核對','紐約'],
 ['捷運站務員','班距與人流方向辨認','停在安全線後，比對提示燈的間隔','跟著移動最快的一群人走向邊緣','跨過眼前欄線，要求大家讓出道路','需要依靠聲音與觸覺定位','倫敦'],
 ['寵物美容師','觀察動物姿勢與保持距離','停下腳步，側過身等牠自行靠近','跟在旁人身後，直直走向那個背包','朝牠大聲呼喊，伸手去拉回背包','看到動物時容易緊張','新加坡'],
 ['夜市遊戲攤販','細微偏差與移動節奏辨認','先空手比一個角度，記下來回偏差','照旁人指的位置，立刻往前追過去','握緊桌邊，要求對方不要再移動','手部顫動，需要分段操作','慕尼黑'],
 ['圖書館編目員','分類編號與索引位置辨認','先看標記位置，照排列尋找空缺','從最近那疊開始，逐張翻到最底下','把全部文件倒出來，請旁人幫忙挑','文字辨認困難，需要其他索引','曼谷']
];
export const ROLES = roleRows.map((r,i)=>({id:`role-${i+1}`,job:r[0],skill:r[1],habit:r[2],detour:r[3],force:r[4],constraint:r[5],city:r[6]}));
const hostRows = [
 ['52歲機要秘書 Nic','台北','會議室','必須保持安靜，腹部陣陣不適','門外的腳步倒著退回，桌上那張缺角的紀錄卻還沒寫成。'],
 ['48歲家庭主婦','高雄','公寓餐桌','債務文件混雜，門外有人催促','催繳通知上的墨水縮回印章，昨天的收據還留著一道折痕。'],
 ['65歲餐廳主廚','巴黎','餐廳後場','無法依賴味覺與嗅覺','餐盤退回備餐台，已出菜的空格重新被食材填滿。'],
 ['38歲修車工','底特律','維修間','雙手疼痛，動作容易顫動','警示燈由紅轉暗，散落的零件一顆顆回到圖紙邊。'],
 ['55歲談判人','西西里','倉庫外間','在人群前會恐慌，對話隨時可能中斷','地上的碎杯退回桌面，幾個人把剛才的怒話吸回嘴裡。'],
 ['76歲夜班保全','倫敦','博物館值班室','視野模糊，以輪椅分段移動','監視器中的腳印倒著消失，尚未關閉的門卻先發出提示音。'],
 ['41歲管線清潔工','東京','封閉區外的值班亭','無法依賴嗅覺，警報資訊不一致','封鎖帶捲回卷軸，瓶身的水珠向上回到遮雨棚。'],
 ['50歲鑑識人員','首爾','展場收件室','難以分辨顏色，只能依賴形狀與標記','畫框上的指紋變淡，包裝紙沿折線自己攤開。'],
 ['60歲圖書館管理員','維也納','圖書館入口','呼吸容易不適，需要緩慢行動','散開的書頁倒飛回書架，入口的裂紋緩緩收合。'],
 ['33歲街頭畫家','巴塞隆納','廣場服務亭','無法依賴聽說，需要用紙筆溝通','紙上的炭粉飄回筆尖，廣場上的人群倒著退到攤位。'],
 ['29歲珠寶鑑定師','蘇黎世','高樓接待區','高處會暈眩，須留在護欄內','窗上的雨滴往天上爬，警戒線退回一只尚未拆封的紙袋。'],
 ['47歲等待複核的囚犯','德州','會客室','即將錯過證據複核的窗口','蓋好的日期章退回空白，送件人卻正把信封帶離窗口。'],
 ['58歲住戶','香港','雜物堆積的住家','物件遮住通道，記憶片段混亂','翻倒的紙箱慢慢立起，屋裡的焦痕退回插座旁一點黑。'],
 ['44歲遠洋水手','雷克雅維克','船艙桌邊','手指僵硬，海上晃動不止','結在窗上的冰花縮回水滴，航圖上的水漬仍未散去。'],
 ['36歲失憶旅人','布拉格','舊公寓門廳','不記得此處路徑與約定','鞋底泥痕倒著離開地磚，門縫裡卻先出現一張摺紙。'],
 ['51歲宴會賓客','紐約','宴會休息室','須謹慎核對食物來源與已知過敏原','灑出的飲料跳回杯裡，服務車倒著退回尚未開封的包裝。'],
 ['62歲手風琴藝人','倫敦','地鐵安全區','視覺受限，依賴聲音與熟悉路徑','離站廣播倒著收音，欄杆旁的紙條卻已經寫好。'],
 ['40歲植物園園丁','新加坡','園區小徑','靠近動物時會緊張，背包暫時拿不到','落葉往枝頭升起，一隻狗把剛叼走的背包放回腳邊。'],
 ['54歲退休教練','慕尼黑','活動室','手部持續顫動，物件位置不好確認','落到地上的小球彈回桌邊，窗外的人影開始倒著接近。'],
 ['27歲拳手','曼谷','檔案館接待區','身上有傷，文字辨認困難','傷口在袖口下慢慢合起，地上紙頁倒著滑回編號抽屜。']
];
const hostJobs=['機要秘書','家庭主婦','餐廳主廚','修車工','談判人','夜班保全','管線清潔工','鑑識人員','圖書館管理員','街頭畫家','珠寶鑑定師','等待複核的囚犯','住戶','遠洋水手','旅人','宴會賓客','手風琴藝人','植物園園丁','退休教練','拳手'];
const hostSkills=['文件先後與會議紀錄','家庭補給與預算安排','廚房動線與備料順序','零件位置與檢修紀錄','談話節奏與耐心傾聽','巡查順序與視角切換','警報標記與作業順序','圖形比對與證物編排','分類位置與借還順序','輪廓比例與畫面位置','表面痕跡與細微形狀','記住流程與整理陳述','熟悉物件與居家路徑','航行標記與海上作息','沿路記號與方向辨認','座位順序與細節觀察','節拍與聽覺記憶','植物標籤與園區路線','細小偏差與反覆練習','步伐平衡與等待節奏'];
const hostHabitSources=[19,15,15,10,9,5,6,7,19,7,1,11,12,13,14,1,8,17,18,10];
const HOST_ROLES=hostRows.map((r,i)=>({...ROLES[hostHabitSources[i]],id:`host-${i+1}`,job:hostJobs[i],skill:hostSkills[i],constraint:r[3],city:r[1]}));
const seedOpenings=["機密會議的紀錄倒著褪色；樓上的練團聲正沿通風口退遠，門外的人卻先開始找你。", "借據上的印章倒著退回空白。有人要把債務帶去那間熟悉的銀行，收件日期卻對不上。", "晚宴的餐盤退回廚房，食材一盤盤離開備餐台；門外那個熟悉的旅人正倒著走近。", "車底裝置的警示燈倒退回未亮的時刻。專業處理人員在封鎖線外等一張位置正確的紀錄。", "倉庫裡的交易倒回尚未簽字的時刻，門外遊覽車的乘客正在下車又回頭。", "監視器裡的腳印一個個退回暗處。幾個帶走展品的人當中，有一個輪廓熟悉得令人發冷。", "警報倒退回管線異常之前，封鎖帶慢慢捲起；地面上的腳步卻正退向錯誤的入口。", "包畫紙倒著攤開，航班看板退回前一行。機場走廊的一個身影，讓玻璃突然裂成兩層。", "裂縫沿牆面收回去，書頁回到架上；樓外那個熟悉的人影，正退向仍未封閉的門。", "廣場上的人群倒著散開，一張求助紙回到空白。你看見被困的人抬手，卻聽不到他說話。", "窗外的纜線倒退回斷裂前，樓下的行人正沿原路走來；值班室還少一張關鍵的維修紀錄。", "行刑通知的日期倒著褪去，新證據卻跟著信封退離複核窗口。你還有一段說話的空隙。", "屋裡的焦痕退回插座旁一點黑，紙箱慢慢堵回通道；隊友留下的盒子還藏在最深處。", "航圖上的水漬倒著收攏，窗外的冰山卻正移回兩條航線的交會處。封存圖袋仍沒有被找到。", "街口的封鎖線倒退回卷軸，舊傳單先在門縫浮現。身後的人正在退回這棟陌生公寓。", "酒液倒著回到杯裡，食物標籤退回尚未拆封的包裝；端盤人熟悉的輪廓讓你不敢抬頭。", "列車的聲響倒著退回隧道。掉落物還在安全線外，值班員卻沒有收到正確的物件紀錄。", "落葉倒飛回枝頭，一隻狗把背包帶回灌木旁；遠處的人影正沿小徑退向同一個轉角。", "懸著的標記倒退回高處，桌上的瞄準圖少了一條偏移線；窗外熟悉的影子讓手機滲出雜訊。", "受傷的皮膚在袖口下慢慢合起，文件退回抽屜。登記名單即將回到一個無人知道的編號下。"];
const rolePlaces=['排練室','銀行收件室','超商後場','醫院值班室','幼兒園接待處','比賽準備室','香氛工作室','設計工作室','運動教室','客服辦公室','工地安全區','宴會接待處','物流分類區','美甲工作室','公寓接待處','學校配膳室','車站安全區','寵物照護接待處','夜市攤位','圖書館編目室'];
const seedContexts = hostRows.map((r,i)=>({name:r[0],city:r[1],place:r[2],constraint:r[3],opening:seedOpenings[i],role:HOST_ROLES[i]}));
const reverseLines=[
 '牆上的分針退了一格，地上的水滴回到杯緣。',
 '剛被摺起的紙沿原路攤開，門外的腳步退回轉角。',
 '尚未落下的日期章，先從紙上收走一個字。',
 '訊號燈退回上一種顏色，遠處的人影倒著離開。',
 '最後一張紙滑回抽屜，原先的門縫漸漸合攏。'
];
function compose(id,real,host,origin){
 const city=host.city;
 const prompts=[host.opening,`你退回${host.place}的上一個時刻。一張受潮紙角留下不屬於你的筆跡。`, `時間退到關鍵的一日。眼前的收件順序若沒有接上，另一端的燈就會熄滅。`, '收音機的沙沙聲倒著散開。有人把紙角移到了你昨晚才找過的位置。', '最後的門正在把已打開的縫隙收回去。你只能留下手上的東西，選一條路離開。'];
 const habits=[real.habit,'把紙角對著側光，記下凹下去的位置',real.habit,'把手邊物件排好，留下相同間隔的空位','照原來的次序放回紙張，沿空出的路離開'];
 return {id,real_job:real.job,real_skill:real.skill,host_profile:{name:host.name,city,place:host.place},host_debuff:host.constraint,reverse_crisis:host.opening,choices:[real.detour,real.force,real.habit],breakout_index:2,origin,nodes:prompts.map((text,dayIndex)=>({id:`${id}:d${5-dayIndex}`,day:5-dayIndex,text:`${text}${reverseLines[dayIndex]}`,choices:[{id:'wait',text:dayIndex===2?real.detour:'把手邊物件放下，先往最近的門退去',effect:'delay'},{id:'press',text:dayIndex===2?real.force:'走到眾人面前，要求大家立刻讓出一條路',effect:'pressure'},{id:'notice',text:habits[dayIndex],effect:'notice'}]})),sensory:{city,detail:`${city}的夜色映在玻璃上；遠處的聲響一段段倒著退遠。`}};
}
const pairs=[];
for(let i=0;i<20;i++)pairs.push({id:`pair-${String(i+1).padStart(3,'0')}`,a:ROLES[i],b:seedContexts[i].role,host:seedContexts[i],origin:'seed'});
const used=new Set(pairs.map(p=>[p.a.id,p.b.id].sort().join('|')));
for(let shift=1;shift<20&&pairs.length<200;shift++)for(let i=0;i<20&&pairs.length<200;i++){
 const a=ROLES[i],b=ROLES[(i+shift)%20],key=[a.id,b.id].sort().join('|');if(used.has(key))continue;used.add(key);const context={...seedContexts[(i*3+shift)%20],city:b.city,place:rolePlaces[(i+shift)%20],opening:`玻璃上的水痕倒著退回窗框，${rolePlaces[(i+shift)%20]}的收件紙角先出現一個日期。`};pairs.push({id:`pair-${String(pairs.length+1).padStart(3,'0')}`,a,b,host:{...context,name:`${32+(pairs.length*7)%39}歲${b.job}`,role:b,constraint:b.constraint},origin:'procedural'});
}
const scenarios=[];
for(const pair of pairs){scenarios.push(compose(`${pair.id}-ab`,pair.a,pair.host,pair.origin));const context=seedContexts[Number(pair.id.slice(5))%20];scenarios.push(compose(`${pair.id}-ba`,pair.b,{...context,name:`${30+Number(pair.id.slice(5))%35}歲${pair.a.job}`,city:pair.a.city,place:rolePlaces[ROLES.indexOf(pair.a)],opening:`散落的紙張沿原路回到桌邊，${rolePlaces[ROLES.indexOf(pair.a)]}的門把開始轉回原處。`,constraint:pair.a.constraint},pair.origin));}
export const SCENARIO_DB={schema_version:SCHEMA_VERSION,pairs:200,seed_pairs:20,procedural_pairs:180,scenarios};
export function loadScenarioBatch(input){
 let rows=Array.isArray(input)?input:input?.scenarios;if(!Array.isArray(rows)||rows.length===0)throw new Error('資料格式不符');rows=rows.map(row=>{if(!row||row.nodes!==undefined||typeof row.id!=='string'||typeof row.reverse_crisis!=='string'||!Array.isArray(row.choices)||row.choices.length!==3||!row.choices.every(c=>typeof c==='string')||!Number.isInteger(row.breakout_index)||row.breakout_index<0||row.breakout_index>2)return row;return {...row,origin:row.origin||'imported',nodes:Array.from({length:5},(_,i)=>({id:`${row.id}:d${5-i}`,day:5-i,text:`${row.reverse_crisis}${reverseLines[i]}`,choices:row.choices.map((text,j)=>({id:`option-${j}`,text,effect:j===row.breakout_index?'notice':j===(row.breakout_index+1)%3?'delay':'pressure'}))}))};});const ids=new Set();
 for(const row of rows){if(!row||typeof row.id!=='string'||ids.has(row.id)||typeof row.real_job!=='string'||typeof row.real_skill!=='string'||!row.host_profile||!['name','city','place'].every(k=>typeof row.host_profile[k]==='string')||typeof row.host_debuff!=='string'||typeof row.reverse_crisis!=='string'||!Array.isArray(row.choices)||row.choices.length!==3||!row.choices.every(c=>typeof c==='string'&&c.length>0)||!Number.isInteger(row.breakout_index)||row.breakout_index<0||row.breakout_index>2||!Array.isArray(row.nodes)||row.nodes.length!==5)throw new Error('資料格式不符');ids.add(row.id);const nids=new Set();for(const [i,n]of row.nodes.entries()){if(!n||typeof n.id!=='string'||nids.has(n.id)||n.day!==5-i||typeof n.text!=='string'||n.choices?.length!==3||new Set(n.choices.map(c=>c.id)).size!==3||!n.choices.every(c=>typeof c.text==='string'&&['delay','pressure','notice'].includes(c.effect)))throw new Error('資料格式不符');nids.add(n.id);}}
 return structuredClone(rows);
}
export function fallbackScenario(input){const clean=s=>String(s||'').trim().slice(0,80);const skill=clean(input.skill),job=clean(input.job);const hash=[...skill+job+clean(input.avoid)].reduce((a,c)=>(Math.imul(a,31)+c.charCodeAt(0))>>>0,7);const terms=[/唱|音樂|吉他|共鳴/,/銀行|點鈔|帳單|利率|金融/,/超商|補貨|香菸|收銀/,/醫|縫合|外科/,/幼教|幼稚|小孩|老師/,/電競|遊戲|點擊|手速/,/香水|氣味|香氛|調香/,/美編|修圖|設計|透視/,/健身|有氧|運動|節拍/,/客服|電話|安撫/,/鷹架|工地|繩結|承重/,/婚禮|主持|圓場/,/物流|理貨|分類|條碼/,/美甲|指甲|微雕/,/房仲|屋況|房屋|格局/,/廚|營養|食材|配菜/,/捷運|站務|列車|班距/,/寵物|美容|動物|狗/,/夜市|攤販|金魚|氣球/,/圖書|編目|索引|杜威/];const matched=terms.findIndex(re=>re.test(job+' '+skill));const role=ROLES[matched<0?19:matched];const avoid=clean(input.avoid);const host=seedContexts[/欠債|負債|賭|帳單/.test(avoid)?1:/髒|凌亂|雜物/.test(avoid)?12:/吵|噪|喧嘩/.test(avoid)?0:(hash+9)%20];return compose(`custom-${hash}`,{...role,job:job||role.job,skill:skill||role.skill},host,'fallback');}
