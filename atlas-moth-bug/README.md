# Atlas Moth BUG · 0.6.0-alpha

## 啟動

需要 Python 3.12+。在本目錄執行：

```sh
python -m http.server 4180 --bind 0.0.0.0
```

開啟 http://127.0.0.1:4180/ 。所有路徑為相對路徑，不使用 npm、CDN、遠端字型或外部音效。開發檔使用 ES modules，請透過 HTTP 開啟。

## 檢查與建置

需要 Node.js 24+。在上層儲存庫執行：

```sh
node --test atlas-moth-bug/tests/engine.test.js
node atlas-moth-bug/tests/check.js
node atlas-moth-bug/build.js
```

成品在 `atlas-moth-bug/dist/index.html`，為內嵌 CSS／JS 的單檔。另輸出 `scenarios_200.json`、完整模組檔，皆可下載交接。

瀏覽器測試需現有專案的 Python Playwright；先啟動上述伺服器，再執行：

```sh
python atlas-moth-bug/tests/browser.py
```

以 `ATLAS_BASE_URL` 指定預覽網址，`ATLAS_ARTIFACT_DIR` 指定測試產物目錄。

## 執行範圍

單人、五節點程式模擬，沒有真人連線、帳號、遠端分析或生成式AI服務。資料輸入與跨輪紀錄只存在瀏覽器；可用虛構內容或留白。版本初稿以繁體中文提供，既有六語版本另行保留。新存檔鍵獨立，不覆蓋舊版。

資料庫包含200組、400個方向實例，其中20組種子、180組程序生成。可執行數量不代表已完成400篇人工精修劇本或真人平衡測試。

聲音預設關閉；只能由使用者點擊啟用。效果預設關閉，遵守減少動態偏好。美術資產待作者提供，未生成新圖片。所有故事為虛構，畫面沒有實際在線人數。

## 發布

目前為審核分支，未經指定的外部審核者簽核前，不合併 main 或覆蓋公開 Pages。以 PR 與交付清單中的實際提交、測試和預覽狀態為準。本目錄可獨立複製成靜態網站；GitHub Pages 發布仍為手動程序。
