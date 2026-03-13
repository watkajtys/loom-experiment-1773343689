from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_viewport_size({"width": 1440, "height": 1080})
        page.goto("http://127.0.0.1:5173/login")
        
        # Take full page screenshot
        page.screenshot(path="evidence.png")
        browser.close()

if __name__ == "__main__":
    run()
