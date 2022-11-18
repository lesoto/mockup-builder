const puppeteer = require('puppeteer');

puppeteer.launch().then(async (browser) => {
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');

  await page.setViewport({ width: 1440, height: 764 });

  await page.waitForSelector('body > #root > .controle > .fas');
  await page.click('body > #root > .controle > .fas');
  await page.screenshot({ path: 'screenshots/1.png', fullPage: true });

  await page.waitForSelector('body > #root > aside');
  await page.click('aside.bg-black text-light');
  await page.screenshot({ path: 'screenshots/2.png', fullPage: true });

  // await page.waitForSelector('.text-left > .mx-2 > .row > .col-6:nth-child(2) > .text-light');
  // await page.click('.text-left > .mx-2 > .row > .col-6:nth-child(2) > .text-light');
  // await page.screenshot({ path: 'screenshots/3.png', fullPage: true });

  // await page.waitForSelector('.text-left > .mx-2 > .row > .col-6:nth-child(1) > .text-light');
  // await page.click('.text-left > .mx-2 > .row > .col-6:nth-child(1) > .text-light');
  // await page.screenshot({ path: 'screenshots/4.png', fullPage: true });

  // await page.waitForSelector('.text-left > .mx-2 > .row > .col-6:nth-child(1) > .text-light');
  // await page.click('.text-left > .mx-2 > .row > .col-6:nth-child(1) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2 > .row > .col-6:nth-child(2) > .text-light');
  // await page.click('.text-left > .mx-2 > .row > .col-6:nth-child(2) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2 > .row > .col-6:nth-child(2) > .text-light');
  // await page.click('.text-left > .mx-2 > .row > .col-6:nth-child(2) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2 > .row > .col-6:nth-child(3) > .text-light');
  // await page.click('.text-left > .mx-2 > .row > .col-6:nth-child(3) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2 > .row > .col-6:nth-child(3) > .text-light');
  // await page.click('.text-left > .mx-2 > .row > .col-6:nth-child(3) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2 > .row > .col-6:nth-child(4) > .text-light');
  // await page.click('.text-left > .mx-2 > .row > .col-6:nth-child(4) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2 > .row > .col-6:nth-child(4) > .text-light');
  // await page.click('.text-left > .mx-2 > .row > .col-6:nth-child(4) > .text-light');

  // await page.waitForSelector('body > #root > .bg-black > .mt-1 > .btn');
  // await page.click('body > #root > .bg-black > .mt-1 > .btn');

  // await page.waitForSelector('body > #root > .bg-black > .mt-1 > .btn');
  // await page.click('body > #root > .bg-black > .mt-1 > .btn');

  // await page.waitForSelector('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(1) > .text-light');
  // await page.click('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(1) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(1) > .text-light');
  // await page.click('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(1) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(2) > .text-light');
  // await page.click('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(2) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(2) > .text-light');
  // await page.click('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(2) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(3) > .text-light');
  // await page.click('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(3) > .text-light');

  // await page.waitForSelector('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(3) > .text-light');
  // await page.click('.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(3) > .text-light');

  // await page.waitForSelector('body > #root > .bg-black > .mt-1 > .btn');
  // await page.click('body > #root > .bg-black > .mt-1 > .btn');

  // await page.waitForSelector('body > #root > .bg-black > .mt-1 > .btn');
  // await page.click('body > #root > .bg-black > .mt-1 > .btn');

  await browser.close();
});
