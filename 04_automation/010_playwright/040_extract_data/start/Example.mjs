import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  const htmlStr = await page.content();

  const pageTitleLocator = await page.locator('.navbar-brand');
  const pageTitle = await pageTitleLocator.innerText();
  // console.log(htmlStr);
  console.log(pageTitleLocator);
  console.log(pageTitle);
  
  // xpathで要素を取得
  const xPathLocator = await page.locator('//*[@id="__next"]/nav/div/a');
  const xPathText = await xPathLocator.innerText();

  console.log(xPathText);
  await browser.close();
})();
