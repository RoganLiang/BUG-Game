# 最新交付：0.3.0（2026-11-11，Asia/Taipei）

**試玩：https://roganliang.github.io/BUG-Game/**

|狀態|結論|證據|
|---|---|---|
|原始碼／功能|已建立並推送|PR #4，互動17秒影像、直接開始、可選出生設定、六語；仍為三節點32路徑|
|本機測試|PASS|build、check、9組邏輯／翻譯檢查、完整流程、六語瀏覽器測試|
|發布同一SHA的CI|success|[42924395693](https://github.com/RoganLiang/BUG-Game/actions/runs/42924395693)|
|GitHub Pages部署|success|[42924768674](https://github.com/RoganLiang/BUG-Game/actions/runs/42924768674)，Deployment ID 7697297639|
|公開HTTPS|已驗證|首頁與BUG_Game.html皆200，與dist成品逐位元組一致，UI版本0.3.0|
|公開瀏覽器流程|PASS|artifacts/public-v0.3/browser-report.json，兩分支、訊息、觀測、存檔、重設等|
|公開六語流程|PASS|artifacts/public-v0.3/locales-report.json；繁中／英／日／韓／西／法；切語言不改存檔、重載、影像控制、320–1440px|
|外部真機／母語校閱|未驗證|Chromium行動模擬不能取代真人與母語玩家|
|管理統計／贊助|尚未啟用|沒有在線人數、留存／轉換資料或金流；未建立Supabase project或付費服務|

發布SHA：`de325997ad64c9b91d3dc618c25c4b17927429e1`。成功時間：2026-11-11 **07:36:58**（臺北；原始2026-11-10T23:36:58Z）。

正式URL由部署API回傳，未猜測：https://roganliang.github.io/BUG-Game/ 。HTTP檢查07:37:25、完整流程07:37:30、六語流程07:37:51（臺北）皆通過。

成品SHA-256：`b970966756bfe6241f6db2fd63da28b50a863b33791ed2434acaa3743c24420a`。證據與十張截圖存於artifacts/public-v0.3/。

語言與遊戲存檔分開，既有0.2資料格式與儲存鍵維持不變。非中文為初版翻譯；趣味性尚未做真人對照測試。已實際查看使用者提供的1in8b.life首頁、出生揭曉與遊玩畫面，具體借鏡與界線見REFERENCE_1IN8B.md。

下方保留首次0.2發布歷史。後續只更新文件的提交不會自動覆蓋已發布的0.3；公開版對應上述SHA。

---

# 0.2首次交付歷史（2026-11-11，Asia/Taipei）

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
