# 《皇蛾效應》BUG

**0.3.0 · 原創單人敘事試玩 · 繁體中文（臺灣）**

▶ [立即免費試玩](https://roganliang.github.io/BUG-Game/)

一段17秒影片，一位韓國朋友，一扇巴黎的窗。查證、聯絡、觀察、忽略或傳播，改變你取得的情報與訊息擴散。所有人物與危機皆虛構，城市訊號不等於真實新聞。

## 本機試玩

需要Node.js 24+及Python 3.12+；遊戲本身沒有外部套件、帳號、後端或付費服務。

```sh
npm run build
npm start
```

開啟 http://127.0.0.1:4173/ 。`dist/BUG_Game.html`是內含JS、CSS與像素畫面的單檔成品；可複製下載，不依賴CDN。受管瀏覽器可能禁止file://，此時使用上述本機伺服器。單檔直接開啟未在目前受管Chromium驗證，已驗證localhost方式。

## 玩法與範圍

1. 在首頁播放、暫停或拖動17秒虛構影像；切換A／B版本比對時間與地點。點「打開訊息」直接以30歲、出生首爾麻浦區、現居巴黎第11區的示範角色進入事件。也可先抽選角色出生地；重抽不覆蓋現居。
2. 閱讀2026-11-01的08:17／08:29／08:41三段劇情；每次選擇有時間、資訊、數值或關係／擴散效果。
3. 從訊息紀錄查看來源、觀察／聲稱時間、證據類型與可信狀態；從全球觀測查看巴黎、首爾、東京、紐約已解鎖訊號。
4. 到結尾回顧本輪差異，或確認重設後走另一條分支。首頁可以繼續本機存檔。

32條有效路徑，設計供約5分鐘閱讀探索，未做真人計時驗證。鍵盤Tab移動、Enter／空白鍵選擇；不自動播放聲音。CRT預設關閉，可勾選，尊重減少動態偏好。

四地出生各25%僅為demo，不是完整全球抽樣。202單位／3258配額仍待逐筆核對。尚無即時新聞、全球真相推演、多人或後續章節。存檔只在當前瀏覽器；清除網站資料會遺失。

## 檢查與測試

```sh
npm run build
npm run check
npm test
# 先啟動npm start，另一個終端執行：
python -m pip install -r tests/requirements.txt
python -m playwright install chromium
npm run test:browser
```

瀏覽器測試自動使用系統`/usr/bin/chromium`（如有）或Playwright安裝的Chromium，可用`BUG_CHROMIUM_PATH`指定。測試產出在artifacts/，包含手機截圖與JSON證據。CI執行同一套檢查並上傳測試產物。測試涵蓋32路徑、圖形連通、條件、effects、時間、出生／現居、隱藏情報、存檔、重開、鍵盤、320～1440px版面及console errors。

## 結構與交接

- `src/story/nodes.js`：故事節點與資訊項目。
- `src/game/`：狀態、條件／effects、決策重播與玩家投影。
- `src/world/`：demo出生地、城市及可見訊號。
- `src/storage/`、`src/ui/`、`src/main.js`：存檔、渲染、原創程序像素畫／互動影像重建與互動。
- `web/`、`scripts/`：HTML模板、樣式與單檔建置／檢查。
- `tests/`、`.github/workflows/`：測試、CI與獨立手動發布。
- [AGENTS.md](AGENTS.md)、[DECISIONS.md](DECISIONS.md)、[CHANGELOG.md](CHANGELOG.md)、[TASKS.md](TASKS.md)：後續工作依據。

初始工作區與可存取儲存庫的預設分支未找到原版BUG_Game.html／bug-game-mvp；這是新實作，不是舊作還原。0.1快照保留於提交b9e95f9，0.2依最新交接規格更新，未修改其他作品。參考[Yazi](https://github.com/sxyazi/yazi)的模組職責、測試／發布分離與文件方式，沒有複製其程式碼或美術。

## GitHub／發布狀態

2026-11-10使用者已授權公開`RoganLiang/BUG-Game`、推送、免費CI及GitHub Pages公開試玩。推送不自動發布，只有手動deploy工作流程會發布通過CI的提交。原始碼已推送至[RoganLiang/BUG-Game](https://github.com/RoganLiang/BUG-Game)，PR #1／#2與CI已完成；GitHub Pages已於2026-11-11 04:26（臺北時間）成功發布，公開HTTPS與行動Chromium流程驗證通過。實際提交SHA、HTTPS網址、部署成功及外部驗證狀態，以[交付證據](docs/DELIVERY.md)為準；授權不代表已上線。

尚未宣告軟體授權條款；公開可讀不自動等於允許任意再授權。

## 自願贊助

遊戲維持完整免費。使用者已確認未來可提供外部小額自願支持；目前未開通金流，沒有收款網址，不影響任何內容。正式平台與可提領地區確認後再接入。

## 0.3.0：開場與六語

Language選單支援繁體中文、English、日本語、한국어、Español、Français，涵蓋劇情、選項、角色資料、訊息與世界訊號。其他語言為初版翻譯，尚未母語校閱。語言設定使用獨立bug-language儲存鍵；遊戲沿用0.2.0的資料格式和moth-effect-bug-v2儲存鍵，切語言與更新介面不刪進度。

新增`npm run test:locales`，測試六語流程、版面、時間軸／播放暫停、語言切換與存檔。`BUG_BASE_URL`可指向公開網址；`BUG_ARTIFACT_DIR`指定證據目錄。

已實際查看[80億分之1](https://1in8b.life/zh/)的首頁、出生揭曉及遊玩畫面，參考進入情境、角色與回饋的節奏；沒有複製其程式碼、文案、美術或統計資料。詳見[參考紀錄](docs/REFERENCE_1IN8B.md)。本作仍是三節點、32路徑的資訊不對稱demo，不是完整人生模擬。
