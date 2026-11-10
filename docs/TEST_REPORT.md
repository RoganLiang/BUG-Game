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
