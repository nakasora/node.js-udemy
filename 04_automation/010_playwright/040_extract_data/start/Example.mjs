import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const pageTitleLocator = page.locator('.navbar-brand');
  const pageTitle = await pageTitleLocator.innerText();
  
  // xpathで要素を取得
  const xPathLocator = page.locator('//*[@id="__next"]/nav/div/a');
  const xPathText = await xPathLocator.innerText();

  console.log(xPathText);
  await browser.close();
})();
