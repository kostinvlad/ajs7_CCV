import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should add .valid class for valid card number', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[id=form]');
    const input = await form.$('[id=input]');
    await input.type('5555555555554444');
    const submit = await form.$('[id=verify]');
    submit.click();
    await page.waitForSelector('[id=input].valid');
  });
  test('should add .invalid class for invalid card number', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[id=form]');
    const input = await form.$('[id=input]');
    await input.type('55555555555544442');
    const submit = await form.$('[id=verify]');
    submit.click();
    await page.waitForSelector('[id=input].invalid');
  });
});
