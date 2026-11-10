"""Exercise clip controls, six languages, mobile layout and save-safe language switching."""
import json,os,re
from pathlib import Path
from datetime import datetime,timezone
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
base=os.environ.get('BUG_BASE_URL','http://127.0.0.1:4173').rstrip('/')
out=Path(os.environ.get('BUG_ARTIFACT_DIR',str(root/'artifacts')))
out.mkdir(parents=True,exist_ok=True)
locales=['zh-Hant','en','ja','ko','es','fr']
errors=[]
with sync_playwright() as p:
    executable=os.environ.get('BUG_CHROMIUM_PATH') or ('/usr/bin/chromium' if Path('/usr/bin/chromium').exists() else None)
    browser=p.chromium.launch(executable_path=executable,args=['--no-sandbox'])
    for locale in locales:
        context=browser.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True)
        page=context.new_page()
        page.on('pageerror',lambda e:errors.append(str(e)))
        page.on('console',lambda m:errors.append(m.text) if m.type=='error' else None)
        page.goto(base+'/BUG_Game.html')
        page.locator('#language').select_option(locale)
        assert page.locator('html').get_attribute('lang')==locale
        assert not re.search('知允|Jiyoon|ジユン|지윤',page.locator('#home').inner_text())
        if locale in ['en','es','fr']:
            assert not page.locator('[aria-label]').evaluate_all("els=>els.some(e=>/[\u3400-\u9fff]/.test(e.getAttribute('aria-label')))")
        # The main action is visible without scrolling, not buried behind setup.
        box=page.locator('#start').bounding_box()
        assert box and box['y']>=0 and box['y']+box['height']<=844
        header=page.locator('header').bounding_box()
        brand=page.locator('.brand').bounding_box()
        assert brand['y']>=header['y'] and brand['y']+brand['height']<=header['y']+header['height']
        page.locator('#version-b').click()
        assert page.locator('#clip-caption').inner_text()=='SEOUL · 07:58'
        page.locator('#version-a').click()
        assert page.locator('#clip-caption').inner_text()=='PARIS · 08:16'
        page.locator('#clip-scrub').fill('9')
        assert '00:09' in page.locator('#clip-clock').inner_text()
        # Explicit play advances and pause really freezes the clip.
        page.locator('#clip-play').click()
        page.wait_for_function("document.querySelector('#clip-clock').textContent.startsWith('00:10')")
        page.locator('#clip-play').click()
        frame=page.locator('#clip-clock').inner_text()
        page.wait_for_timeout(1100)
        assert page.locator('#clip-clock').inner_text()==frame
        page.screenshot(path=str(out/f'home-{locale}.png'),full_page=True)
        page.locator('#start').click()
        assert page.locator('[data-choice]').count()==3
        state_before=page.evaluate("JSON.parse(localStorage.getItem('moth-effect-bug-v2'))")
        assert state_before['currentNodeId']=='video-0817'
        assert state_before['birthplaceId']=='seoul-mapo'
        assert state_before['residenceId']=='paris-11'
        page.locator('[data-choice="verify-video"]').click()
        state_before=page.evaluate("localStorage.getItem('moth-effect-bug-v2')")
        alternate='en' if locale!='en' else 'fr'
        page.locator('#language').select_option(alternate)
        assert page.evaluate("localStorage.getItem('moth-effect-bug-v2')")==state_before
        page.locator('#language').select_option(locale)
        page.reload()
        assert page.locator('#language').input_value()==locale
        page.locator('#continue').click()
        assert '08:29' in page.locator('#story').inner_text()
        page.locator('[data-choice="trace-source"]').click()
        page.locator('[data-choice="compare-window"]').click()
        assert page.locator('[data-action="records"]').is_visible()
        for width in [320,375,390,430,768,1440]:
            page.set_viewport_size({'width':width,'height':900})
            for name in ['story','records','world']:
                page.locator('#'+name+'-tab').click()
                assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),(locale,width,name)
                if locale in ['en','es','fr']:
                    assert not page.locator('#'+name).evaluate("e=>/[\u3400-\u9fff]/.test(e.innerText)"),(locale,name)
        page.locator('#reset').click()
        page.locator('#confirm-reset').click()
        assert page.locator('#continue').is_hidden()
        assert page.locator('#language').input_value()==locale
        assert '00:00' in page.locator('#clip-clock').inner_text()
        context.close()
    assert not errors,errors
    report={'result':'PASS','languages':locales,'tested_base_url':base,'recorded_at':datetime.now(timezone.utc).isoformat(),'checks':['main action in first viewport','fictional clip A/B and timeline','play/pause','single-click start','same story effects across languages','language switch preserves save','language survives reload','six-language story/records/world','320–1440px no overflow','no Chinese fallback in en/es/fr','reset preserves language and resets clip','no console/page errors'],'native_speaker_review':False,'physical_device_verified':False}
    (out/'locales-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
    print(json.dumps(report,ensure_ascii=False))
    browser.close()
