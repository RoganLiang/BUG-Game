# 《皇蛾效應》BUG 工程交接

## 使命與完成定義
交付手機直式可玩的原創資訊不對稱敘事。保留既有成果，不得重置原作、以重構取代可玩功能，或把程式碼提交當作已部署。分別核對原始碼、功能、測試、GitHub、部署、公開可用性與外部真機驗證；沒有證據不得寫完成。

## 設定
- 繁體中文（臺灣）；所有人物與危機皆虛構。
- 示範角色30歲，出生韓國首爾麻浦區，現居法國巴黎第11區。出生地與居住地永遠分欄，重抽不改現居。
- 2026-11-01：08:17的17秒矛盾影片、08:29韓國朋友訊息、08:41巴黎窗外觀察。
- 示範四地出生抽樣各25%；巴黎、首爾、東京、紐約只呈現玩家可取得訊號。
- 194+8=202單位、3195+63=3258配額為待逐筆核對規劃，不能冒稱已完整實作。

## 技術與資料邊界
Node.js 24+、Python 3.12+，原生 HTML/CSS/JS，無 npm 外部相依、無後端或付費服務。程式模組放 src，入口模板與樣式放 web，單檔成品由 build 產生。資料節點必須有穩定ID；UI不可直接取得worldState。`playerView`白名單投影是UI唯一的狀態入口；InformationItem只從knownFacts取出，不能從訊號推斷全球真相。這是敘事資訊隔離，不是保密系統；靜態原始碼可被閱讀。

GameState包含版本、runId、目前節點／時間、出生／現居、旗標、knownFacts、rumors、relationships、decisionHistory、visibleSignals、stats以及內部worldState。StoryNode與Choice的前置條件、effects、nextNodeId由engine統一處理。實際影片起因保留undetermined，不以虛構全知答案冒充完整世界模擬。

## 慣例與測試
保持職責單一，新增模組必須解決實際問題。改動前讀README、DECISIONS、TASKS及git status。更新劇情時同步檢查連通性、所有可走路徑、情報曝光與時間單調性；不得只測按鈕變色。

```sh
npm run build
npm run check
npm test
npm start
# 另一個終端，需Playwright與Chromium：
npm run test:browser
```

新增重大變更走獨立分支／PR；不force push、不改寫或刪除舊提交。不要提交token、個資、私人素材或其他作品。操作前檢查git diff與未追蹤檔案。

## 授權與部署
2026-11-10使用者明確授權公開RoganLiang/BUG-Game、推送、免費CI、GitHub Pages公開試玩（包含原始碼）。同一範圍不重問。這不授權付費方案、買網域、公開私人素材或修改其他作品。CI與發布分離：推送／PR只測試，公開部署workflow必須手動觸發，發布前先確認對應提交CI通過。新增範圍再確認。

## 0.3介面與語言
遊戲介面版本0.3.0，但GAME_VERSION=0.2.0是保留的存檔資料格式，不要因改文案就改動造成舊存檔失效。新增語言使用src/i18n/catalog.js六欄（繁中、英、日、韓、西、法），src/i18n/runtime.js只翻譯顯示文字，不改canonical故事ID、條件或決策標籤。翻譯必須覆蓋所有節點／選項／資訊內容並跑npm run test:locales。非中文仍待母語校閱。

## 後續
202單位資料、更多章節、持續世界／多人屬後續里程碑，不阻塞現有MVP。未做實體手機測試不可稱外部裝置已驗證。每次回報用RESULT、CHANGED FILES、TESTS、GIT、PREVIEW/DEPLOY、BLOCKERS、NEXT，附實際證據。
