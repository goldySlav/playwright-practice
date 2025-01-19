/*
  Pre-conditions:
  1. Navigate to https://the-internet.herokuapp.com/
  2. Click on "Entry Ad" link

  Tests:
  1. Pop-up is present on page open
  2. Pop-up can be closed
*/

import { test, expect, type Page } from '@playwright/test';
import { TheInternetPage } from '../../page-objects/the-internet.page';
import { EntryAdPage } from '../../page-objects/entry-ad.page';

test.describe.configure({ retries: 0, mode: 'serial' }); //tests will run together and in order! //TODO: delete retries override

let page: Page;
let theInternetPage: TheInternetPage;
let entryAdPage: EntryAdPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Page Can Be Opened @smoke', async ({ page }) => {
  theInternetPage = new TheInternetPage(page);
  entryAdPage = new EntryAdPage(page);

  await theInternetPage.goto();
  await theInternetPage.clickEntryAd();
  await entryAdPage.verifyHeaderPresent();
});

test('Pop-up is present on page open', async () => {
  //1
  expect(await entryAdPage.getPopupTitle()).toMatch(/THIS IS A MODAL WINDOW/i);
});
