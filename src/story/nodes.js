// Narrative data is public fiction; no hidden world state is exported to the UI.
export const information = {
  clip:{id:'clip',origin:'社群公開轉貼',observedAt:'08:17',claimedAt:'08:16／07:58（互相矛盾）',content:'17秒影片裡，巴黎街口的路人同時停下；另一個字幕卻稱這是首爾。畫面沒有可辨識路牌。',evidenceType:'公開傳聞',verificationStatus:'未證實',visibility:'public'},
  metadata:{id:'metadata',origin:'你比對的兩個轉貼版本',observedAt:'08:22',claimedAt:'08:16／07:58',content:'同一段17秒畫面出現兩個時間戳。你找到矛盾，仍無法判定拍攝時間或地點。',evidenceType:'查證紀錄',verificationStatus:'僅確認版本矛盾',visibility:'private'},
  forwarded:{id:'forwarded',origin:'你的轉貼紀錄',observedAt:'08:20',claimedAt:null,content:'你將未查證影片轉給群組，兩位成員又繼續轉傳。轉傳次數不代表內容真實。',evidenceType:'行動紀錄',verificationStatus:'行動已發生・內容未證實',visibility:'private'},
  ignored:{id:'ignored',origin:'你的行動紀錄',observedAt:'08:18',claimedAt:null,content:'你暫時忽略影片，把手機扣在桌上；新的訊息仍在累積。',evidenceType:'行動紀錄',verificationStatus:'已記錄',visibility:'private'},
  friend:{id:'friend',origin:'韓國朋友・知允',observedAt:'08:29',claimedAt:'來源時間戳不一致',content:'「首爾這邊也有人傳。我看到的版本時間不同；我只確認它正在流傳，不知道畫面在哪裡拍的。」',evidenceType:'私人訊息',verificationStatus:'流傳獲私人回報・事件未證實',visibility:'private'},
  reply:{id:'reply',origin:'知允回覆你的詢問',observedAt:'08:34',claimedAt:null,content:'「我窗外公車照常行駛，但只看得到這條街。原始上傳者還找不到。」',evidenceType:'私人訊息',verificationStatus:'單一來源・未獨立驗證',visibility:'private'},
  source:{id:'source',origin:'你沿轉貼鏈查找',observedAt:'08:36',claimedAt:null,content:'兩個版本都指向已刪除的貼文。無法確定刪文原因，也無法驗證拍攝者。',evidenceType:'查證紀錄',verificationStatus:'來源仍不明',visibility:'private'},
  tokyo:{id:'tokyo',origin:'可見社群討論串',observedAt:'08:37',claimedAt:null,content:'一則自稱東京使用者的貼文也分享相同片段，沒有現場證據。',evidenceType:'公開傳聞',verificationStatus:'未證實',visibility:'public'},
  ny:{id:'ny',origin:'公開轉貼彙整頁',observedAt:'08:38',claimedAt:null,content:'標註紐約的帳號開始轉貼17秒影片；帳號地區不等於事件所在地。',evidenceType:'公開傳聞',verificationStatus:'未證實',visibility:'public'},
  window:{id:'window',origin:'你・巴黎第11區住所窗邊',observedAt:'08:41',claimedAt:null,content:'你從住所望向街口：有人等紅燈，麵包店拉起鐵門，一輛救護車駛過。沒有看見影片裡的同步停頓。視野只及這個路口。',evidenceType:'親眼觀察',verificationStatus:'僅限此時此地',visibility:'private'},
  compared:{id:'compared',origin:'你的比對筆記',observedAt:'08:45',claimedAt:null,content:'窗外路口與影片無法可靠比對。你註明「我沒看見」不能推導成「全球沒發生」。',evidenceType:'查證紀錄',verificationStatus:'範圍已註明・整體未知',visibility:'private'},
  careful:{id:'careful',origin:'你傳給群組的回覆',observedAt:'08:46',claimedAt:null,content:'你只分享巴黎窗外所見，註明時間、位置與視野限制，請大家暫停轉傳未證實內容。',evidenceType:'行動紀錄',verificationStatus:'已記錄',visibility:'private'},
  amplified:{id:'amplified',origin:'你發出的公開推測',observedAt:'08:43',claimedAt:null,content:'你把救護車與影片連結成「全球異常」的推測。更多帳號轉傳，但沒有新證據。',evidenceType:'公開傳聞',verificationStatus:'你的推測・未證實',visibility:'public'},
  pause:{id:'pause',origin:'你的私人筆記',observedAt:'08:42',claimedAt:null,content:'你關閉推播，保留目前紀錄。資訊缺口沒有消失，但你決定暫不擴散。',evidenceType:'行動紀錄',verificationStatus:'已記錄',visibility:'private'}
};
export const nodes = [
 {id:'video-0817',time:'08:17',locationId:'paris-11',title:'17秒，兩個互相矛盾的版本',text:'2026年11月1日。巴黎第11區的清晨，你的手機亮起。一段17秒影片被冠上「全球同時發生」的標題。兩個轉貼版本的字幕、地點與時間卻互相矛盾。你先做什麼？',entryConditions:[],entryFacts:['clip'],choices:[
  {id:'verify-video',label:'查看影片，查證兩個版本',description:'花5分鐘比對，取得版本矛盾紀錄',nextNodeId:'friend-0829',availabilityConditions:[],effects:{minutes:5,facts:['metadata'],flags:{verified:true},stats:{insight:12,energy:-5},spread:0}},
  {id:'share-video',label:'傳播影片，詢問群組是否知情',description:'花3分鐘轉貼，可能擴散未證實訊息',nextNodeId:'friend-0829',availabilityConditions:[],effects:{minutes:3,facts:['forwarded'],flags:{shared:true},stats:{influence:12,energy:-3},spread:2}},
  {id:'ignore-video',label:'忽略推播，先留一點距離',description:'花1分鐘暫停，保留能量但缺少查證',nextNodeId:'friend-0829',availabilityConditions:[],effects:{minutes:1,facts:['ignored'],flags:{paused:true},stats:{energy:6},spread:0}}
 ]},
 {id:'friend-0829',time:'08:29',locationId:'paris-11',title:'首爾朋友的訊息',text:'08:29，韓國朋友知允確認影片正在流傳，但來源時間戳不一致。她的回覆證明了「有人在傳」，並沒有證明影片中的事件。',entryConditions:[],entryFacts:['friend'],choices:[
  {id:'contact-friend',label:'聯絡知允，詢問她親眼看見什麼',description:'花5分鐘取得私人回覆，仍非全城真相',nextNodeId:'window-0841',availabilityConditions:[],effects:{minutes:5,facts:['reply'],flags:{contacted:true},stats:{empathy:12,energy:-4},relationship:1,spread:0}},
  {id:'trace-source',label:'沿轉貼鏈查證原始來源',description:'花7分鐘追查，同時看見東京與紐約的傳聞',nextNodeId:'window-0841',availabilityConditions:[],effects:{minutes:7,facts:['source','tokyo','ny'],flags:{traced:true},stats:{insight:10,energy:-7},spread:0}},
  {id:'wait-window',label:'不再追逐推播，準備觀察窗外',description:'花2分鐘整理已知資訊，保留能量',nextNodeId:'window-0841',availabilityConditions:[],effects:{minutes:2,facts:[],flags:{waited:true},stats:{energy:4},spread:0}}
 ]},
 {id:'window-0841',time:'08:41',locationId:'paris-11',title:'窗外，是你能看見的世界',text:'08:41，你從巴黎住所向窗外觀察。路口照常運作，一輛救護車駛過。這些景象與影片究竟有沒有關聯？你只有一扇窗，沒有全球的答案。',entryConditions:[],entryFacts:['window'],choices:[
  {id:'compare-window',label:'觀察路口，與先前查證紀錄比對',description:'需要先查證影片或來源；花4分鐘記錄限制',nextNodeId:'ending',availabilityConditions:[{anyFlags:['verified','traced']}],effects:{minutes:4,facts:['compared'],flags:{compared:true},stats:{insight:12,energy:-4},spread:0}},
  {id:'share-qualified',label:'聯絡群組，只分享有範圍的觀察',description:'花5分鐘註明時間與視野，降低擴散',nextNodeId:'ending',availabilityConditions:[],effects:{minutes:5,facts:['careful'],flags:{qualified:true},stats:{empathy:8,influence:6},spread:-1}},
  {id:'spread-theory',label:'傳播「全球異常」推測',description:'花2分鐘公開推測，聲量增加、證據不變',nextNodeId:'ending',availabilityConditions:[],effects:{minutes:2,facts:['amplified'],flags:{amplified:true},stats:{influence:16,energy:-2},spread:3}},
  {id:'pause-feed',label:'忽略後續推播，保存私人筆記',description:'花1分鐘離開資訊洪流，暫不擴散',nextNodeId:'ending',availabilityConditions:[],effects:{minutes:1,facts:['pause'],flags:{rested:true},stats:{energy:8},spread:0}}
 ]},
 {id:'ending',time:'08:41',locationId:'paris-11',title:'振翅之後，留下什麼？',text:'你沒能確認全球事件的真相，卻已經改變資訊如何流動。這是本輪示範的結尾；回看你取得的證據、錯過的訊息與傳出的推測。',entryConditions:[],entryFacts:[],choices:[]}
];
