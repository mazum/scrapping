jest.setTimeout(10000);

test('Scrapping Test', async() => {
  console.log(`yellow dirty fellow`);
  let page = await global.__BROWSER__.newPage();
  await page.goto('http:\\www.google.com.au');
  console.log(await page.$eval('*', el => el.innerText));
});