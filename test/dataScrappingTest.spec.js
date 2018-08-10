const config = require('.\\..\\fixtures\\config');

jest.setTimeout(10000);

test('Scrapping Test', async() => {
  const pattern = config.PATTERN;
  let page = await global.__BROWSER__.newPage();

  await page.goto(config.BASE_URL);
  const innerText = await page.$eval('*', el => el.innerText);

  expect(innerText).toMatch(pattern);
});