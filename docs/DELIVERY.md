# 交付狀態（2026-11-11，Asia/Taipei）

**公開試玩：https://roganliang.github.io/BUG-Game/**

|狀態|結論|可核對證據|
|---|---|---|
|原始碼建立|完成|src/、web/、scripts/；初版快照b9e95f9保留|
|功能實作|完成0.2.0 demo|首頁、出生／現居、三節點、32路徑、訊息紀錄、四城市、結尾與重設|
|本機測試|通過|TEST_REPORT.md、artifacts/browser-report.json與手機截圖|
|GitHub提交|已推送並合併|公開[RoganLiang/BUG-Game](https://github.com/RoganLiang/BUG-Game)；PR #1／#2；發布SHA見下方|
|遠端CI|通過發布同一提交|[CI 42879644487](https://github.com/RoganLiang/BUG-Game/actions/runs/42879644487)|
|部署建立|成功|[Deploy 42895246674](https://github.com/RoganLiang/BUG-Game/actions/runs/42895246674)，GitHub Pages|
|公開上線|已驗證|首頁與BUG_Game.html皆HTTP 200，內容SHA-256與本機建置一致|
|公開行動瀏覽器模擬|通過|artifacts/public/browser-report.json；兩分支、紀錄、觀測、存檔、重開、320–1440px及無console errors|
|外部實體裝置|未驗證|模擬不能替代iOS／Android真機；仍需真人測試|

## 發布證據

- 發布提交：`728181b789eca27127fdc8eec8bd81f948ef5ef8`。
- 平台：免費GitHub Pages，build_type=workflow，HTTPS強制開啟。
- 部署工作流程：https://github.com/RoganLiang/BUG-Game/actions/runs/42895246674 。build與deploy均success；先確認同一SHA的CI成功才上傳。
- Deployment ID：7693384366，environment=github-pages，state=success。
- 部署成功時間：2026-11-11 04:26:35（Asia/Taipei；GitHub原始紀錄2026-11-10T20:26:35Z）。
- 平台回傳正式URL：https://roganliang.github.io/BUG-Game/ ，不是猜測網址。
- 公開HTTP檢查：2026-11-11 04:26:55（臺北）；首頁與`BUG_Game.html`均200且一致。
- 成品SHA-256：`003f807f84a97c45a33d3befbbe51a148358141141d8052e291ebf0f390c9748`。
- 公開瀏覽器測試：2026-11-11 04:26:58（臺北），Chromium 156.0.8078.79，行動模擬PASS；證據及截圖在artifacts/public/。

後續僅更新README與交付證據的文件提交，不會自動覆蓋此已發布版本。公開遊戲對應上述SHA；推送／PR只測試，重新發布仍須手動workflow_dispatch。

## 權限處理歷史（已解除發布阻塞）

使用者已明確授權公開BUG-Game、推送、免費CI與GitHub Pages公開試玩，無需再次同意。初始GitHub integration無法建立repo或首次啟用Pages，曾回覆HTTP 403。帳號擁有者建立獨立repo，之後將Pages Source設為GitHub Actions，工具已讀取確認。現已完成推送、PR、CI、手動部署及公開驗證，沒有借用或修改其他作品、沒有付費服務。

## 限制與後續

- 首爾麻浦區固定示範及四地等權出生demo，不是完整全球抽樣。
- 202單位／3258配額、更多章節與多人仍未實作。
- 約5分鐘為閱讀探索目標，尚未真人計時；實體手機尚未驗證。
- 遊戲維持免費；自願贊助方向已確認，但尚無正式收款網址或金流帳號，未開通贊助。
- 本機可用`npm run build`與`npm start`。受管瀏覽器封鎖file://，單檔離線直接開啟仍未在該環境驗證。
