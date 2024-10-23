/*
  1. Navigate to playwright.dev
  2. Click on "Get Started"
  3. Hover over the language dropdown
  4. Click on "Java" in the dropdown
  5. Check the URL changed accordingly
  6. Check the text "Installing Playwright" is not displayed
  7. Check the "App.java" tab is displayed
*/

import { test, expect } from '@playwright/test';

const baseURL = 'https://playwright.dev';

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
});

test('Page Can Be Opened @smoke', async ({ page }) => {
  //1
  await expect(page).toHaveTitle(/Playwright/);
});

test('Click on "Get Started" @smoke', async ({ page }) => {
  //2
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).not.toHaveTitle(/Installation/);
});

test('Check Java Page', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Node.js' }).hover(); //3
  await page.getByRole('navigation', { name: 'Main' }).getByText('Java').click(); //4

  await expect(page).toHaveURL(`${baseURL}/java/docs/intro`); //5
  await expect(page.getByText('Installing Playwright', { exact: true })).not.toBeVisible(); //6
  await expect(page.getByRole('tab', { name: 'App.java' })).toBeVisible(); //7
});
