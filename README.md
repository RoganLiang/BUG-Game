# 皇蛾效應 / BUG

手機直式 8-bit 風格互動敘事 MVP 0.1。四個等機率出生地、三段巴黎前導、八條選擇路徑、四城市全球事件觀測台。每次選擇會更新角色數值與指定城市的風險，並在本機儲存進度。事件與劇情均為新撰寫的虛構內容，非即時資料。

## 執行

需要 Node.js 18+ 與 Python 3，不需安裝 npm 套件。

```sh
npm run build
npm test
npm start
```

開啟 http://localhost:4173 。也可直接開啟 `dist/BUG_Game.html`，建置後是無外部依賴的單一檔案；瀏覽器禁止儲存時會明確提示，仍可遊玩。

瀏覽器整合測試需 Python Playwright 與 `/usr/bin/chromium`；先啟動伺服器，再執行 `python tests/browser.py`。截圖存放於 `artifacts/`。

## 結構

- `web/game.js`：出生地、劇情、事件、不可變狀態轉換、重播驗證存檔。
- `web/app.js`：畫面、互動、本機儲存及原創程序化像素插畫。
- `web/style.css`：直式響應版面、鍵盤焦點、減少動態效果設定。
- `scripts/build.js`：產生單檔 HTML，可離線開啟。
- `tests/`：八條劇情路徑、數值與事件變化、損毀存檔及瀏覽器整合測試。

## 原始碼查找紀錄（2026-11-07）

工作區初始沒有遊戲原始碼。GitHub 連線列出兩個可存取儲存庫，讀取預設分支的遞迴檔案樹（均未截斷）：

- `RoganLiang/wpicccc`，HEAD `c8efe88c240f0378d9e900ebe81afc2af6861f05`，內容為 `xingdian-tu`。
- `RoganLiang/RG-AI-Research-Lab`，HEAD `10c7d2b599e2e840475b24e5ee0e41d3f6b19426`，內容為研究文件與測試。

兩者均未找到 `BUG_Game.html` 或 `bug-game-mvp`。此結論限於可存取儲存庫的預設分支與目前工作區，不代表其他分支、歷史或帳號中不存在。本專案依需求獨立重建，未修改上述儲存庫或星靛圖。

## 參考與限制

依使用者提供的 [Yazi](https://github.com/sxyazi/yazi)，閱讀其 README 與根目錄，參考職責分離、清楚的操作回饋、版本狀態與使用文件；沒有複製其程式碼或美術。此遊戲使用輕量純 JavaScript，無須移植 Rust 或終端檔案管理架構。

目前完成巴黎前導；全球事件為固定模擬，尚無後端、多人同步、即時新聞與後續章節。存檔僅在當前瀏覽器，清除網站資料會遺失。未公開部署、未推送遠端；公開部署須取得使用者授權。
