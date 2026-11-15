# 《皇蛾效應》BUG

**0.4.0 · 原創單人敘事試玩 · 繁體中文（臺灣）**

▶ [立即免費試玩](https://roganliang.github.io/BUG-Game/)

你在陌生城市的公車上醒來，車票與站名卻對不上。六次行動，追查重複出現的人，或選擇安全離開；最後依反覆採取的策略獲得一項有代價的 Level 0.1 微型能力。所有人物與事件皆虛構。

## 本機試玩

需要Node.js 24+及Python 3.12+；遊戲本身沒有外部套件、帳號、後端或付費服務。

```sh
npm run build
npm start
```

開啟 http://127.0.0.1:4173/ 。`dist/BUG_Game.html`是內含JS、CSS與像素畫面的單檔成品；可複製下載，不依賴CDN。受管瀏覽器可能禁止file://，此時使用上述本機伺服器。單檔直接開啟未在目前受管Chromium驗證，已驗證localhost方式。

## 玩法與範圍

1. 點「抽選地點・開始六題故事」；25個起點等權抽選，獨立抽選可能重複，不包含巴黎。出生地與本輪所在地獨立。
2. 連續六題，每題五個有效選項；可選車上、站牌、圖書館或回家方向。訊息紀錄保存已見內容，觀測台只顯示已知訊號。
3. 完成六題才揭曉 Level 0.1 能力：五種預寫能力按行為累計決定，同分採最近一次屬於最高分策略的選擇。可試用一次，消耗4點精力。
4. 本機自動存檔可繼續；重開需確認。舊巴黎存檔仍可繼續；要玩新版請開始新旅程，不會自動把舊角色搬到別城。

25處共享公車覺醒主線、六種開場事件及四種路線，不是25套完整長篇故事；尚無自由輸入推理、多人、帳號綁定、能力進化或後續章節。六語為初稿，未經母語校閱。約5分鐘為閱讀目標，未經真人計時。完整202單位／3258配額未實作。存檔只在目前瀏覽器。

## 檢查與測試

```sh
npm run build
npm run check
npm test
# 先啟動npm start，另一個終端執行：
python -m pip install -r tests/requirements.txt
python -m playwright install chromium
npm run test:browser
npm run test:locales
npm run test:awakening
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

2026-11-10使用者已授權公開`RoganLiang/BUG-Game`、推送、免費CI及GitHub Pages公開試玩。推送不自動發布，只有手動deploy工作流程會發布通過CI的提交。0.4.0已透過PR #6合併，發布提交615424a通過CI後手動部署GitHub Pages成功；公開HTTPS與25起點六題流程、六語行動Chromium驗證通過。實際提交SHA、發布時間與證據見[交付證據](docs/DELIVERY.md)。實體手機尚未驗證。

尚未宣告軟體授權條款；公開可讀不自動等於允許任意再授權。

## 自願贊助

遊戲維持完整免費。使用者已確認未來可提供外部小額自願支持；目前未開通金流，沒有收款網址，不影響任何內容。正式平台與可提領地區確認後再接入。

## 0.3.0：開場與六語

Language選單支援繁體中文、English、日本語、한국어、Español、Français，涵蓋劇情、選項、角色資料、訊息與世界訊號。其他語言為初版翻譯，尚未母語校閱。語言設定使用獨立bug-language儲存鍵；遊戲沿用0.2.0的資料格式和moth-effect-bug-v2儲存鍵，切語言與更新介面不刪進度。

新增`npm run test:locales`，測試六語流程、版面、時間軸／播放暫停、語言切換與存檔。`BUG_BASE_URL`可指向公開網址；`BUG_ARTIFACT_DIR`指定證據目錄。

已實際查看[80億分之1](https://1in8b.life/zh/)的首頁、出生揭曉及遊玩畫面，參考進入情境、角色與回饋的節奏；沒有複製其程式碼、文案、美術或統計資料。詳見[參考紀錄](docs/REFERENCE_1IN8B.md)。本作仍是三節點、32路徑的資訊不對稱demo，不是完整人生模擬。

## 0.4.0 交接

城市清單與原作規則見 [新章規格](docs/AWAKENING.md)。新章存檔版本0.4.0；舊巴黎格式0.2.0仍支援，儲存鍵維持`moth-effect-bug-v2`。下方0.3章節保留為歷史紀錄，現行新遊戲以本節為準。發布證據見 [DELIVERY](docs/DELIVERY.md)。

Supabase獨立免費專案已建立，但尚未接入遊戲：目前沒有遠端選項統計、即時在線數或遠端回饋表單，不宣稱已收到玩家資料。
