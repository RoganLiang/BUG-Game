import json
from pathlib import Path
from playwright.sync_api import sync_playwright

root=Path(__file__).resolve().parents[1]
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
    page=browser.new_page(viewport={'width':390,'height':844},device_scale_factor=2,is_mobile=True,has_touch=True)
    errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto('http://127.0.0.1:4173')
    page.get_by_role('button',name='✦ 抽選我的出生地').click()
    assert page.locator('[data-choice]').count()==2
    origin=page.locator('#origin-name').inner_text()
    page.locator('[data-choice="0"]').click()
    assert 'CHAPTER 02' in page.locator('#story').inner_text()
    page.reload()
    assert page.locator('#origin-name').inner_text()==origin
    assert 'CHAPTER 02' in page.locator('#story').inner_text()
    page.locator('[data-choice="1"]').click()
    page.locator('[data-choice="0"]').click()
    assert '巴黎前導完' in page.locator('#story').inner_text()
    page.screenshot(path=str(root/'artifacts/mobile-story.png'),full_page=True)
    page.get_by_role('button',name='◎ 查看我的全球回響').click()
    assert '風險 56%' in page.locator('#world').inner_text()
    assert '風險 40%' in page.locator('#world').inner_text()
    page.get_by_role('button',name='查看奈洛比').click()
    assert '暗夜通道' in page.locator('#event-2').inner_text()
    page.screenshot(path=str(root/'artifacts/mobile-world.png'),full_page=True)
    for width in [320,375,390,430,768,1440]:
        page.set_viewport_size({'width':width,'height':900})
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),width
    page.get_by_role('button',name='重新開始 ↺').click()
    page.get_by_role('button',name='保留旅程').click()
    assert page.locator('#origin-name').inner_text()==origin
    page.get_by_role('button',name='重新開始 ↺').click()
    page.get_by_role('button',name='確認重新開始').click()
    assert page.get_by_role('button',name='✦ 抽選我的出生地').is_visible()
    page.set_viewport_size({'width':390,'height':844})
    page.screenshot(path=str(root/'artifacts/mobile-start.png'),full_page=True)
    page.goto((root/'dist/BUG_Game.html').as_uri())
    page.get_by_role('button',name='✦ 抽選我的出生地').click()
    assert page.locator('[data-choice]').count()==2
    blocked=browser.new_context()
    blocked.add_init_script("Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})")
    q=blocked.new_page()
    q.goto('http://127.0.0.1:4173')
    q.get_by_role('button',name='✦ 抽選我的出生地').click()
    assert '無法存檔' in q.locator('#save-status').inner_text()
    assert q.locator('[data-choice]').count()==2
    assert not errors,errors
    browser.close()
    print(json.dumps({'result':'PASS','checks':['mobile full story','state and city effects','reload persistence','city inspection','reset cancel and confirm','320–1440px no overflow','standalone file','storage disabled fallback','no JS errors']},ensure_ascii=False))
