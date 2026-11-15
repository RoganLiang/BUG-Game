import {stationPool} from '../world/stations.js';
export const awakeningCatalog=[
  [
    "你在公車上醒來",
    "You wake up on a bus",
    "バスの中で目を覚ます",
    "버스에서 눈을 뜨다",
    "Despiertas en un autobús",
    "Vous vous réveillez dans un bus"
  ],
  [
    "你在公車上醒來。司機大聲說「終點站到了」。一位抱著書的婦人看了你一眼，西裝男子匆匆下車。車門旁的到站螢幕，和你手中的車票顯示不同站名。",
    "You wake on a bus. The driver shouts, “Last stop!” A woman holding books glances at you. A man in a suit rushes off. The arrival display and your ticket show different stop names.",
    "バスで目を覚ます。「終点だ！」と運転手。本を抱えた女性がこちらを見て、スーツの男性が急いで降りる。到着表示と切符の駅名が違う。",
    "버스에서 깨어난다. 기사가 “종점입니다!”라고 외친다. 책을 든 여성이 쳐다보고 정장 남자가 급히 내린다. 안내판과 표의 정류장 이름이 다르다.",
    "Despiertas en un autobús. El conductor grita: «¡Última parada!». Una mujer con libros te mira; un hombre de traje sale corriendo. La pantalla y tu billete indican paradas distintas.",
    "Vous vous réveillez dans un bus. « Terminus ! » crie le conducteur. Une femme tenant des livres vous regarde ; un homme en costume descend précipitamment. L’afficheur et votre billet indiquent deux arrêts différents."
  ],
  [
    "下車，先確認自己在哪裡",
    "Get off and find out where you are",
    "降りて、現在地を確かめる",
    "내려서 위치부터 확인하기",
    "Bajar y averiguar dónde estás",
    "Descendre et vérifier où vous êtes"
  ],
  [
    "你下了車，先與司機的吼聲拉開距離。",
    "You get off, putting distance between you and the shouting.",
    "バスを降り、怒鳴り声から距離を取った。",
    "버스에서 내려 고함과 거리를 뒀다.",
    "Bajas y tomas distancia de los gritos.",
    "Vous descendez et prenez vos distances avec les cris."
  ],
  [
    "留在座位，比對車票和站名",
    "Stay seated and compare the ticket with the stop name",
    "座ったまま切符と駅名を比べる",
    "앉아서 표와 정류장 이름 비교하기",
    "Seguir sentado y comparar billete y parada",
    "Rester assis et comparer le billet au nom de l’arrêt"
  ],
  [
    "你保留車票，沒有急著相信終點站的說法。",
    "You keep your ticket and withhold judgment about the terminus.",
    "切符を残し、終点という言葉をすぐには信じなかった。",
    "표를 간직하고 종점이라는 말을 바로 믿지 않았다.",
    "Conservas el billete sin dar por cierto lo del terminus.",
    "Vous gardez le billet sans croire aussitôt à l’annonce du terminus."
  ],
  [
    "詢問司機是否需要幫忙",
    "Ask whether the driver needs help",
    "運転手に助けが必要か尋ねる",
    "기사에게 도움이 필요한지 묻기",
    "Preguntar si el conductor necesita ayuda",
    "Demander au conducteur s’il a besoin d’aide"
  ],
  [
    "司機暫時不肯解釋，只請你別再靠近駕駛座。",
    "The driver will not explain yet. He asks you to stay away from his seat.",
    "運転手は説明せず、運転席に近づかないでほしいと言った。",
    "기사는 설명하지 않고 운전석에서 떨어져 달라고 했다.",
    "El conductor no quiere explicarse y te pide que te alejes de su asiento.",
    "Le conducteur refuse d’expliquer et vous demande de ne pas approcher de son siège."
  ],
  [
    "走去圖書館找服務櫃檯",
    "Go to the library service desk",
    "図書館の受付へ行く",
    "도서관 안내대로 가기",
    "Ir al mostrador de la biblioteca",
    "Aller à l’accueil de la bibliothèque"
  ],
  [
    "你選擇到有服務人員的地方核對狀況。",
    "You look for a staffed place to check what is happening.",
    "職員のいる場所で状況を確かめようとした。",
    "직원이 있는 곳에서 상황을 확인하기로 했다.",
    "Buscas un lugar con personal para aclarar la situación.",
    "Vous cherchez un lieu avec du personnel pour vérifier la situation."
  ],
  [
    "先走回家，今晚不追這件事",
    "Walk home. Leave this mystery for tonight.",
    "家に帰り、今夜は追わない",
    "집으로 가고 오늘은 더 쫓지 않기",
    "Volver a casa y no investigar esta noche",
    "Rentrer chez vous sans enquêter davantage ce soir"
  ],
  [
    "你決定先回家。車站的事仍在發生，但不會追著你跑。",
    "You head home. Events continue at the stop, but they will not chase you.",
    "家に向かった。駅での出来事は続くが、あなたを追いかけてはこない。",
    "집으로 향한다. 정류장의 일은 계속되지만 당신을 쫓아오지는 않는다.",
    "Te vas a casa. Lo de la parada continúa, pero no te persigue.",
    "Vous rentrez. Les événements continuent à l’arrêt, sans vous poursuivre."
  ],
  [
    "終點站的說法對不上",
    "The terminus story does not fit",
    "終点という話が合わない",
    "종점이라는 말이 맞지 않는다",
    "Lo del terminus no encaja",
    "L’histoire du terminus ne tient pas"
  ],
  [
    "你在圖書館站牌下。剛才的婦人也下車了。樹叢裡的西裝男子向你招手：「先別急著相信任何人。」他看起來同樣害怕。",
    "You stand at the library stop. The woman also got off. A suited man beckons from the bushes: “Don’t rush to trust anyone.” He looks frightened too.",
    "図書館前のバス停。女性も降りてきた。茂みの男性が手招きする。「誰もすぐには信じないで」。彼も怖がっている。",
    "도서관 정류장에 섰다. 여성도 내렸다. 수풀 속 정장 남자가 손짓한다. “아무도 서둘러 믿지 마세요.” 그도 겁에 질려 있다.",
    "Estás en la parada de la biblioteca. La mujer también baja. Un hombre de traje te llama desde los arbustos: «No confíes tan deprisa en nadie». Él también parece asustado.",
    "À l’arrêt de la bibliothèque, la femme descend aussi. Un homme en costume vous fait signe depuis les buissons : « Ne faites confiance à personne trop vite. » Il semble lui aussi effrayé."
  ],
  [
    "比對時間與現場能看到的標示",
    "Compare the time with the signs you can see",
    "時刻と見える表示を照合する",
    "시간과 눈앞의 표지 비교하기",
    "Comparar la hora con las señales visibles",
    "Comparer l’heure avec les indications visibles"
  ],
  [
    "你記下兩個不同時間，暫時不把其中一個當成真相。",
    "You record two different times without declaring either one true.",
    "二つの時刻を記録し、どちらも真実と決めつけなかった。",
    "다른 두 시간을 적고 어느 쪽도 진실이라 단정하지 않았다.",
    "Anotas dos horas distintas sin dar ninguna por cierta.",
    "Vous notez deux horaires sans déclarer l’un ou l’autre exact."
  ],
  [
    "先確認旁邊的人有沒有受傷",
    "Check whether anyone nearby is hurt",
    "近くの人がけがをしていないか確かめる",
    "주변 사람이 다쳤는지 확인하기",
    "Comprobar si alguien está herido",
    "Vérifier si quelqu’un est blessé"
  ],
  [
    "沒有人明顯受傷，但你的關心讓對方願意多說一句。",
    "No visible injuries. Your concern makes someone willing to say one more thing.",
    "目立つけがはない。気遣いに、相手はもう一言話してくれた。",
    "눈에 띄는 부상은 없다. 걱정해 주자 상대가 한마디 더 했다.",
    "No hay heridas evidentes. Tu interés anima a alguien a decir algo más.",
    "Aucune blessure visible. Votre attention incite quelqu’un à en dire un peu plus."
  ],
  [
    "把剛才的事用一句話問清楚",
    "Ask one clear question about what happened",
    "何が起きたか、一言で尋ねる",
    "일어난 일을 한 문장으로 묻기",
    "Hacer una pregunta clara sobre lo ocurrido",
    "Poser une question claire sur ce qui s’est passé"
  ],
  [
    "對方只回答自己知道的部分，你仍沒有完整答案。",
    "They answer only what they know. Your picture is still incomplete.",
    "相手は知っている範囲だけ答えた。全体はまだ見えない。",
    "상대는 아는 부분만 답했다. 전체는 아직 알 수 없다.",
    "Solo responden lo que saben. Aún no tienes una visión completa.",
    "La réponse se limite à ce que la personne sait. La situation reste incomplète."
  ],
  [
    "先換個位置，保留離開的路",
    "Change position and keep an exit available",
    "場所を変え、退路を残す",
    "위치를 바꾸고 나갈 길 확보하기",
    "Cambiar de sitio y conservar una salida",
    "Changer de place et garder une issue"
  ],
  [
    "你換到能看清出口的位置，沒有逼自己繼續冒進。",
    "You move where you can see the exit without pushing yourself deeper in.",
    "出口の見える位置へ移り、無理に踏み込まなかった。",
    "출구가 보이는 곳으로 옮기고 무리하게 나서지 않았다.",
    "Te sitúas donde ves la salida, sin forzarte a avanzar.",
    "Vous vous placez près d’une issue sans vous forcer à aller plus loin."
  ],
  [
    "照原本計畫行動，不再等別人決定",
    "Follow your plan instead of waiting for others to decide",
    "自分の予定に従い、人の決定を待たない",
    "남의 결정을 기다리지 않고 원래 계획대로 행동하기",
    "Seguir tu plan sin esperar que otros decidan",
    "Suivre votre plan sans attendre la décision des autres"
  ],
  [
    "你自己選了下一步，也接受可能錯過一些線索。",
    "You choose your next step, accepting that some clues may be missed.",
    "自分で次を選び、見逃す手掛かりもあると受け止めた。",
    "다음 행동을 스스로 고르고 단서를 놓칠 수도 있음을 받아들였다.",
    "Eliges el siguiente paso y aceptas perder algunas pistas.",
    "Vous choisissez la suite en acceptant de manquer certains indices."
  ],
  [
    "每個人都在害怕什麼",
    "What is everyone afraid of?",
    "みんなは何を怖がっている？",
    "모두 무엇을 두려워할까?",
    "¿A qué teme cada persona?",
    "De quoi chacun a-t-il peur ?"
  ],
  [
    "男子說自己經歷過相似情況十二次。婦人聽見後退了一步：「你怎麼也一直看著我？」她手上拿著今天要還的書。",
    "The man says this has happened twelve times. The woman steps back: “Why do you keep staring at me too?” She holds books due back today.",
    "男性は似たことを十二回経験したと言う。女性は後ずさる。「あなたまで、なぜ私を見続けるの？」手には今日返す本。",
    "남자는 비슷한 일을 열두 번 겪었다고 한다. 여성이 물러난다. “당신도 왜 계속 쳐다봐요?” 손에는 오늘 반납할 책이 있다.",
    "El hombre dice haber vivido algo parecido doce veces. La mujer retrocede: «¿Por qué tú también me miras tanto?». Lleva libros que debe devolver hoy.",
    "L’homme dit avoir vécu cela douze fois. La femme recule : « Pourquoi me regardez-vous sans arrêt, vous aussi ? » Elle tient des livres à rendre aujourd’hui."
  ],
  [
    "找出兩段說法能互相核對的細節",
    "Find a detail that lets you cross-check both accounts",
    "二つの話を照合できる細部を探す",
    "두 이야기를 대조할 수 있는 세부 찾기",
    "Buscar un detalle para contrastar los relatos",
    "Chercher un détail permettant de recouper les récits"
  ],
  [
    "你找到一處能核對的細節，仍有其他部分不明。",
    "You find one checkable detail. Other parts remain unclear.",
    "照合できる細部が一つ見つかった。残りはまだ不明だ。",
    "확인 가능한 세부 하나를 찾았지만 나머지는 불분명하다.",
    "Encuentras un detalle comprobable; lo demás sigue sin aclararse.",
    "Vous trouvez un détail vérifiable ; d’autres éléments restent flous."
  ],
  [
    "把水或座位讓給最緊張的人",
    "Offer water or a seat to the most anxious person",
    "最も不安そうな人に水か席を譲る",
    "가장 불안해하는 사람에게 물이나 자리 내주기",
    "Ofrecer agua o asiento a quien está más nervioso",
    "Offrir de l’eau ou une place à la personne la plus inquiète"
  ],
  [
    "對方慢慢平靜，但沒有因此把所有秘密告訴你。",
    "They calm down, but that does not make them reveal everything.",
    "相手は落ち着いたが、すべてを話してはくれなかった。",
    "상대는 진정했지만 모든 것을 말해 주지는 않았다.",
    "Se tranquiliza, pero no por ello te cuenta todos sus secretos.",
    "La personne se calme sans pour autant tout vous révéler."
  ],
  [
    "請兩人輪流說，先不判定誰說謊",
    "Let both speak in turn without deciding who is lying",
    "うそと決めつけず、順番に話してもらう",
    "누가 거짓말하는지 단정하지 말고 번갈아 듣기",
    "Escuchar a ambos por turnos sin juzgar quién miente",
    "Écouter chacun à son tour sans décider qui ment"
  ],
  [
    "兩段不同的見聞被並排留下，不再互相蓋過。",
    "Both accounts remain side by side instead of drowning each other out.",
    "二つの話が、互いをかき消さず並んで残った。",
    "두 이야기가 서로를 덮지 않고 나란히 남았다.",
    "Los dos relatos quedan juntos, sin que uno tape al otro.",
    "Les deux récits coexistent au lieu de s’étouffer mutuellement."
  ],
  [
    "不透露自己的推測，先聽完",
    "Keep your theory to yourself and listen first",
    "推測を口にせず、先に聞く",
    "추측을 말하지 않고 먼저 듣기",
    "Guardar tu teoría y escuchar primero",
    "Garder votre théorie et écouter d’abord"
  ],
  [
    "你先聽完，避免自己的猜測改變對方的說法。",
    "You listen without letting your guesses shape their account.",
    "自分の推測が相手の話を変えないよう、先に聞いた。",
    "내 추측이 상대의 이야기를 바꾸지 않도록 먼저 들었다.",
    "Escuchas sin dejar que tus suposiciones cambien el relato.",
    "Vous écoutez sans laisser vos suppositions influencer le récit."
  ],
  [
    "指出一個矛盾，請對方直接回答",
    "Point out one contradiction and ask for a direct answer",
    "矛盾を一つ示し、直接答えてもらう",
    "모순 하나를 짚고 직접 답을 요청하기",
    "Señalar una contradicción y pedir una respuesta directa",
    "Relever une contradiction et demander une réponse directe"
  ],
  [
    "對方承認有一件事記不清，這次沒有答案。",
    "They admit they cannot remember one thing. This time, there is no answer.",
    "一つ覚えていないことがあると認めた。今回は答えがない。",
    "상대는 한 가지가 기억나지 않는다고 인정했다. 이번에는 답이 없다.",
    "Admiten no recordar una cosa. Esta vez no hay respuesta.",
    "La personne reconnaît un trou de mémoire. Cette fois, pas de réponse."
  ],
  [
    "同一分鐘，不同的目擊",
    "One minute, different witnesses",
    "同じ一分、違う目撃",
    "같은 1분, 다른 목격",
    "Un minuto, distintos testigos",
    "Une minute, des témoins différents"
  ],
  [
    "站牌時鐘停了一瞬，公車廣播又響了一次。男子說重複出現的是司機；婦人卻說她反覆遇見圖書館員。你手上的證詞開始交錯。",
    "The stop clock freezes briefly. The announcement repeats. The man keeps seeing the driver; the woman keeps seeing the librarian. Their accounts cross.",
    "時計が一瞬止まり、車内放送が繰り返す。男性は運転手、女性は館員を何度も見るという。証言が交差する。",
    "정류장 시계가 잠시 멈추고 안내가 반복된다. 남자는 기사를, 여성은 사서를 반복해서 본다고 한다. 증언이 교차한다.",
    "El reloj se detiene un instante y el anuncio se repite. Él vuelve a ver al conductor; ella, al bibliotecario. Los relatos se cruzan.",
    "L’horloge s’arrête un instant et l’annonce se répète. L’homme revoit le conducteur ; la femme, le bibliothécaire. Les récits se croisent."
  ],
  [
    "留下可重複核對的時間紀錄",
    "Keep a time record you can check again",
    "後で照合できる時刻を残す",
    "다시 확인할 수 있게 시간 기록하기",
    "Guardar un registro horario verificable",
    "Garder un relevé horaire vérifiable"
  ],
  [
    "你記錄了現象，沒有把它直接解釋成超能力。",
    "You record the phenomenon without immediately calling it a superpower.",
    "現象を記録し、すぐ超能力とは決めつけなかった。",
    "현상을 기록하고 곧바로 초능력이라 해석하지 않았다.",
    "Registras el fenómeno sin llamarlo de inmediato un superpoder.",
    "Vous notez le phénomène sans le qualifier aussitôt de superpouvoir."
  ],
  [
    "先讓旁邊的人站穩，再看異常",
    "Steady the person beside you before investigating",
    "隣の人を支えてから異常を見る",
    "옆 사람이 서도록 도운 뒤 이상 확인하기",
    "Ayudar a alguien a mantenerse en pie antes de investigar",
    "Aider la personne à tenir debout avant d’enquêter"
  ],
  [
    "你錯過一瞬畫面，但對方沒有跌倒。",
    "You miss a moment, but the person does not fall.",
    "一瞬を見逃したが、相手は転ばなかった。",
    "한순간을 놓쳤지만 상대는 넘어지지 않았다.",
    "Pierdes un instante, pero esa persona no se cae.",
    "Vous manquez un instant, mais la personne ne tombe pas."
  ],
  [
    "交換各自看見的順序",
    "Exchange the order of what each person saw",
    "各自が見た順序を交換する",
    "각자 본 순서 공유하기",
    "Comparar el orden de lo que vio cada uno",
    "Échanger l’ordre de ce que chacun a vu"
  ],
  [
    "大家發現，彼此看見的重複對象並不相同。",
    "You discover that each person keeps seeing someone different.",
    "繰り返し見る相手が、人ごとに違うと分かった。",
    "반복해서 보는 대상이 사람마다 다르다는 것을 알았다.",
    "Descubrís que cada persona vuelve a ver a alguien distinto.",
    "Vous découvrez que chacun revoit une personne différente."
  ],
  [
    "離開最擁擠的位置，再觀察一次",
    "Move away from the crowd and observe again",
    "人混みから離れて見直す",
    "붐비는 곳을 벗어나 다시 관찰하기",
    "Alejarse de la multitud y observar otra vez",
    "S’éloigner de la foule et observer à nouveau"
  ],
  [
    "你減少干擾，但也聽不見最遠處的對話了。",
    "There is less interference, but you can no longer hear the distant conversation.",
    "邪魔は減ったが、遠くの会話は聞こえなくなった。",
    "방해는 줄었지만 멀리 있는 대화는 들리지 않는다.",
    "Hay menos distracciones, pero ya no oyes la conversación lejana.",
    "Les distractions diminuent, mais la conversation lointaine devient inaudible."
  ],
  [
    "做一個小測試，確認物件是否真有移動",
    "Test whether a small object really moved",
    "小さな物が動いたか試す",
    "작은 물건이 정말 움직였는지 시험하기",
    "Probar si un objeto pequeño se movió de verdad",
    "Tester si un petit objet a réellement bougé"
  ],
  [
    "小測試排除一個猜測，沒有解釋全部現象。",
    "The test rules out one guess without explaining everything.",
    "一つの推測は除けたが、全部は説明できない。",
    "시험으로 추측 하나를 배제했지만 전부 설명되지는 않는다.",
    "La prueba descarta una idea sin explicarlo todo.",
    "Le test écarte une hypothèse sans tout expliquer."
  ],
  [
    "先接住眼前的人",
    "Catch the person in front of you",
    "目の前の人を支える",
    "눈앞의 사람부터 돕다",
    "Ayudar a quien tienes delante",
    "Soutenir la personne devant vous"
  ],
  [
    "男子蹲下來喘氣，婦人想把散落的書撿起來。此刻沒有怪物出現，只有幾個被自己嚇壞的人。你先照顧哪件事？",
    "The man crouches to catch his breath. The woman reaches for scattered books. No monster appears, only frightened people. What do you attend to first?",
    "男性がしゃがんで息を整え、女性は散らばった本を拾おうとする。怪物はいない。いるのは怖がる人たちだけ。何を先にする？",
    "남자는 쪼그려 숨을 고르고 여성은 흩어진 책을 주우려 한다. 괴물은 없고 겁먹은 사람들뿐이다. 무엇을 먼저 돌볼까?",
    "El hombre se agacha a respirar y la mujer recoge sus libros. No aparece ningún monstruo, solo personas asustadas. ¿Qué atiendes primero?",
    "L’homme s’accroupit pour respirer ; la femme ramasse ses livres. Aucun monstre, seulement des gens effrayés. Que faites-vous d’abord ?"
  ],
  [
    "先看清狀況，再伸手幫忙",
    "Understand the situation before reaching out",
    "状況を見てから手を貸す",
    "상황을 살핀 뒤 도움의 손 내밀기",
    "Entender la situación antes de ayudar",
    "Comprendre la situation avant d’aider"
  ],
  [
    "你看清障礙的位置，幫忙時避開了它。",
    "You spot the obstacle and avoid it while helping.",
    "障害物を見つけ、避けながら手を貸した。",
    "장애물 위치를 보고 피하며 도왔다.",
    "Ves el obstáculo y lo evitas al ayudar.",
    "Vous repérez l’obstacle et l’évitez en aidant."
  ],
  [
    "接住快掉落的東西，晚一點再追線索",
    "Catch what is falling; follow clues later",
    "落ちる物を受け止め、手掛かりは後にする",
    "떨어지는 것을 받고 단서는 나중에 찾기",
    "Recoger lo que cae y dejar las pistas para después",
    "Rattraper ce qui tombe et remettre les indices à plus tard"
  ],
  [
    "你少收集一條線索，卻接住了眼前的日常。",
    "You miss a clue, but catch a small piece of ordinary life.",
    "手掛かりを一つ逃したが、目の前の日常を受け止めた。",
    "단서 하나는 놓쳤지만 눈앞의 일상을 받아냈다.",
    "Pierdes una pista, pero sostienes un pequeño momento cotidiano.",
    "Vous manquez un indice, mais préservez un petit moment ordinaire."
  ],
  [
    "請旁邊的人各幫一點忙",
    "Ask nearby people to each help a little",
    "周りの人に少しずつ手伝ってもらう",
    "주변 사람에게 조금씩 도움 요청하기",
    "Pedir a cada persona una pequeña ayuda",
    "Demander un peu d’aide à chacun"
  ],
  [
    "幾個很小的動作湊在一起，場面終於不再混亂。",
    "Small actions add up. The scene finally settles down.",
    "小さな手助けが重なり、ようやく場が落ち着いた。",
    "작은 행동들이 모여 상황이 차분해졌다.",
    "Los pequeños gestos se suman y la situación se calma.",
    "Les petits gestes s’additionnent et la scène s’apaise."
  ],
  [
    "把礙路物件移開，留出安全空間",
    "Clear the obstacle and leave a safe space",
    "邪魔な物をどけ、安全な空間を作る",
    "방해물을 치워 안전한 공간 만들기",
    "Apartar el obstáculo y dejar un espacio seguro",
    "Dégager l’obstacle pour créer un espace sûr"
  ],
  [
    "你沒有要求任何人相信你，只先留出一條路。",
    "You do not ask anyone to trust you. You simply clear a path.",
    "信じてほしいとは言わず、まず道を空けた。",
    "믿어 달라고 요구하지 않고 먼저 길을 비웠다.",
    "No pides que confíen en ti. Solo despejas el camino.",
    "Vous ne demandez pas qu’on vous croie. Vous dégagez simplement un passage."
  ],
  [
    "先完成手上的事，再回來確認",
    "Finish your task, then come back to check",
    "自分の用事を終えてから確認に戻る",
    "하던 일을 끝내고 돌아와 확인하기",
    "Terminar tu tarea y volver después",
    "Finir votre tâche puis revenir vérifier"
  ],
  [
    "你守住自己的安排，也接受別人不一定等你。",
    "You keep your plan and accept that others may not wait.",
    "自分の予定を守り、他の人が待つとは限らないと受け止めた。",
    "자신의 일정을 지키고 다른 사람이 기다리지 않을 수도 있음을 받아들였다.",
    "Mantienes tu plan y aceptas que otros quizá no esperen.",
    "Vous suivez votre plan en acceptant que les autres ne vous attendent pas."
  ],
  [
    "你願意留下什麼",
    "What will you leave behind?",
    "何を残していく？",
    "무엇을 남길 것인가?",
    "¿Qué dejarás atrás?",
    "Que laisserez-vous derrière vous ?"
  ],
  [
    "圖書館的門還開著，回家的路也在。要不要繼續，不再由司機或傳言替你決定。",
    "The library is still open. The road home remains. Neither driver nor rumor will decide whether you continue.",
    "図書館の扉も帰り道もある。続けるかは運転手やうわさではなく、あなたが決める。",
    "도서관 문도 귀갓길도 열려 있다. 계속할지는 기사나 소문이 대신 정하지 않는다.",
    "La biblioteca sigue abierta y el camino a casa también. Ni el conductor ni los rumores decidirán si continúas.",
    "La bibliothèque reste ouverte, tout comme le chemin du retour. Ni le conducteur ni les rumeurs ne décident de la suite."
  ],
  [
    "把確定與未確定的事分開留下",
    "Keep confirmed facts separate from unknowns",
    "確かなことと不明なことを分けて残す",
    "확실한 것과 불확실한 것을 나눠 남기기",
    "Separar lo confirmado de lo desconocido",
    "Séparer les faits confirmés des inconnues"
  ],
  [
    "你留下可核對的紀錄，沒有替空白編答案。",
    "You keep a checkable record without inventing answers for the gaps.",
    "照合できる記録を残し、空白に答えを作らなかった。",
    "확인 가능한 기록을 남기고 빈칸을 지어내지 않았다.",
    "Dejas un registro verificable sin inventar respuestas para los huecos.",
    "Vous gardez un relevé vérifiable sans inventer de réponses aux lacunes."
  ],
  [
    "確認對方能安全離開再走",
    "Make sure they can leave safely before you go",
    "相手が安全に帰れるか確かめてから去る",
    "상대가 안전하게 떠나는지 확인한 뒤 가기",
    "Comprobar que pueden irse a salvo antes de partir",
    "Vérifier que la personne peut partir en sécurité avant de partir"
  ],
  [
    "你等到對方站穩，才把自己的路接回去。",
    "You wait until they are steady, then return to your own path.",
    "相手が落ち着くのを待ってから、自分の道へ戻った。",
    "상대가 안정될 때까지 기다린 뒤 자신의 길로 돌아갔다.",
    "Esperas a que esté estable y retomas tu camino.",
    "Vous attendez que la personne soit stable puis reprenez votre route."
  ],
  [
    "讓每個人說完自己看到的部分",
    "Let each person finish their own account",
    "一人ずつ、見たことを最後まで話してもらう",
    "각자 본 이야기를 끝까지 말하게 하기",
    "Dejar que cada persona termine su relato",
    "Laisser chacun terminer son récit"
  ],
  [
    "最後一次交換資訊，讓互相懷疑的人願意合作。",
    "One last exchange makes people who doubted each other willing to cooperate.",
    "最後の情報交換で、疑い合っていた人たちが協力し始めた。",
    "마지막 정보 교환으로 의심하던 사람들이 협력하려 한다.",
    "Un último intercambio anima a cooperar a quienes se desconfiaban.",
    "Un dernier échange incite à coopérer des personnes qui se soupçonnaient."
  ],
  [
    "保存線索，暫時退出這段事件",
    "Save your clues and step away for now",
    "手掛かりを保存し、いったん離れる",
    "단서를 보관하고 잠시 물러나기",
    "Guardar las pistas y retirarse por ahora",
    "Garder vos indices et vous retirer pour le moment"
  ],
  [
    "你保留回來的可能，沒有勉強自己解決一切。",
    "You leave room to return without forcing yourself to solve everything.",
    "戻れる余地を残し、すべて解こうと無理はしなかった。",
    "돌아올 여지를 남기고 모든 것을 풀려 무리하지 않았다.",
    "Dejas abierta la posibilidad de volver, sin exigirte resolverlo todo.",
    "Vous gardez la possibilité de revenir sans vous forcer à tout résoudre."
  ],
  [
    "選定一條路，帶著代價往前走",
    "Choose a path and accept its cost",
    "代償を引き受けて道を選ぶ",
    "대가를 받아들이고 길을 고르기",
    "Elegir un camino y aceptar su coste",
    "Choisir un chemin et en accepter le prix"
  ],
  [
    "你做出了決定。沒有掌聲，但這一次是你自己選的。",
    "You made a decision. No applause, but this time it was yours.",
    "決めた。拍手はない。でも、今回は自分で選んだ。",
    "결정했다. 박수는 없지만 이번에는 스스로 고른 것이다.",
    "Has decidido. No hay aplausos, pero esta vez elegiste tú.",
    "Vous avez décidé. Pas d’applaudissements, mais cette fois le choix est le vôtre."
  ],
  [
    "你仍在車內。司機捏著方向盤，說「已經到站」；車票卻顯示還有一站。婦人把包抱得更緊。你要先做什麼？",
    "You stay on the bus. The driver grips the wheel: “We’re here.” Your ticket says one stop remains. The woman clutches her bag. What first?",
    "車内に残った。運転手は「着いた」とハンドルを握るが、切符ではあと一駅。女性は包みを抱きしめる。まずどうする？",
    "차 안에 남았다. 기사는 핸들을 쥐며 “도착했어요”라고 하지만 표에는 한 정류장이 남아 있다. 여성이 가방을 꼭 안는다. 먼저 무엇을 할까?",
    "Sigues en el autobús. El conductor aprieta el volante: «Ya llegamos». Tu billete indica otra parada. La mujer abraza su bolso. ¿Qué haces primero?",
    "Vous restez dans le bus. Le conducteur serre le volant : « On est arrivés. » Votre billet indique encore un arrêt. La femme serre son sac. Que faire d’abord ?"
  ],
  [
    "後座傳來很輕的一聲哈欠。你這才發現一位年輕人也睡在車上，胸前掛著圖書館識別證。他剛醒來，並不比你清楚狀況。",
    "A soft yawn comes from behind. Only now do you notice a young passenger asleep in the back, wearing a library badge. Just awake, they know no more than you.",
    "後ろから小さなあくび。初めて、図書館の名札をつけて眠っていた若者に気づく。起きたばかりで、彼も状況を知らない。",
    "뒤에서 작은 하품 소리가 난다. 이제야 도서관 명찰을 달고 뒤에서 자던 청년을 발견했다. 막 깨어나 당신만큼이나 혼란스럽다.",
    "Suena un bostezo detrás. Ahora descubres a un joven dormido con una credencial de biblioteca. Acaba de despertar y tampoco sabe qué pasa.",
    "Un léger bâillement derrière vous. Vous remarquez enfin un jeune passager endormi portant un badge de bibliothèque. Il vient de se réveiller et n’en sait pas plus que vous."
  ],
  [
    "廣播重播相同站名。年輕人小聲說，他已經看見同一位西裝男子躲進樹叢好幾次。司機卻只一直看你。",
    "The same stop announcement repeats. The young passenger says they have seen the suited man hide in the bushes repeatedly. The driver keeps looking at you.",
    "同じ駅の放送が繰り返す。若者は、スーツの男性が何度も茂みに隠れるのを見たという。運転手はあなたを見続ける。",
    "같은 정류장 안내가 반복된다. 청년은 정장 남자가 수풀에 숨는 것을 여러 번 봤다고 한다. 기사는 계속 당신을 본다.",
    "El anuncio repite la misma parada. El joven dice haber visto al hombre de traje esconderse varias veces. El conductor no deja de mirarte.",
    "La même annonce se répète. Le jeune passager dit avoir vu plusieurs fois l’homme en costume se cacher dans les buissons. Le conducteur vous fixe."
  ],
  [
    "司機的手在發抖，婦人也站不穩。沒有人攻擊你，但大家都以為別人知道些什麼。你只有時間先做一件事。",
    "The driver’s hands shake. The woman struggles to stand. No one attacks, but everyone thinks someone else knows more. You can do one thing first.",
    "運転手の手が震え、女性はふらつく。誰も襲ってこないが、皆が誰かは事情を知っていると思っている。先にできるのは一つ。",
    "기사의 손이 떨리고 여성도 휘청인다. 공격하는 사람은 없지만 모두 다른 누군가는 안다고 생각한다. 먼저 할 수 있는 일은 하나다.",
    "Al conductor le tiemblan las manos; la mujer apenas se sostiene. Nadie te ataca, pero todos creen que otro sabe algo. Solo puedes atender una cosa primero.",
    "Les mains du conducteur tremblent, la femme vacille. Personne n’attaque, mais chacun croit qu’un autre sait quelque chose. Vous devez commencer par une seule action."
  ],
  [
    "你可以把各人的目擊拼起來，也可以帶著有限線索離開。這次要留下的，是你的最後一個行動。",
    "Piece together the witnesses’ accounts, or leave with limited clues. This is your final action.",
    "証言をつなぐことも、少ない手掛かりで去ることもできる。最後の行動を選ぶ。",
    "목격담을 맞추거나 제한된 단서를 가지고 떠날 수 있다. 마지막 행동을 고른다.",
    "Puedes unir los relatos o irte con pocas pistas. Esta es tu última acción.",
    "Vous pouvez recouper les témoignages ou partir avec peu d’indices. Voici votre dernière action."
  ],
  [
    "你來到圖書館門前。門上寫著開館，閱覽區卻沒有讀者。婦人抱著書走在後方，像是也準備還書。",
    "You reach the library. A sign says open, yet no readers are inside. The woman follows, carrying books she seems ready to return.",
    "図書館へ来た。開館の表示だが読者はいない。女性も本を抱え、返却しようと後ろを歩く。",
    "도서관에 도착했다. 개관 표시가 있지만 독자는 없다. 책을 든 여성이 반납하려는 듯 뒤따라 걷는다.",
    "Llegas a la biblioteca. Dice abierta, pero no hay lectores. La mujer camina detrás con libros que parece querer devolver.",
    "Vous arrivez à la bibliothèque. Elle est indiquée ouverte, mais sans lecteurs. La femme marche derrière vous avec des livres à rendre."
  ],
  [
    "婦人把借書單放在櫃檯，問你為什麼一直盯著她。櫃檯暫時沒人，椅子旁放著一件圖書館員的外套。",
    "The woman puts her return slip on the empty desk and asks why you keep staring. A librarian’s coat lies beside a chair.",
    "女性は返却票を受付に置き、なぜ見つめるのか尋ねる。受付は無人で、椅子の横に館員の上着がある。",
    "여성이 빈 안내대에 반납표를 놓고 왜 계속 쳐다보는지 묻는다. 의자 옆에는 사서의 외투가 있다.",
    "La mujer deja su resguardo en el mostrador vacío y pregunta por qué la miras. Junto a una silla hay una chaqueta de bibliotecario.",
    "La femme pose son bordereau sur le comptoir vide et vous demande pourquoi vous la fixez. Une veste de bibliothécaire repose près d’une chaise."
  ],
  [
    "一位年輕館員從公車方向走進來，還帶著剛睡醒的神情。他問：「那個西裝男子又躲起來了嗎？」你不知道他說的是哪一次。",
    "A young librarian arrives from the bus, still looking sleepy. “Is that suited man hiding again?” You do not know which time they mean.",
    "眠そうな若い館員がバスの方から来た。「あのスーツの人、また隠れた？」どの時の話か分からない。",
    "졸린 표정의 젊은 사서가 버스 쪽에서 온다. “그 정장 남자 또 숨었나요?” 어느 때를 말하는지 알 수 없다.",
    "Un joven bibliotecario llega del autobús, aún adormilado. «¿Ese hombre de traje se ha escondido otra vez?». No sabes a qué vez se refiere.",
    "Un jeune bibliothécaire arrive du bus, encore somnolent. « L’homme en costume s’est encore caché ? » Vous ignorez à quelle fois il pense."
  ],
  [
    "館員搬書時踉蹌了一下，婦人的借書單掉在地上。你可以先幫忙，也可以保持距離核對手中的時間。",
    "The librarian stumbles carrying books. The woman’s slip falls. Help first, or stay back and compare the time you recorded?",
    "館員が本を運んでよろめき、女性の返却票が落ちた。手を貸すか、距離を取り時刻を照合するか。",
    "책을 옮기던 사서가 비틀거리고 여성의 반납표가 떨어진다. 먼저 도울까, 거리를 두고 시간을 확인할까?",
    "El bibliotecario tropieza cargando libros y cae el resguardo de la mujer. ¿Ayudas primero o comparas las horas desde lejos?",
    "Le bibliothécaire trébuche avec ses livres ; le bordereau tombe. Aider d’abord ou comparer vos horaires à distance ?"
  ],
  [
    "你現在能確定的，只有自己親眼見過與別人明說的部分。最後一次，你打算怎麼做？",
    "You know only what you saw and what others explicitly told you. What will your last action be?",
    "確かなのは、自分が見たことと人が明言したことだけ。最後はどうする？",
    "확실한 것은 직접 본 것과 상대가 말한 부분뿐이다. 마지막으로 무엇을 할까?",
    "Solo sabes lo que viste y lo que otros dijeron expresamente. ¿Cuál será tu última acción?",
    "Vous ne savez que ce que vous avez vu et ce qu’on vous a dit. Quelle sera votre dernière action ?"
  ],
  [
    "你走向回家的路。便利商店還開著，店員問你要不要加熱飯糰。你暫時離開了公車上的紛擾。",
    "You head home. The convenience store is open. The clerk asks if you want your snack warmed. For now, you have left the bus behind.",
    "家に向かう。コンビニは開いていて、店員が軽食を温めるか聞く。いったんバスの騒ぎを離れた。",
    "집으로 향한다. 편의점은 열려 있고 점원이 간식을 데울지 묻는다. 잠시 버스의 소동에서 벗어났다.",
    "Vas hacia casa. La tienda sigue abierta y el dependiente pregunta si quieres calentar la cena. Por ahora has dejado el autobús atrás.",
    "Vous rentrez. La supérette est ouverte ; on vous demande si vous voulez réchauffer votre repas. Pour l’instant, le bus est derrière vous."
  ],
  [
    "手機跳出一張站牌照片。你可以回頭核對，也可以先買完晚餐。沒有誰把你硬拉回那班車。",
    "A photo of the stop appears on your phone. Go back to check, or finish buying dinner. Nobody forces you back onto that bus.",
    "スマホにバス停の写真が届く。戻って確かめても、夕食を買ってもいい。誰もバスへ引き戻さない。",
    "휴대전화에 정류장 사진이 뜬다. 돌아가 확인해도 저녁을 먼저 사도 된다. 누구도 버스로 끌고 가지 않는다.",
    "Aparece una foto de la parada en tu móvil. Puedes volver o terminar de comprar la cena. Nadie te obliga a regresar.",
    "Une photo de l’arrêt apparaît sur votre téléphone. Vous pouvez revenir ou finir d’acheter votre dîner. Personne ne vous force à retourner au bus."
  ],
  [
    "你注意到收據上的分鐘數和手機不同。店員說收銀機的時鐘常常慢一點。這也可能只是日常的小故障。",
    "Your receipt and phone show different minutes. The clerk says the register clock is often slow. It may just be an ordinary fault.",
    "レシートとスマホの分が違う。店員いわくレジの時計はよく遅れる。ただの日常の故障かもしれない。",
    "영수증과 휴대전화의 분이 다르다. 점원은 계산대 시계가 자주 늦는다고 한다. 일상의 작은 고장일 수도 있다.",
    "La hora del recibo difiere de tu móvil. El dependiente dice que el reloj suele atrasarse. Puede ser una avería corriente.",
    "Le reçu et votre téléphone n’indiquent pas la même minute. La caisse retarde souvent, dit-on. Une panne ordinaire reste possible."
  ],
  [
    "一位路人的購物袋破了，橘子滾到你腳邊。你可以幫忙，也可以先顧好自己手上快冷掉的晚餐。",
    "A passerby’s shopping bag tears. Oranges roll to your feet. Help, or first look after your own cooling dinner?",
    "通行人の買い物袋が破れ、オレンジが足元へ転がる。手伝うか、自分の冷めそうな夕食を先にするか。",
    "행인의 장바구니가 찢어져 오렌지가 발밑으로 굴러온다. 도울까, 식어 가는 내 저녁부터 챙길까?",
    "Se rompe la bolsa de un transeúnte y las naranjas ruedan a tus pies. ¿Ayudas o atiendes primero tu cena que se enfría?",
    "Le sac d’un passant se déchire ; des oranges roulent à vos pieds. Aider ou vous occuper d’abord de votre repas qui refroidit ?"
  ],
  [
    "你沒有親眼看完公車站的事件。今晚仍可以安穩結束；不確定的地方，不需要硬補成答案。",
    "You did not witness everything at the stop. Tonight can still end peacefully. The unknown does not need an invented answer.",
    "バス停のすべては見ていない。それでも今夜は穏やかに終われる。不明点に答えを作る必要はない。",
    "정류장의 모든 일을 보지는 못했다. 그래도 오늘 밤은 평온히 끝날 수 있다. 모르는 것을 지어낼 필요는 없다.",
    "No viste todo lo de la parada. Aun así, la noche puede acabar tranquila. No hace falta inventar lo desconocido.",
    "Vous n’avez pas tout vu à l’arrêt. La soirée peut tout de même finir paisiblement. Inutile d’inventer une réponse aux inconnues."
  ],
  [
    "你在公車上醒來。司機大聲說「終點站到了」。一位抱著書的婦人看了你一眼，西裝男子匆匆下車。你的座位旁有一個沒人認領的紙袋，提把上繫著一張圖書館借書單。",
    "You wake on a bus. The driver shouts, “Last stop!” A woman holding books glances at you. A suited man rushes off. An unclaimed paper bag beside you has a library slip tied to its handle.",
    "バスで目を覚ます。「終点だ！」と運転手。本を抱えた女性がこちらを見て、スーツの男性が急いで降りる。座席脇の紙袋には図書館の貸出票が結ばれている。",
    "버스에서 깨어난다. 기사가 “종점입니다!”라고 외친다. 책을 든 여성이 쳐다보고 정장 남자가 급히 내린다. 옆자리의 주인 없는 종이봉투에 도서관 대출표가 묶여 있다.",
    "Despiertas en un autobús. «¡Última parada!». Una mujer con libros te mira y un hombre de traje sale corriendo. Junto a ti, una bolsa sin dueño lleva un resguardo de biblioteca atado al asa.",
    "Vous vous réveillez dans un bus. « Terminus ! » Une femme tenant des livres vous regarde ; un homme en costume descend. Un sac abandonné près de vous porte un bordereau de bibliothèque attaché à sa poignée."
  ],
  [
    "你在公車上醒來。司機大聲說「終點站到了」。一位抱著書的婦人看了你一眼，西裝男子匆匆下車。一張早餐收據黏在袖口，背面有人寫著：「先問清楚，再害怕。」",
    "You wake on a bus. The driver shouts, “Last stop!” A woman holding books glances at you. A suited man rushes off. A breakfast receipt sticks to your sleeve: “Ask first. Be afraid later.”",
    "バスで目を覚ます。「終点だ！」と運転手。本を抱えた女性がこちらを見て、スーツの男性が急いで降りる。袖についた朝食のレシートの裏には「怖がる前に、聞こう」。",
    "버스에서 깨어난다. 기사가 “종점입니다!”라고 외친다. 책을 든 여성이 쳐다보고 정장 남자가 급히 내린다. 소매에 붙은 아침 영수증 뒤에는 ‘겁내기 전에 먼저 물어봐.’",
    "Despiertas en un autobús. «¡Última parada!». Una mujer con libros te mira y un hombre de traje sale corriendo. En tu manga hay un recibo: «Pregunta primero; asústate después».",
    "Vous vous réveillez dans un bus. « Terminus ! » Une femme tenant des livres vous regarde ; un homme en costume descend. Un reçu de petit-déjeuner colle à votre manche : « Demandez d’abord. Ayez peur ensuite. »"
  ],
  [
    "你在公車上醒來。司機大聲說「終點站到了」。一位抱著書的婦人看了你一眼，西裝男子匆匆下車。窗外的風掀起站牌時刻表，車內廣播卻說今天沒有下一班。",
    "You wake on a bus. The driver shouts, “Last stop!” A woman holding books glances at you. A suited man rushes off. Wind lifts the timetable outside, while the announcement says there is no next bus today.",
    "バスで目を覚ます。「終点だ！」と運転手。本を抱えた女性がこちらを見て、スーツの男性が急いで降りる。外では時刻表が風にめくれ、放送は今日はもう次の便がないと言う。",
    "버스에서 깨어난다. 기사가 “종점입니다!”라고 외친다. 책을 든 여성이 쳐다보고 정장 남자가 급히 내린다. 바람에 시간표가 펄럭이는데 안내는 오늘 다음 차가 없다고 한다.",
    "Despiertas en un autobús. «¡Última parada!». Una mujer con libros te mira y un hombre de traje sale corriendo. El viento levanta el horario; el anuncio dice que hoy no habrá otro autobús.",
    "Vous vous réveillez dans un bus. « Terminus ! » Une femme tenant des livres vous regarde ; un homme en costume descend. Le vent soulève l’horaire, alors que l’annonce affirme qu’il n’y aura plus de bus aujourd’hui."
  ],
  [
    "你在公車上醒來。司機大聲說「終點站到了」。一位抱著書的婦人看了你一眼，西裝男子匆匆下車。車廂的燈忽然熄了一秒。再亮起時，婦人的包換了位置。",
    "You wake on a bus. The driver shouts, “Last stop!” A woman holding books glances at you. A suited man rushes off. The lights go out for one second. When they return, the woman’s bag has moved.",
    "バスで目を覚ます。「終点だ！」と運転手。本を抱えた女性がこちらを見て、スーツの男性が急いで降りる。一秒だけ消灯し、点くと女性の包みの位置が変わっている。",
    "버스에서 깨어난다. 기사가 “종점입니다!”라고 외친다. 책을 든 여성이 쳐다보고 정장 남자가 급히 내린다. 등이 1초 꺼졌다 켜지자 여성의 가방 위치가 달라져 있다.",
    "Despiertas en un autobús. «¡Última parada!». Una mujer con libros te mira y un hombre de traje sale corriendo. La luz se apaga un segundo. Al volver, el bolso de la mujer ha cambiado de sitio.",
    "Vous vous réveillez dans un bus. « Terminus ! » Une femme tenant des livres vous regarde ; un homme en costume descend. La lumière s’éteint une seconde. À son retour, le sac de la femme a changé de place."
  ],
  [
    "你在公車上醒來。司機大聲說「終點站到了」。一位抱著書的婦人看了你一眼，西裝男子匆匆下車。司機旁的收音機重播同一句話，窗外的站名卻已經換了一次。",
    "You wake on a bus. The driver shouts, “Last stop!” A woman holding books glances at you. A suited man rushes off. The driver’s radio repeats a sentence, but the stop name outside has changed.",
    "バスで目を覚ます。「終点だ！」と運転手。本を抱えた女性がこちらを見て、スーツの男性が急いで降りる。ラジオは同じ言葉を繰り返すが、外の駅名は変わっている。",
    "버스에서 깨어난다. 기사가 “종점입니다!”라고 외친다. 책을 든 여성이 쳐다보고 정장 남자가 급히 내린다. 라디오는 같은 문장을 반복하지만 창밖 정류장 이름은 바뀌었다.",
    "Despiertas en un autobús. «¡Última parada!». Una mujer con libros te mira y un hombre de traje sale corriendo. La radio repite una frase, pero el nombre de la parada exterior ha cambiado.",
    "Vous vous réveillez dans un bus. « Terminus ! » Une femme tenant des livres vous regarde ; un homme en costume descend. La radio répète une phrase, mais le nom de l’arrêt dehors a changé."
  ],
  [
    "異相殘留",
    "Anomaly Afterimage",
    "異相残像",
    "이상 잔상",
    "Rastro anómalo",
    "Rémanence anormale"
  ],
  [
    "你能看見近距離物體剛移動留下的一瞬殘影。",
    "You glimpse a faint afterimage where a nearby object just moved.",
    "近くの物が動いた跡に、一瞬の薄い残像が見える。",
    "가까운 물체가 방금 움직인 자리에 희미한 잔상이 보인다.",
    "Vislumbras un rastro tenue donde acaba de moverse un objeto cercano.",
    "Vous apercevez une faible rémanence à l’endroit où un objet proche vient de bouger."
  ],
  [
    "只能辨認移動位置，不能讀心、預知或知道誰動過。",
    "Only movement and position. No mind reading, prediction, or identifying who moved it.",
    "分かるのは移動と位置だけ。読心・予知・動かした人の特定はできない。",
    "움직임과 위치만 알 수 있다. 독심, 예지, 움직인 사람의 식별은 불가능하다.",
    "Solo movimiento y posición: no lees mentes, predices ni identificas al responsable.",
    "Uniquement le mouvement et la position : ni lecture des pensées, ni prédiction, ni identification de l’auteur."
  ],
  [
    "一次使用消耗4點能量，之後需要休息。",
    "One use costs 4 energy. Rest is required afterward.",
    "一回でエネルギーを4消費。その後は休息が必要。",
    "한 번에 에너지 4 소모. 이후 휴식이 필요하다.",
    "Cada uso cuesta 4 de energía y requiere descanso después.",
    "Une utilisation coûte 4 points d’énergie, suivie de repos."
  ],
  [
    "車票被風吹動時，紙角留下極淡的重影。你看清被折住的站名。",
    "Wind moves the ticket. A faint double edge reveals the folded stop name.",
    "切符が風で動き、薄い残像から折れた駅名を読み取れた。",
    "바람에 표가 움직이고 희미한 이중 윤곽 덕분에 접힌 정류장 이름을 읽었다.",
    "El viento mueve el billete. Un borde doble revela el nombre doblado de la parada.",
    "Le vent déplace le billet. Un léger contour dédoublé révèle le nom de l’arrêt masqué par le pli."
  ],
  [
    "掌心餘溫",
    "Palm Warmth",
    "掌の余熱",
    "손바닥 온기",
    "Calor de la palma",
    "Chaleur de la paume"
  ],
  [
    "你能讓掌心接觸的一小片紙張微微升溫。",
    "A small patch of paper touching your palm grows slightly warmer.",
    "掌に触れた小さな紙の一部分を、わずかに温められる。",
    "손바닥에 닿은 작은 종이 조각을 살짝 데울 수 있다.",
    "Una pequeña zona de papel en contacto con tu palma se calienta ligeramente.",
    "Une petite surface de papier touchant votre paume se réchauffe légèrement."
  ],
  [
    "只能影響掌心大小的紙張，無法加熱人體或治療疾病。",
    "Only palm-sized paper. No heating bodies or treating illness.",
    "掌ほどの紙に限る。人体の加熱や病気の治療はできない。",
    "손바닥 크기의 종이에만 작용한다. 인체 가열이나 질병 치료는 불가능하다.",
    "Solo papel del tamaño de la palma. No calienta cuerpos ni cura enfermedades.",
    "Seulement du papier de la taille de la paume. Ne chauffe pas les corps et ne soigne pas les maladies."
  ],
  [
    "受潮的車票在掌心慢慢乾了一角，站名重新清晰。",
    "A corner of the damp ticket slowly dries. Its stop name becomes readable.",
    "湿った切符の角がゆっくり乾き、駅名が読めるようになった。",
    "젖은 표의 한쪽이 서서히 말라 정류장 이름이 선명해졌다.",
    "Una esquina del billete húmedo se seca y deja leer la parada.",
    "Un coin du billet humide sèche lentement et le nom de l’arrêt redevient lisible."
  ],
  [
    "微光折射",
    "Faint Refraction",
    "微光屈折",
    "미광 굴절",
    "Refracción tenue",
    "Réfraction ténue"
  ],
  [
    "你能讓指尖附近一小塊反光偏移一點角度。",
    "You slightly redirect a tiny reflection near your fingertips.",
    "指先近くの小さな反射の角度を、少し変えられる。",
    "손끝 근처의 작은 반사광 각도를 조금 바꿀 수 있다.",
    "Desvías ligeramente un pequeño reflejo cerca de tus dedos.",
    "Vous déviez légèrement un petit reflet près de vos doigts."
  ],
  [
    "只能改變微小反光，不能隱身或製造影像。",
    "Tiny reflections only. No invisibility or projected images.",
    "微小な反射だけ。透明化や映像の生成はできない。",
    "작은 반사에만 작용한다. 투명화나 영상 생성은 불가능하다.",
    "Solo reflejos pequeños: no da invisibilidad ni crea imágenes.",
    "De minuscules reflets seulement : ni invisibilité ni création d’images."
  ],
  [
    "你把車窗上的反光挪開一點，終於看清玻璃後方的站名。",
    "You shift the window reflection just enough to read the stop name behind it.",
    "窓の反射を少しずらし、その向こうの駅名を読めた。",
    "창문의 반사광을 조금 옮겨 뒤편 정류장 이름을 읽었다.",
    "Desvías el reflejo de la ventana lo justo para leer la parada.",
    "Vous décalez assez le reflet de la vitre pour lire le nom de l’arrêt derrière."
  ],
  [
    "指尖偏移",
    "Fingertip Nudge",
    "指先の微動",
    "손끝 미동",
    "Empujón mínimo",
    "Infime impulsion"
  ],
  [
    "你能讓一枚迴紋針大小的輕物移動一點距離。",
    "You move a visible, paperclip-sized light object a tiny distance.",
    "目の前のクリップ程度の軽い物を、ほんの少し動かせる。",
    "눈앞의 클립 크기 가벼운 물건을 조금 움직일 수 있다.",
    "Mueves una distancia mínima un objeto ligero del tamaño de un clip.",
    "Vous déplacez très légèrement un petit objet léger de la taille d’un trombone."
  ],
  [
    "只能作用於眼前輕物，不能推動人或大型物件。",
    "Only light objects in view. No moving people or large objects.",
    "見える軽い物だけ。人や大きな物は動かせない。",
    "보이는 가벼운 물체만 가능하다. 사람이나 큰 물체는 움직이지 못한다.",
    "Solo objetos ligeros a la vista, no personas ni objetos grandes.",
    "Uniquement de petits objets visibles, pas de personnes ni de gros objets."
  ],
  [
    "卡在車票上的小迴紋針移開了。被遮住的站名露出來。",
    "The little paperclip on the ticket shifts. The hidden stop name appears.",
    "切符の小さなクリップがずれ、隠れていた駅名が現れた。",
    "표에 끼인 작은 클립이 움직여 가려진 정류장 이름이 드러났다.",
    "El clip del billete se desplaza y descubre el nombre oculto de la parada.",
    "Le petit trombone se déplace sur le billet et révèle le nom caché de l’arrêt."
  ],
  [
    "節律共鳴",
    "Rhythm Resonance",
    "律動共鳴",
    "리듬 공명",
    "Resonancia rítmica",
    "Résonance rythmique"
  ],
  [
    "你能讓自己敲出的兩段微弱節拍短暫同步。",
    "Two faint tapping rhythms you create briefly synchronize.",
    "自分が打つ二つの弱いリズムを、一瞬そろえられる。",
    "스스로 두드린 두 약한 박자를 잠깐 맞출 수 있다.",
    "Dos ritmos suaves que produces se sincronizan brevemente.",
    "Deux faibles rythmes que vous produisez se synchronisent brièvement."
  ],
  [
    "只能影響近距離輕微振動，不能控制他人的想法或行動。",
    "Only faint nearby vibrations. No controlling thoughts or actions.",
    "近くの微かな振動だけ。他人の思考や行動は操れない。",
    "가까운 약한 진동만 가능하다. 타인의 생각이나 행동은 조종하지 못한다.",
    "Solo vibraciones leves y cercanas: no controla pensamientos ni acciones.",
    "Seulement de faibles vibrations proches, sans contrôler les pensées ni les actes."
  ],
  [
    "兩次敲擊的回音重合了。你分清站名廣播與車內回音，補齊最後一個字。",
    "Two tapping echoes align. You distinguish the announcement from its echo and recover the last syllable of the stop name.",
    "二つの音がそろい、放送と反響を聞き分けて駅名の最後の一音を補えた。",
    "두 두드림의 메아리가 겹친다. 안내와 반향을 구분해 정류장 이름의 마지막 글자를 채웠다.",
    "Los ecos se alinean. Distingues el anuncio del eco y completas la última sílaba de la parada.",
    "Les deux échos s’alignent. Vous distinguez l’annonce de sa réverbération et retrouvez la dernière syllabe de l’arrêt."
  ]
];
awakeningCatalog.push(...stationPool.map(s=>s.names));
awakeningCatalog.push(...[
  [
    "皇蛾效應 BUG｜六題覺醒",
    "The Moth Effect BUG | Six Choices",
    "皇蛾効果 BUG｜六つの選択",
    "황나방 효과 BUG | 여섯 번의 선택",
    "Efecto Polilla BUG | Seis decisiones",
    "L’Effet Papillon de nuit BUG | Six choix"
  ],
  [
    "你會在哪裡醒來，又會覺醒什麼能力？",
    "Where will you wake up, and what will awaken in you?",
    "どこで目覚め、どんな力が芽生える？",
    "어디서 깨어나 어떤 능력을 얻을까?",
    "¿Dónde despertarás y qué poder descubrirás?",
    "Où vous réveillerez-vous, et quel pouvoir naîtra ?"
  ],
  [
    "虛構遊戲場景",
    "Fictional game scene",
    "架空のゲーム場面",
    "가상의 게임 장면",
    "Escena ficticia del juego",
    "Scène fictive du jeu"
  ],
  [
    "原創像素場景",
    "Original pixel-art scene",
    "オリジナルのピクセル風景",
    "창작 픽셀 장면",
    "Escena original en píxeles",
    "Scène originale en pixels"
  ],
  [
    "六次選擇，",
    "Six choices,",
    "六つの選択、",
    "여섯 번의 선택,",
    "Seis decisiones,",
    "Six choix,"
  ],
  [
    "一項屬於這輪行動的微型能力。",
    "one micro-power shaped by your actions.",
    "今回の行動が、一つの小さな力に。",
    "이번 행동으로 결정되는 작은 능력 하나.",
    "un micropoder moldeado por tus actos.",
    "un micropouvoir façonné par vos actes."
  ],
  [
    "抽選地點 · 開始六題故事",
    "Draw a location · Begin six choices",
    "場所を抽選 · 六つの選択を始める",
    "장소 추첨 · 여섯 선택 시작",
    "Sortear lugar · Empezar seis decisiones",
    "Tirer un lieu · Commencer les six choix"
  ],
  [
    "先看地點與角色",
    "Preview location and character",
    "場所と人物を先に見る",
    "장소와 인물 먼저 보기",
    "Ver lugar y personaje primero",
    "Voir d’abord le lieu et le personnage"
  ],
  [
    "25個地點等機率抽選。六題、每題五個選項。出生地與本輪地點分開記錄。",
    "25 equally weighted locations. Six scenes, five choices each. Birthplace and starting location are separate.",
    "25地点を等確率で抽選。六つの場面に各五つの選択肢。出生地と今回の場所は別です。",
    "25개 장소 동일 확률 추첨. 여섯 장면마다 선택지 다섯 개. 출생지와 시작 장소는 별도입니다.",
    "25 lugares con la misma probabilidad. Seis escenas, cinco opciones cada una. Nacimiento y punto de inicio son distintos.",
    "25 lieux à chances égales. Six scènes, cinq choix chacune. Naissance et lieu de départ sont distincts."
  ],
  [
    "本輪任務",
    "Your mission",
    "今回の目標",
    "이번 목표",
    "Tu misión",
    "Votre mission"
  ],
  [
    "完成六次行動，核對目擊，決定合作或安全離開。",
    "Make six decisions. Compare accounts, cooperate or leave safely.",
    "六回行動し、目撃を照合。協力するか安全に去るか選ぼう。",
    "여섯 번 행동하고 목격담을 대조해 협력하거나 안전하게 떠나세요.",
    "Toma seis decisiones. Contrasta relatos, coopera o sal a salvo.",
    "Faites six choix. Recoupez les récits, coopérez ou partez en sécurité."
  ],
  [
    "你在抽到的地點醒來。六段事件屬於同一個故事，選項會改變路線、線索與回應；六題後判定 Level 0.1 能力，並可試用一次。",
    "Wake in your drawn location. Six connected scenes change with your route and decisions. After six choices, discover a Level 0.1 power and try it once.",
    "抽選された場所で目覚める。六場面は同じ物語で、選択により道筋と情報が変わる。最後にレベル0.1の力が芽生え、一度試せる。",
    "추첨된 장소에서 깨어납니다. 이어지는 여섯 장면은 선택에 따라 경로와 단서가 달라집니다. 마지막에 레벨 0.1 능력을 얻어 한 번 시험할 수 있습니다.",
    "Despierta en el lugar sorteado. Seis escenas conectadas cambian según tus decisiones. Al final descubres un poder de nivel 0.1 y puedes probarlo una vez.",
    "Réveillez-vous dans le lieu tiré. Six scènes liées évoluent selon vos choix. À la fin, découvrez un pouvoir de niveau 0.1 et essayez-le une fois."
  ],
  [
    "本輪地點為25站示範抽樣，出生地另用四地示範資料，不代表完整全球模擬或真實新聞。",
    "The starting pool has 25 demo locations; birthplace uses four separate examples. Not a complete world simulation or real news.",
    "開始地点は25地点の体験版抽選。出生地は別の4地点。完全な世界シミュレーションや実際のニュースではありません。",
    "시작 장소는 25곳 예시이며 출생지는 별도의 4곳 예시입니다. 완전한 세계 시뮬레이션이나 실제 뉴스가 아닙니다.",
    "El inicio usa 25 lugares de ejemplo y el nacimiento otros cuatro. No es una simulación mundial completa ni noticias reales.",
    "Le départ utilise 25 lieux de démonstration et la naissance quatre exemples distincts. Ni simulation mondiale complète ni actualité réelle."
  ],
  [
    "本輪抽選地點",
    "Drawn location",
    "今回の抽選地",
    "추첨 장소",
    "Lugar sorteado",
    "Lieu tiré"
  ],
  [
    "你將在這裡醒來",
    "This is where you wake up",
    "ここで目を覚ます",
    "여기서 깨어납니다",
    "Aquí despertarás",
    "C’est ici que vous vous réveillez"
  ],
  [
    "本輪地點",
    "Starting location",
    "今回の場所",
    "이번 장소",
    "Punto de inicio",
    "Lieu de départ"
  ],
  [
    "出生地與本輪地點分開抽選。六段事件連續推進，最後判定一項微型能力。",
    "Birthplace and starting location are drawn separately. Six connected scenes lead to one micro-power.",
    "出生地と今回の場所は別々に抽選。六場面を進み、一つの小さな力が決まります。",
    "출생지와 시작 장소는 별도로 추첨합니다. 이어지는 여섯 장면 뒤 작은 능력 하나가 결정됩니다.",
    "Nacimiento e inicio se sortean por separado. Seis escenas conectadas llevan a un micropoder.",
    "Naissance et départ sont tirés séparément. Six scènes liées mènent à un micropouvoir."
  ],
  [
    "進入六題故事",
    "Begin the six-scene story",
    "六場面の物語を始める",
    "여섯 장면 이야기 시작",
    "Empezar la historia de seis escenas",
    "Commencer l’histoire en six scènes"
  ],
  [
    "每題五個選項。六題結束前不揭露能力判定。",
    "Five choices per scene. Your power is revealed only after all six.",
    "各場面に五つの選択肢。力は六回の選択後に明かされます。",
    "장면마다 선택지 다섯 개. 여섯 선택이 끝난 뒤 능력이 공개됩니다.",
    "Cinco opciones por escena. El poder se revela al terminar las seis.",
    "Cinq choix par scène. Le pouvoir n’est révélé qu’après les six."
  ],
  [
    "第 ",
    "Step ",
    "第 ",
    "단계 ",
    "Paso ",
    "Étape "
  ],
  [
    " 題，共 6 題",
    " / 6",
    " 問／全6問",
    " / 6",
    " / 6",
    " / 6"
  ],
  [
    "你只能知道自己遇見的事件；其他地點的故事不會提前公開。",
    "You only know events you encounter. Other locations’ stories remain unrevealed.",
    "知るのは自分が出会った出来事だけ。他の場所の物語は先に明かされません。",
    "직접 마주친 사건만 알 수 있습니다. 다른 장소의 이야기는 미리 공개되지 않습니다.",
    "Solo conoces lo que encuentras. Las historias de otros lugares no se revelan antes de tiempo.",
    "Vous ne connaissez que les événements rencontrés. Les autres histoires restent inconnues."
  ],
  [
    "已完成 ",
    "Completed ",
    "完了 ",
    "완료 ",
    "Completadas ",
    "Actions terminées : "
  ],
  [
    " 次行動",
    " actions",
    " 回の行動",
    " 회 행동",
    " acciones",
    " actions"
  ],
  [
    "查看抽選地點",
    "View location pool",
    "抽選地点を見る",
    "추첨 장소 목록 보기",
    "Ver lugares del sorteo",
    "Voir les lieux du tirage"
  ],
  [
    "示範等機率抽選，不是人口配額。不同玩家仍可能抽到同一地點。",
    "Equal-weight demo draw, not population quotas. Players may draw the same location.",
    "人口比ではない等確率の体験版抽選です。他の人と同じ場所になる場合があります。",
    "인구 비례가 아닌 동일 확률 예시 추첨입니다. 다른 플레이어와 같은 장소가 나올 수 있습니다.",
    "Sorteo de ejemplo con probabilidades iguales, no cuotas demográficas. Puede repetirse un lugar.",
    "Tirage de démonstration à chances égales, sans quotas démographiques. Plusieurs joueurs peuvent obtenir le même lieu."
  ],
  [
    "六題完成",
    "Six choices complete",
    "六つの選択を完了",
    "여섯 선택 완료",
    "Seis decisiones completadas",
    "Six choix terminés"
  ],
  [
    "這是六次行動中反覆出現的策略，不是人格診斷。最高傾向出現 ",
    "This reflects strategies in six actions, not a personality diagnosis. The leading tendency appeared ",
    "六回の行動に表れた戦略で、人格診断ではありません。最も多い傾向は ",
    "여섯 행동에 나타난 전략이며 성격 진단이 아닙니다. 가장 많은 경향은 ",
    "Refleja estrategias de seis acciones, no un diagnóstico de personalidad. La tendencia principal apareció ",
    "Cela reflète six actions, pas un diagnostic de personnalité. La tendance dominante apparaît "
  ],
  [
    " 次；同分時優先參考最後一次行動。",
    " times; ties favor the last action.",
    " 回。同点なら最後の行動を優先します。",
    " 회. 동점이면 마지막 행동을 우선합니다.",
    " veces; en empate se prioriza la última acción.",
    " fois ; en cas d’égalité, la dernière action prime."
  ],
  [
    "試用你的微型能力",
    "Try your micro-power",
    "小さな力を試す",
    "작은 능력 시험하기",
    "Prueba tu micropoder",
    "Essayez votre micropouvoir"
  ],
  [
    "你手上有一張受潮、被折住的車票。先用一次能力，找出最後一個站名。",
    "Your ticket is damp and folded. Try your power once to uncover the stop name.",
    "手元の切符は湿って折れています。一度力を使い、駅名を確かめよう。",
    "표가 젖고 접혀 있습니다. 능력을 한 번 써서 정류장 이름을 확인하세요.",
    "Tu billete está húmedo y doblado. Prueba el poder para descubrir la parada.",
    "Votre billet est humide et plié. Essayez votre pouvoir pour découvrir le nom de l’arrêt."
  ],
  [
    "使用一次能力",
    "Use your power once",
    "一度だけ力を使う",
    "능력 한 번 사용",
    "Usar el poder una vez",
    "Utiliser le pouvoir une fois"
  ],
  [
    "能力已使用 · 能量 −4",
    "Power used · Energy −4",
    "使用済み · エネルギー −4",
    "능력 사용됨 · 에너지 −4",
    "Poder usado · Energía −4",
    "Pouvoir utilisé · Énergie −4"
  ],
  [
    "你開始看見：大家害怕的對象不同。你可以把目擊交給下一段故事，事情仍沒有全部解開。",
    "You begin to see that everyone fears someone different. Carry your observations forward; the mystery is not fully solved.",
    "皆が違う相手を怖がっていると気づき始めた。目撃は次へつながるが、謎はまだすべて解けていない。",
    "모두 두려워하는 대상이 다르다는 걸 알아간다. 목격담을 다음 이야기로 가져갈 수 있지만 전부 풀린 건 아니다.",
    "Empiezas a ver que cada persona teme a alguien distinto. Conserva tus observaciones; el misterio no está resuelto del todo.",
    "Vous comprenez que chacun craint quelqu’un d’autre. Gardez vos observations ; le mystère n’est pas entièrement résolu."
  ],
  [
    "初版為五種微型能力的規則判定。成長等級、帳號綁定與後續章節尚未實作。",
    "This demo matches five predefined micro-powers. Progression, account binding and later chapters are not implemented.",
    "体験版は五種類の小さな力を規則で判定します。成長・アカウント連携・続編は未実装です。",
    "예시 규칙으로 정해진 다섯 능력 중 하나를 고릅니다. 성장, 계정 연동, 후속 장은 아직 없습니다.",
    "La demo asigna uno de cinco micropoderes predefinidos. Progresión, cuentas y capítulos posteriores aún no están implementados.",
    "La démo attribue l’un de cinq micropouvoirs prédéfinis. Progression, comptes et chapitres suivants ne sont pas encore disponibles."
  ],
  [
    "你選擇回到日常，沒有替沒看見的事編造答案。",
    "You returned to everyday life without inventing answers to events you did not see.",
    "日常に戻り、見ていない出来事に答えを作らなかった。",
    "일상으로 돌아가 보지 못한 일의 답을 지어내지 않았다.",
    "Volviste a lo cotidiano sin inventar respuestas sobre lo que no viste.",
    "Vous retrouvez le quotidien sans inventer de réponses sur ce que vous n’avez pas vu."
  ],
  [
    "第一次覺醒",
    "First awakening",
    "最初の覚醒",
    "첫 각성",
    "Primer despertar",
    "Premier éveil"
  ],
  [
    "六次行動，留下了一種反覆出現的策略。",
    "Six actions revealed a recurring strategy.",
    "六回の行動に、一つの繰り返す戦略が表れた。",
    "여섯 행동에서 반복되는 전략이 나타났다.",
    "Seis acciones revelaron una estrategia recurrente.",
    "Six actions ont révélé une stratégie récurrente."
  ]
]);
awakeningCatalog.push(...[
  [
    "所有人物、影片與事件皆為虛構。",
    "All people, videos and events are fictional.",
    "人物・映像・出来事はすべて架空です。",
    "인물, 영상, 사건은 모두 허구입니다.",
    "Todas las personas, vídeos y sucesos son ficticios.",
    "Tous les personnages, vidéos et événements sont fictifs."
  ],
  [
    "本輪進度會清除；下次開始會重新抽選地點。",
    "This run will be cleared. A new location is drawn when you start again.",
    "今回の進行を消去し、次回は場所を引き直します。",
    "이번 진행이 삭제되고 다음 시작 때 장소가 다시 추첨됩니다.",
    "Se borrará esta partida. Al empezar otra se sorteará un nuevo lugar.",
    "Cette partie sera effacée. Un nouveau lieu sera tiré au prochain départ."
  ],
  [
    "這份存檔是巴黎前導。開始新旅程才會重新抽選地點。",
    "This save is the Paris prologue. Start a new story to draw a new location.",
    "この保存データはパリ序章です。新しい物語で場所を引き直せます。",
    "이 저장은 파리 프롤로그입니다. 새 이야기를 시작하면 장소를 다시 추첨합니다.",
    "Esta partida es el prólogo de París. Empieza otra para sortear un nuevo lugar.",
    "Cette sauvegarde est le prologue parisien. Commencez une nouvelle partie pour tirer un autre lieu."
  ]
]);
