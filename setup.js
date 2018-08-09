const chalk = require('chalk');
const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const { DIR } = require('./helpers');
const isDocker = require('is-docker');

// when running with Docker, we need to use this hack
const dockerArgs = isDocker() && {
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
};

// run in headless mode if in Docker or HEADLESS env is set
const headless = !!(isDocker() || process.env.HEADLESS);

module.exports = async() => {
  console.log(chalk`\n{green Setup Puppeteer${headless ? ' Headless' : ''}}`);

  const browser = await puppeteer.launch({
    headless,
    slowMo: 250,
    ...dockerArgs,
  });
  global.__BROWSER__ = browser;
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
