const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.beteasy.com.au');
  console.log(await page.$eval('*', el => el.innerText));
  await browser.close();
})();