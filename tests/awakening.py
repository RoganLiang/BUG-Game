"""New starts: 25 places, six five-choice scenes, power use and save-safe reload."""
import json,os,re
from pathlib import Path
from datetime import datetime,timezone
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
base=os.environ.get('BUG_BASE_URL','http://127.0.0.1:4173').rstrip('/')
out=Path(os.environ.get('BUG_ARTIFACT_DIR',str(root/'artifacts')));out.mkdir(parents=True,exist_ok=True)
ids=['tokyo','seoul','shanghai','hong-kong','singapore','manila','ulaanbaatar','santiago','rio','boston','vancouver','alaska','montreal','canberra','wellington','jakarta','bangkok','penang','new-delhi','berlin','london','istanbul','cairo','madagascar','vatican']
errors=[];visited=[]
with sync_playwright() as p:
    executable=os.environ.get('BUG_CHROMIUM_PATH') or ('/usr/bin/chromium' if Path('/usr/bin/chromium').exists() else None)
    b=p.chromium.launch(executable_path=executable,args=['--no-sandbox'])
    for i,expected in enumerate(ids):
        context=b.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True)
        context.add_init_script('Math.random=()=>'+str((i+.1)/25))
        page=context.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(base+'/BUG_Game.html');page.locator('#start').click()
        state=page.evaluate("JSON.parse(localStorage.getItem('moth-effect-bug-v2'))")
        assert state['scenarioId']==expected,(i,state)
        assert state['residenceId']==expected and state['residenceId']!='paris-11'
        assert page.locator('[data-choice]').count()==5
        visited.append(expected)
        if i==0:
            page.screenshot(path=str(out/'awakening-tokyo-q1.png'),full_page=True)
            assert '圖書館員' not in page.locator('#story').inner_text()
        for q in range(6):
            assert page.locator('[data-choice]').count()==5
            assert not page.locator('[data-action="use-power"]').count()
            page.locator(f'[data-choice="q{q}-{(i+q)%5}"]').click()
            if q==2:
                page.reload();page.locator('#continue').click()
                assert page.locator('[data-choice]').count()==5
        assert page.locator('[data-action="use-power"]').is_visible()
        assert not page.locator('[data-choice]').count()
        before=page.evaluate("JSON.parse(localStorage.getItem('moth-effect-bug-v2')).stats.energy")
        page.locator('[data-action="use-power"]').click()
        assert page.locator('#power-result').is_visible()
        assert not page.locator('[data-action="use-power"]').count()
        after=page.evaluate("JSON.parse(localStorage.getItem('moth-effect-bug-v2')).stats.energy")
        assert after==before-4
        if i==8:page.screenshot(path=str(out/'awakening-rio-result.png'),full_page=True)
        context.close()
    for locale in ['zh-Hant','en','ja','ko','es','fr']:
        context=b.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True)
        context.add_init_script('Math.random=()=>0.32')
        page=context.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(base+'/BUG_Game.html');page.locator('#language').select_option(locale)
        if locale in ['en','es','fr']:
            assert not re.search('[\u3400-\u9fff]',page.locator('#home').inner_text()),(locale,page.locator('#home').inner_text())
        page.locator('#setup-start').click()
        assert page.locator('[data-action="begin"]').is_visible()
        original=page.evaluate("JSON.parse(localStorage.getItem('moth-effect-bug-v2')).residenceId")
        page.locator('[data-action="draw"]').click()
        assert page.evaluate("JSON.parse(localStorage.getItem('moth-effect-bug-v2')).residenceId")==original
        page.locator('[data-action="begin"]').click()
        for q in range(6):
            assert page.locator('[data-choice]').count()==5
            if locale in ['en','es','fr']:assert not re.search('[\u3400-\u9fff]',page.locator('#story').inner_text()),(locale,page.locator('#story').inner_text())
            saved=page.evaluate("localStorage.getItem('moth-effect-bug-v2')")
            page.locator('#language').select_option('fr' if locale=='en' else 'en')
            assert page.evaluate("localStorage.getItem('moth-effect-bug-v2')")==saved
            page.locator('#language').select_option(locale)
            page.locator(f'[data-choice="q{q}-1"]').click()
        page.locator('[data-action="use-power"]').click()
        for width in [320,390,430,768,1440]:
            page.set_viewport_size({'width':width,'height':900})
            for name in ['story','records','world']:
                page.locator('#'+name+'-tab').click()
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),(locale,width,name)
                if locale in ['en','es','fr']:assert not re.search('[\u3400-\u9fff]',page.locator('#'+name).inner_text()),(locale,name,page.locator('#'+name).inner_text())
        context.close()
    assert len(set(visited))==25 and not errors,errors
    report={'result':'PASS','tested_url':base,'recorded_at':datetime.now(timezone.utc).isoformat(),'locations':visited,'checks':['all 25 starts reachable; none fixed Paris','six connected scenes; exactly five choices each','power hidden until six answers','power usable once with energy cost','mid-story reload preserves city and progress','birthplace draw does not overwrite scenario','six-language flow and save-safe switching','320–1440px layout','no premature librarian reveal','no JS errors'],'native_review':False,'physical_device_verified':False}
    (out/'awakening-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(json.dumps(report,ensure_ascii=False));b.close()
