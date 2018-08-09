const chalk = require('chalk');
const rimraf = require('rimraf');
const { DIR } = require('./helpers');

module.exports = async() => {
  console.log(chalk`{green Teardown Puppeteer}`);
  await global.__BROWSER__.close();
  rimraf.sync(DIR);
};
