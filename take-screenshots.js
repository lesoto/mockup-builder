const puppeteer = require('puppeteer');
const http = require('http');

// Function to check if the server is running
const checkServer = async (url, retries = 5, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get(url, (res) => {
          if (res.statusCode === 200) {
            resolve(true);
          } else {
            reject(new Error(`Server responded with status code: ${res.statusCode}`));
          }
        });

        req.on('error', () => {
          reject(new Error('Server is not reachable'));
        });
      });
      return true;
    } catch (error) {
      console.warn(`Server check failed. Attempt ${i + 1} of ${retries}. Retrying in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error('Server is not reachable after multiple attempts');
};

// Helper function to check if an element is clickable
const isElementClickable = async (page, selector) => {
  try {
    const element = await page.$(selector);
    if (!element) return false;
    const visible = await element.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    });
    const box = await element.boundingBox();
    return box !== null && visible;
  } catch (error) {
    console.error(`Error checking if element is clickable: ${selector}`, error);
    return false;
  }
};

// Function to take screenshots with Puppeteer
const takeScreenshots = async () => {
  const selectors = [
    { selector: 'body > #root > .controle > .fas', path: 'screenshots/1.png' },
    { selector: 'aside.bg-black .text-light', path: 'screenshots/2.png' },
    { selector: '.text-left > .mx-2 > .row > .col-6:nth-child(2) > .text-light', path: 'screenshots/3.png' },
    { selector: '.text-left > .mx-2 > .row > .col-6:nth-child(1) > .text-light', path: 'screenshots/4.png' },
    { selector: '.text-left > .mx-2 > .row > .col-6:nth-child(2) > .text-light', path: 'screenshots/5.png' },
    { selector: '.text-left > .mx-2 > .row > .col-6:nth-child(3) > .text-light', path: 'screenshots/6.png' },
    { selector: '.text-left > .mx-2 > .row > .col-6:nth-child(4) > .text-light', path: 'screenshots/7.png' },
    { selector: 'body > #root > .bg-black > .mt-1 > .btn', path: 'screenshots/8.png' },
    { selector: '.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(1) > .text-light', path: 'screenshots/9.png' },
    { selector: '.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(2) > .text-light', path: 'screenshots/10.png' },
    { selector: '.text-left > .mx-2:nth-child(2) > .row > .col-6:nth-child(3) > .text-light', path: 'screenshots/11.png' },
  ];

  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
    await page.setViewport({ width: 1440, height: 764 });

    for (const { selector, path } of selectors) {
      try {
        await page.waitForSelector(selector, { visible: true, timeout: 60000 });
        if (await isElementClickable(page, selector)) {
          await page.evaluate((selector) => {
            document.querySelector(selector).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
          }, selector);
          await page.click(selector);
          await page.waitForTimeout(1000); // Wait for any animations to complete
          await page.screenshot({ path, fullPage: true });
          console.log(`Screenshot taken: ${path}`);
        } else {
          console.warn(`Element not clickable: ${selector}`);
        }
      } catch (error) {
        console.error(`Error clicking element or taking screenshot: ${selector}`, error);
      }
    }
  } catch (error) {
    console.error('Error during Puppeteer operations:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

// Main function to execute the tasks
const main = async () => {
  try {
    await checkServer('http://localhost:3000/');
    await takeScreenshots();
  } catch (error) {
    console.error('Error:', error.message);
  }
};

main();
