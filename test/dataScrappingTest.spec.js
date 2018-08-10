jest.setTimeout(10000);

test('Scrapping Test', async() => {
  let page = await global.__BROWSER__.newPage();
  await page.goto('http:\\www.google.com.au');
  const innerText = await page.$eval('*', el => el.innerText);
  const pattern = /gmail/i;
  expect(innerText).toMatch(pattern);
});