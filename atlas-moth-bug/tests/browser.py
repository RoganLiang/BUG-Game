"""Mobile-first functional checks of the author-review prototype, no real players."""
import json,os,re
from pathlib import Path
from datetime import datetime,timezone
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
base=os.environ.get('ATLAS_BASE_URL','http://127.0.0.1:4180').rstrip('/')
out=Path(os.environ.get('ATLAS_ARTIFACT_DIR',str(root/'artifacts')));out.mkdir(parents=True,exist_ok=True)
errors=[];external=[]
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=os.environ.get('BUG_CHROMIUM_PATH') or ('/usr/bin/chromium' if Path('/usr/bin/chromium').exists() else None),args=['--no-sandbox'])
    ctx=browser.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,reduced_motion='reduce')
    page=ctx.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
    page.on('request',lambda r:external.append(r.url) if not r.url.startswith(base) and not r.url.startswith('data:') else None)
    page.goto(base+'/');initial_scripts=page.locator('script:not([src])').count();assert page.locator('#audio-toggle').get_attribute('aria-pressed')=='false'
    page.screenshot(path=str(out/'atlas-home.png'),full_page=True)
    page.locator('#audio-toggle').click();page.wait_for_function('document.querySelector("#audio-toggle").getAttribute("aria-pressed")==="true"');page.locator('#audio-toggle').click();assert page.locator('#audio-toggle').get_attribute('aria-pressed')=='false'
    page.locator('#effects').check()
    page.locator('#daily').fill('銀行櫃檯');page.locator('#habit').fill('點鈔很快');page.locator('#avoid').fill('欠債');page.locator('#survey button').click()
    assert page.locator('.choice').count()==3
    assert '高雄' in page.locator('#city').inner_text()
    order=page.locator('.choice').evaluate_all('(els)=>els.map(e=>e.dataset.choice)');clock=page.locator('#clock').inner_text();page.wait_for_function('(old)=>document.querySelector("#clock").textContent!==old',arg=clock,timeout=3500)
    assert page.locator('.choice').evaluate_all('(els)=>els.map(e=>e.dataset.choice)')==order
    assert page.locator('#clock').inner_text()!=clock
    def choose_good():
        cid=page.evaluate("""async()=>{const {ReverseTimeEngine}=await import('./js/engine.js');const e=ReverseTimeEngine.restore(JSON.parse(localStorage.getItem('atlas-moth-run-v1')));const text=e.node.choices.find(c=>c.effect==='notice').text;return e.view().choices.find(c=>c.text===text).id;}""")
        page.locator('[data-choice="'+cid+'"]').click()
    choose_good();assert 'DAY 4' in page.locator('#day-label').inner_text()
    page.locator('#relay').evaluate('(el)=>el.open=true');page.locator('#mark').fill('<紙角>');page.locator('#mark-send').click()
    assert page.locator('#relay-status').inner_text()=='紙角留在了原處。'
    assert page.locator('#mark-send').is_disabled()
    assert page.locator('script:not([src])').count()==initial_scripts
    # Reach both warning levels and send an indirect pulse before retreating.
    for _ in range(3):page.locator('#approach').click()
    assert page.locator('body').evaluate('(el)=>el.classList.contains("bug-1")')
    page.locator('#pulse-three').click();assert '三下' in page.locator('#feed').inner_text()
    for _ in range(4):
        if page.locator('body').evaluate('(el)=>el.classList.contains("bug-2")'):break
        page.locator('#approach').click()
    assert page.locator('body').evaluate('(el)=>el.classList.contains("bug-2")')
    assert page.evaluate('getComputedStyle(document.body,"::after").display==="none"')
    page.locator('#retreat').click();page.locator('#retreat').click()
    page.reload();page.locator('#continue').click();assert 'DAY 4' in page.locator('#day-label').inner_text()
    page.screenshot(path=str(out/'atlas-session.png'),full_page=True)
    for width in [320,390,430,768,1440]:
        page.set_viewport_size({'width':width,'height':900});assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
        for button in page.locator('.choice').all():assert button.bounding_box()['height']>=48
    page.set_viewport_size({'width':390,'height':844})
    for _ in range(4):choose_good()
    assert page.locator('#ending').is_visible();assert '皇蛾已離巢' in page.locator('#ending-text').inner_text()
    page.screenshot(path=str(out/'atlas-ending.png'),full_page=True)
    residue=page.evaluate("JSON.parse(localStorage.getItem('atlas-moth-residue-v1'))");assert residue['play_count']==1
    page.reload();page.locator('#continue').click();assert page.locator('#ending').is_visible()
    assert page.evaluate("JSON.parse(localStorage.getItem('atlas-moth-residue-v1')).play_count")==1
    # Contact death and a second run generate local residue.
    page.locator('#replay').click()
    for _ in range(12):
        if page.locator('#ending').is_visible():break
        page.locator('#approach').click()
    assert '頻率重疊' in page.locator('#ending-text').inner_text()
    page.locator('#replay').click();assert '舊聞' in page.locator('#feed').inner_text()
    page.locator('#erase').click();page.locator('#cancel-erase').click();assert page.locator('#session').is_visible()
    page.locator('#erase').click();page.locator('#confirm-erase').click();assert page.locator('#onboarding').is_visible()
    assert page.evaluate("localStorage.getItem('atlas-moth-residue-v1')") is None
    # Render hostile text as data, never markup.
    page.locator('#daily').fill('<svg onload="window.pwned=1">');page.locator('#survey button').click()
    assert page.evaluate('window.pwned===undefined')
    assert page.locator('#memory svg').count()==0
    # Invalid saves fail safely; unavailable storage remains playable.
    page.evaluate("localStorage.setItem('atlas-moth-run-v1','not json')");page.reload();assert page.locator('#onboarding').is_visible()
    ctx.close()
    blocked=browser.new_context();blocked.add_init_script("Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})")
    bp=blocked.new_page();bp.on('pageerror',lambda e:errors.append(str(e)));bp.goto(base+'/');bp.locator('#survey button').click();assert bp.locator('.choice').count()==3;blocked.close()
    assert not errors,errors
    assert not external,external
    report={'result':'PASS','tested_url':base,'recorded_at':datetime.now(timezone.utc).isoformat(),'checks':['three-question start and deterministic fallback','five-day reverse clock and stable shuffled choices','five simulated chain nodes','10-character indirect marks','two proximity warning levels and contact death','survival and replay residue without double counting','mid-run and ending reload','320–1440px no overflow and 48px choices','user-gesture audio toggle and muted default','reduced-motion context','safe text rendering','corrupt and blocked storage','no external asset requests or page errors'],'physical_device_verified':False,'native_review':False,'claude_reviewed':False,'real_multiplayer':False}
    (out/'browser-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(json.dumps(report,ensure_ascii=False));browser.close()
