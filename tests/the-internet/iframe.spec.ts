/*
  Pre-conditions:
  1. Navigate to https://the-internet.herokuapp.com/
  2. Click on "Frames" link
  3. Click on "iFrame" link

  Tests:
  1. IFrame is present on the page
  2. IFrame content can be accessed
*/

import { expect, test } from '@playwright/test';
import { TheInternetPage } from '../../page-objects/the-internet.page';
import { FramesPage } from '../../page-objects/frames.page';
import { IFramePage } from '../../page-objects/iframe.page';

test('Page Can Be Opened @smoke', async ({ page }) => {
  const theInternetPage = new TheInternetPage(page);
  const framesPage = new FramesPage(page);
  const iFramePage = new IFramePage(page);
  await theInternetPage.goto();
  await theInternetPage.clickFrames();
  await framesPage.clickIFrameLink();
  await iFramePage.verifyHeaderPresent();
});

//1
test('IFrame is present on the page', async ({ page }) => {
  const iFramePage = new IFramePage(page);
  await iFramePage.goto();

  expect(iFramePage.locators.iFrameText()).toBeVisible();
});

//2
test('IFrame content can be accessed', async ({ page }) => {
  const iFramePage = new IFramePage(page);
  await iFramePage.goto();

  expect(await iFramePage.getIFrameInnerText()).toBe('Your content goes here.');
});
