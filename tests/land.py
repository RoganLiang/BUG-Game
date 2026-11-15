"""Terrain is playable after old/new awakening saves; real UI costs and outcomes."""
import os,json,re
from pathlib import Path
from datetime import datetime,timezone
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
base=os.environ.get('BUG_BASE_URL','http://127.0.0.1:4173').rstrip('/')
out=Path(os.environ.get('BUG_ARTIFACT_DIR',str(root/'artifacts')));out.mkdir(parents=True,exist_ok=True)
errors=[];runs=[]
with sync_playwright() as p:
    executable=os.environ.get('BUG_CHROMIUM_PATH') or ('/usr/bin/chromium' if Path('/usr/bin/chromium').exists() else None)
    b=p.chromium.launch(executable_path=executable,args=['--no-sandbox'])
    for locale in ['zh-Hant','en','ja','ko','es','fr']:
        context=b.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True)
        page=context.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(base+'/BUG_Game.html');page.locator('#language').select_option(locale);page.locator('#start').click()
        for q in range(6):page.locator(f'[data-choice="q{q}-1"]').click()
        # Existing 0.4 players may already have used their one practice action.
        page.locator('[data-action="use-power"]').click();page.reload();page.locator('#continue').click()
        assert page.locator('[data-action="start-land"]').is_visible()
        page.locator('[data-action="start-land"]').click()
        def state():return page.evaluate("JSON.parse(localStorage.getItem('moth-effect-bug-v2'))")
        def act(a,index=None):
            if index is not None:page.locator(f'#story [data-land-tile="{index}"]').click()
            page.locator(f'#story [data-land-action="{a}"]').click()
        assert page.locator('#story [data-land-tile]').count()==36
        assert not any(t['building'] for t in state()['land']['map'])
        assert page.locator('#story [data-land-action="well"]').is_enabled()
        # Arrow keys move focus and selection through the map.
        page.locator('#story [data-land-tile="14"]').focus();page.keyboard.press('ArrowRight')
        assert page.locator('#story [data-land-tile="15"]').evaluate('(e)=>document.activeElement===e')
        assert page.locator('#story [data-land-action="camp"]').is_disabled()
        act('camp',7);assert state()['land']['resources']['wood']==6
        act('well',14);act('farm',8)
        page.reload();page.locator('#continue').click();assert state()['land']['turn']==3
        act('power');assert state()['stats']['energy']==62
        assert page.locator('#story .land-event').is_visible();act('event-risk')
        assert page.locator('#story [data-land-action="power"]').is_disabled()
        if locale=='zh-Hant':page.screenshot(path=str(out/'land-built-mobile.png'),full_page=True)
        for _ in range(4):act('rest')
        assert state()['land']['event']=='knock'
        for code in ['en','es','fr']:
            page.locator('#language').select_option(code)
            assert not re.search('[\u3400-\u9fff]',page.locator('#story').inner_text()),(code,page.locator('#story').inner_text())
        page.locator('#language').select_option(locale)
        act('event-prepare');act('rest')
        assert state()['land']['status']=='settled'
        assert page.locator('#story #land-result').is_visible()
        assert state()['birthplaceId'] and state()['residenceId']==state()['scenarioId']
        saved=page.evaluate("localStorage.getItem('moth-effect-bug-v2')")
        for width in [320,390,430,768,1440]:
            page.set_viewport_size({'width':width,'height':900})
            for tab in ['story','world','records']:
                page.locator('#'+tab+'-tab').click()
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),(locale,width,tab)
                if locale in ['en','es','fr']:assert not re.search('[\u3400-\u9fff]',page.locator('#'+tab).inner_text()),(locale,tab,page.locator('#'+tab).inner_text())
                if tab in ['story','world']:assert page.locator('#'+tab+' [data-land-tile="14"]').bounding_box()['height']>=44
        assert page.evaluate("localStorage.getItem('moth-effect-bug-v2')")==saved
        page.locator('#story-tab').click();page.set_viewport_size({'width':390,'height':844})
        if locale=='zh-Hant':page.screenshot(path=str(out/'land-result-mobile.png'),full_page=True)
        page.reload();page.locator('#continue').click();assert state()['land']['status']=='settled'
        page.locator('#reset').click();page.locator('#confirm-reset').click();assert page.evaluate("localStorage.getItem('moth-effect-bug-v2')")==None
        runs.append(locale);context.close()
    assert not errors,errors
    report={'result':'PASS','tested_url':base,'recorded_at':datetime.now(timezone.utc).isoformat(),'languages':runs,'checks':['awakening-to-land continuation with previously used ability','36 initially unbuilt tiles','geographical building constraints','resource costs and production','ability cost and cooldown','weather and fixed knocking mystery','stable settlement at turn 9','mid-game and end save reload','keyboard arrow navigation','44px tiles and 320–1440px no overflow','six languages and no CJK fallback in en/es/fr','reset clears land','no page errors'],'physical_device_verified':False,'native_review':False}
    (out/'land-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(json.dumps(report,ensure_ascii=False));b.close()
