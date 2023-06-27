import { chromium } from "@playwright/test";

/**
 * 練習問題
 * [佐藤]で検索して、一番最後に出てくる人物の名前を取得してください。
 */
(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  // await page.waitForTimeout(2000);
  const inputLocator = page.locator('//*[@id="__next"]/div/div[1]/label/input');
  const pagerLocator = page.locator('.page-link.page-number');
  const pagerLastLocator = pagerLocator.locator('nth=-1');
  const cardsLastLocator = page.locator('.cards.list-group-item >> nth=-1');

  await inputLocator.type('美');
  await pagerLocator.count() > 1 && await pagerLastLocator.click();
  const answerName = await cardsLastLocator.innerText();

  console.log(answerName);

  // await browser.close();

})();
