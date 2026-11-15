// User-confirmed stations, 2026-11-15. Demonstration weights, not population quotas.
// Alaska and Madagascar remain regions because the user did not specify a city.
export const stationGroups = [
 {id:'asia',name:'第一組',anchors:['臺灣','琉球群島','帛琉','蒙古與通古斯一帶'],hidden:['夏威夷']},
 {id:'americas',name:'第二組',anchors:['海地','巴拿馬','部分宏都拉斯','部分委內瑞拉'],hidden:['秘魯']},
 {id:'pacific',name:'第三組',anchors:['伯斯','緬甸','柬埔寨','孟買','紐西蘭北島'],hidden:['馬爾地夫']},
 {id:'europe-africa',name:'第四組',anchors:['巴黎','比利時','荷蘭','巴爾幹半島','黑海周邊','白俄羅斯','烏克蘭','立陶宛'],hidden:['南非','肯亞','摩洛哥附近','冰島','芬蘭']}
];
export const stationPool = [
 {id:'tokyo',group:'asia',names:['東京','Tokyo','東京','도쿄','Tokio','Tokyo'],event:'station'},
 {id:'seoul',group:'asia',names:['首爾','Seoul','ソウル','서울','Seúl','Séoul'],event:'parcel'},
 {id:'shanghai',group:'asia',names:['上海','Shanghai','上海','상하이','Shanghái','Shanghai'],event:'receipt'},
 {id:'hong-kong',group:'asia',names:['香港','Hong Kong','香港','홍콩','Hong Kong','Hong Kong'],event:'harbor'},
 {id:'singapore',group:'asia',names:['新加坡','Singapore','シンガポール','싱가포르','Singapur','Singapour'],event:'parcel'},
 {id:'manila',group:'asia',names:['馬尼拉','Manila','マニラ','마닐라','Manila','Manille'],event:'blackout'},
 {id:'ulaanbaatar',group:'asia',names:['烏蘭巴托','Ulaanbaatar','ウランバートル','울란바토르','Ulán Bator','Oulan-Bator'],event:'radio'},
 {id:'santiago',group:'americas',names:['聖地牙哥','Santiago','サンティアゴ','산티아고','Santiago','Santiago'],event:'receipt'},
 {id:'rio',group:'americas',names:['里約','Rio de Janeiro','リオデジャネイロ','리우데자네이루','Río de Janeiro','Rio de Janeiro'],event:'blackout'},
 {id:'boston',group:'americas',names:['波士頓','Boston','ボストン','보스턴','Boston','Boston'],event:'station'},
 {id:'vancouver',group:'americas',names:['溫哥華','Vancouver','バンクーバー','밴쿠버','Vancouver','Vancouver'],event:'harbor'},
 {id:'alaska',group:'americas',names:['阿拉斯加','Alaska','アラスカ','알래스카','Alaska','Alaska'],event:'radio'},
 {id:'montreal',group:'americas',names:['蒙特婁','Montréal','モントリオール','몬트리올','Montreal','Montréal'],event:'parcel'},
 {id:'canberra',group:'pacific',names:['坎培拉','Canberra','キャンベラ','캔버라','Canberra','Canberra'],event:'receipt'},
 {id:'wellington',group:'pacific',names:['惠靈頓','Wellington','ウェリントン','웰링턴','Wellington','Wellington'],event:'harbor'},
 {id:'jakarta',group:'pacific',names:['雅加達','Jakarta','ジャカルタ','자카르타','Yakarta','Jakarta'],event:'blackout'},
 {id:'bangkok',group:'pacific',names:['曼谷','Bangkok','バンコク','방콕','Bangkok','Bangkok'],event:'station'},
 {id:'penang',group:'pacific',names:['檳城','Penang','ペナン','페낭','Penang','Penang'],event:'receipt'},
 {id:'new-delhi',group:'pacific',names:['新德里','New Delhi','ニューデリー','뉴델리','Nueva Delhi','New Delhi'],event:'station'},
 {id:'berlin',group:'europe-africa',names:['柏林','Berlin','ベルリン','베를린','Berlín','Berlin'],event:'parcel'},
 {id:'london',group:'europe-africa',names:['倫敦','London','ロンドン','런던','Londres','Londres'],event:'station'},
 {id:'istanbul',group:'europe-africa',names:['伊斯坦堡','Istanbul','イスタンブール','이스탄불','Estambul','Istanbul'],event:'harbor'},
 {id:'cairo',group:'europe-africa',names:['開羅','Cairo','カイロ','카이로','El Cairo','Le Caire'],event:'radio'},
 {id:'madagascar',group:'europe-africa',names:['馬達加斯加','Madagascar','マダガスカル','마다가스카르','Madagascar','Madagascar'],event:'blackout'},
 {id:'vatican',group:'europe-africa',names:['梵蒂岡','Vatican City','バチカン','바티칸','Ciudad del Vaticano','Cité du Vatican'],event:'receipt'}
];
export function getStation(id){return stationPool.find(s=>s.id===id)||null;}
export function pickStation(rng=Math.random){return stationPool[Math.max(0,Math.min(stationPool.length-1,Math.floor(rng()*stationPool.length)))];}

export const unassignedPlaces=['哈薩克']; // User left its group undecided.
