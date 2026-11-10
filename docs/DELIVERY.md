# 交付狀態（2026-11-10）

|狀態|結論|可核對證據|
|---|---|---|
|原始碼建立|完成|src/、web/與scripts/；初版快照b9e95f9|
|功能實作|完成0.2.0 demo|首頁、出生／現居、三節點、32路徑、訊息紀錄、四城訊號、結尾與重設|
|本機測試|通過|TEST_REPORT.md、artifacts/browser-report.json與四張手機截圖|
|本機Git|已提交|feat/paris-information-demo；功能提交166f0f3，後續交接文件提交見git log|
|GitHub提交|未完成|尚無可用遊戲remote；建立repo被GitHub API拒絕|
|遠端CI|未執行|ci.yml已建立，尚未推送|
|部署建立|未完成|deploy.yml已建立，尚未觸發|
|公開上線|未完成|沒有已驗證HTTPS網址，不猜測Pages網址|
|外部實體裝置|未驗證|已完成行動Chromium模擬，不能替代真實手機|

## 授權與實際權限

使用者已明確授權公開`RoganLiang/BUG-Game`、推送、免費CI與GitHub Pages公開試玩（含原始碼）。不是等待使用者重新同意公開。

但目前GitHub integration不支援建立儲存庫：

- `gh repo create RoganLiang/BUG-Game --public ...`：GraphQL `Resource not accessible by integration (createRepository)`。
- REST `POST /user/repos`：HTTP 403 `Resource not accessible by integration`。
- 讀取installation權限顯示repository_selection=all，具備contents/workflows/actions/pull_requests寫入，缺少administration/pages管理權限。

需要由帳號擁有者建立公開空白BUG-Game（不初始化README、License或gitignore），並在Settings → Pages將Source設為GitHub Actions。空repo尚無Pages選項時可先推送，再設定。這是補足平台存取權，不是重新請求同一發布授權。不得將成果推到其他作品以繞過限制。

建立後最小接續步驟：驗證repo與權限 → 新增正確remote → 推送保留快照與功能分支 → PR／CI → main合併 → 手動deploy → 取得平台回傳的實際URL並做外部HTTP及行動瀏覽器驗證 → 補記本文件。

## 可審核預覽

本機伺服器：http://127.0.0.1:4173/（僅執行環境本機可用，非公開網址）。成品`dist/BUG_Game.html`自包含；受管Chromium封鎖file://，已用localhost測試。完整原始碼／建置成品與Git bundle另行打包供下載。
