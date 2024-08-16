const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BROWSER = 'chrome';
const WEBHOST = 'localhost:3000';
const DAY = new Date().toLocaleDateString('en-US').replace(/\//g, '-');
const SECTIONS = ['features', 'about', 'services', 'team', 'portfolio', 'newsletter', 'testimonials', 'contact'];
const DEVICES = [
  { name: 'Desktop', viewport: { width: 1024, height: 768 }, emulate: null },
  { name: 'iPad landscape', emulate: 'iPad landscape' },
  { name: 'iPad portrait', emulate: 'iPad' },
  { name: 'iPhone X portrait', emulate: 'iPhone X' },
  { name: 'iPhone X landscape', emulate: 'iPhone X landscape' },
];

async function saveScreenshot(page, webhost, section, deviceName, browser, day) {
  const fileName = `${webhost}-${section}-${deviceName}-${browser}-${day}.png`
    .replace(/[^a-z0-9_\-\.]/gi, '_')
    .toLowerCase();
  const filePath = path.join('screenshots', fileName);
  await page.screenshot({ path: filePath });
}

async function pause(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function captureScreenshotsForDevice(browser, device, webhost, sections) {
  const page = await browser.newPage();
  try {
    if (device.emulate) {
      await page.emulate(puppeteer.devices[device.emulate]);
    } else if (device.viewport) {
      await page.setViewport(device.viewport);
    }

    await page.setDefaultNavigationTimeout(60000);
    await page.goto(`http://${webhost}`, { waitUntil: 'networkidle2' });
    await pause(5000);

    await saveScreenshot(page, webhost, 'Home Page', device.name, BROWSER, DAY);

    for (const section of sections) {
      const selector = `a[href="#${section}"]`;
      if (await page.$(selector)) {
        await page.click(selector);
        await pause(5000);
        await saveScreenshot(
          page,
          webhost,
          section.charAt(0).toUpperCase() + section.slice(1),
          device.name,
          BROWSER,
          DAY,
        );
      }
    }

    const pageTopSelector = 'a[href="#page-top"]';
    if (await page.$(pageTopSelector)) {
      await page.click(pageTopSelector);
      await pause(5000);
      await saveScreenshot(page, webhost, 'Page Top', device.name, BROWSER, DAY);
    }
  } catch (error) {
    console.error(`Error capturing screenshots for device ${device.name}:`, error);
  } finally {
    await page.close();
  }
}

async function runAutomation() {
  const browser = await puppeteer.launch({ headless: false });

  for (const device of DEVICES) {
    await captureScreenshotsForDevice(browser, device, WEBHOST, SECTIONS);
  }

  await browser.close();
}

if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
}

runAutomation().catch(console.error);
