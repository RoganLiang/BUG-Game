# 0.5.0 本機測試 — 2026-11-15

實際通過：npm run build、npm run check、npm test（18組）、npm run test:browser、npm run test:locales、npm run test:awakening、npm run test:land。

新增25落點×5能力的125條成功重建流程，包含已試用能力的舊檔；地理建造限制、有限資源、成本、迷霧投影、存檔重播／竄改防護、時間、暴雨地勢差異、三種環境事件的兩種回應、旅人與18輪未完成結果。原有625組六題流程與巴黎32條路徑仍通過。

新沙盤瀏覽器測試通過六語、44px地塊、方向鍵、320–1440px無水平溢出、資源成本、能力冷卻、事件、輪中與結尾重載、重設及無page errors。實際JSON與截圖：artifacts/v05-local/。已目視檢視手機建造地圖。

未驗證：實體手機、母語校閱、真人趣味性／平衡性、多人負載。沒有遠端統計。

---

# 0.4.0 本機測試 — 2026-11-15

實際通過：npm run build、npm run check、npm test（14組）、npm run test:browser、npm run test:locales、npm run test:awakening。

邏輯涵蓋25起點×5初始路線選項×5主要策略共625次六題流程，不代表窮舉全部5^6×25路徑。檢查六題五選項、狀態不可變、過期點擊、存檔重播、五能力、四路線、時間、出生／現居獨立、能力使用一次且扣4精力、未解鎖情報。

瀏覽器涵蓋25起點、六語、途中重載、舊巴黎存檔、320/390/430/768/1440px無水平溢出與console errors。artifacts/awakening-report.json為實際結果；browser-report與locales-report保留舊章回歸測試。已目視確認東京第一題手機截圖。

未驗證：實體手機、母語校閱、真人閱讀時間、趣味性、多人負載。遠端統計未接入。

公開網址驗證：artifacts/public-v0.4/，HTTP逐位元組比對、新章25起點與六語、舊章browser/locales均PASS（2026-11-15 18:04，臺北）。發布SHA與工作流程見DELIVERY.md。
