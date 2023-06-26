import { chromium } from "@playwright/test";
import * as fs from "fs";
import { Parser } from "json2csv";
import env from "dotenv";
env.config();

/**
 * 練習問題
 * 3ページ目の役職が係長の人物名と会社名をすべてtest-data.csvに出力しなさい。
 * ※会社名が取れない場合にも処理が止まらないように例外処理を追加してください。
 *
 * "company","name"
 * "山本金属株式会社","28 伊藤 友美"
 */
(async () => {
  const browser = await chromium.launch( {headless: false, slowMo: 500} );
  const page = await browser.newPage();
  await page.goto(process.env.TARGET_URL);

  await page.waitForTimeout(2000);

  const pager3Locator = page.locator(".page-link.page-number >> nth=2");
  await pager3Locator.click();

  const cardLocators = page.locator(".cards.list-group-item");
  const cardCount = await cardLocators.count();

  const fetchedCards = [];
  for (let i = 0; i < cardCount; i++) {
    const cardLocator = cardLocators.locator(`nth=${i} >> a`);
    const cardText = await cardLocator.textContent();

    await cardLocator.click();
    const roleLocator = page.locator(".card-subtitle");
    const roleText = await roleLocator.textContent();
    if (!roleText.includes('係長')) {
      await backToPager(page);
      continue;
    }
    
    try {
      const companyLocator = page.locator(".card-title.company");
      const companyText = await companyLocator.textContent();
      fetchedCards.push({
        company: companyText,
        name: cardText,
      });
    } catch (error) {
    }

    await backToPager(page);
  }
  console.log(cardCount);
  await browser.close();

  const parser = new Parser();
  const csv = parser.parse(fetchedCards);

  fs.unlink("./text-data.csv", (err) => {
    if (err) throw err;
    console.log("text-data.csv was deleted");
  });
  fs.writeFileSync(process.env.OUTPUT_FILE, csv);
})();

const backToPager = async (page) => {
  const backLocator = page.locator("text=戻る");
  await backLocator.click();
}