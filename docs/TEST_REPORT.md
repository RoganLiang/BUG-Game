# 測試紀錄（2026-11-10）

|命令／項目|結果|範圍與限制|
|---|---|---|
|npm run build|PASS|產生兩個自包含HTML|
|npm run check|PASS|來源與bundle JS語法、靜態HTML唯一ID／引用、CSS括號平衡；不是完整W3C驗證器|
|npm test|PASS，7組|枚舉32條有效路徑；節點／effects／條件、時間、不同結果、出生現居、投影隔離、存檔與錯誤|
|python tests/browser.py|PASS|Chromium 156.0.8078.79，localhost，自動行動模擬；報告artifacts/browser-report.json|
|寬度320／375／390／430／768／1440|PASS|劇情、紀錄、觀測分頁無水平溢出|
|兩條分支、條件按鈕、已知情報／鎖定城市|PASS|查證比對與傳播推測分支有不同文字與紀錄|
|重新載入／繼續／確認重設／取消／新局確認|PASS|含本機資料清除後reload|
|鍵盤Enter、CRT開關、減少動態偏好|PASS|基本操作驗證，非完整輔助科技稽核|
|地圖44px點擊區、CSSOM、console/page errors|PASS|無重大JS或console錯誤；檢視手機截圖|
|file://直接開啟|未完成|受管理Chromium政策ERR_BLOCKED_BY_ADMINISTRATOR阻擋；改用localhost|
|iOS／Android實體外部手機|未驗證|不可以模擬測試替代|
|約5分鐘遊玩時間|未做真人計時|閱讀探索目標，無倒數計時|

修正過程：有效路徑預期數由誤計33改為32；瀏覽器測出損毀JSON被錯誤標成無法讀取儲存，已分開處理並重跑通過。先前沙箱socket限制導致瀏覽器啟動失敗；權限環境更新後已成功執行。

GitHub CI與公開HTTPS驗證另見DELIVERY.md，不能用本機PASS代替遠端執行證據。

## 公開HTTPS驗證（2026-11-11，臺北時間）

- 04:26:55：正式首頁及BUG_Game.html均HTTP 200；下載內容SHA-256與本機dist一致。證據：artifacts/public/http-report.json。
- 04:26:58：設定BUG_BASE_URL=https://roganliang.github.io/BUG-Game，執行同一完整瀏覽器測試，PASS。涵蓋首頁、demo抽選、出生與現居、兩條分支、條件選項、訊息／城市解鎖、存檔恢復、重開、CRT、鍵盤、320–1440px與無console/page errors。
- 瀏覽器：Chromium 156.0.8078.79，行動模擬；外部實體裝置仍未驗證。
- 發布SHA：728181b789eca27127fdc8eec8bd81f948ef5ef8；同一SHA的GitHub CI與Pages部署都成功，連結見DELIVERY.md。

## 0.3 開場與多語（2026-11-11，臺北）

- `npm run build`、`npm run check`、`npm test`通過，現有9組測試包含32路徑、六語字典欄位／劇情／資訊完整性、英文／西文／法文無中文殘留。
- `npm run test:browser`通過原有單人完整流程，主入口可直接進入，出生抽選為可選。
- `npm run test:locales`逐一驗證六語、320–1440px、存檔不因切語言而變動、切語言後重載／繼續、片段播放／暫停／拖動、A/B字幕、重設與無console錯誤。證據在artifacts/locales-report.json及home-*.png。
- 實際測出時間軸讀值被暫停回寫覆蓋，已修正；截圖也發現英文頁首品牌換行，已修正並增加品牌不超出頁首的檢查。
- 非中文翻譯未做母語校閱，仍屬初版；趣味性未做真人比較測試。
- 公開版是否已部署0.3，以DELIVERY.md對應SHA為準，不能用本機通過代替上線。

## 0.3公開驗證（2026-11-11，臺北）

發布SHA de325997ad64c9b91d3dc618c25c4b17927429e1，同一提交GitHub CI 42924395693及Pages 42924768674均success。

- 07:37:25：首頁與BUG_Game.html皆200，版本0.3.0且內容與dist相同；雜湊見DELIVERY.md。
- 07:37:30：對正式HTTPS執行tests/browser.py，PASS。
- 07:37:51：對正式HTTPS執行tests/locales.py，六語均PASS；切語言不改存檔、影像時間軸、播放暫停、32路徑相關的既有流程與320–1440px檢查均依上述測試範圍完成。
- 機器報告與截圖：artifacts/public-v0.3/。真實手機、母語校閱及真人趣味性測試未完成。
