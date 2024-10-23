/*
  Pre-conditions:
  1. Navigate to https://the-internet.herokuapp.com/
  2. Click on "Checkboxes" link

  Tests:
  1. Verify first checkbox is unchecked by default
  2. Verify first checkbox can be checked
  3. Verify first checkbox can be unchecked
  4. Verify second checkbox is checked by default
  5. Verify second checkbox can be unchecked
  6. Verify second checkbox can be checked
*/

import { test } from '@playwright/test';
import { TheInternetPage } from '../../page-objects/the-internet.page';
import { CheckboxesPage } from '../../page-objects/checkboxes.page';

test('Page Can Be Opened @smoke', async ({ page }) => {
  const theInternetPage = new TheInternetPage(page);
  const checkboxesPage = new CheckboxesPage(page);
  await theInternetPage.goto();
  await theInternetPage.clickCheckboxes();
  await checkboxesPage.verifyHeaderPresent();
});

test('First checkbox is unchecked by default', async ({ page }) => {
  //1
  const checkboxesPage = new CheckboxesPage(page);
  await checkboxesPage.goto();

  await checkboxesPage.verifyCheckboxUnchecked(1);
});

test('First checkbox can be checked', async ({ page }) => {
  //2
  const checkboxesPage = new CheckboxesPage(page);
  await checkboxesPage.goto();

  await checkboxesPage.checkCheckbox(1);
  await checkboxesPage.verifyCheckboxChecked(1);
});

test('First checkbox can be unchecked', async ({ page }) => {
  //3
  const checkboxesPage = new CheckboxesPage(page);
  await checkboxesPage.goto();

  await checkboxesPage.checkCheckbox(1);
  await checkboxesPage.uncheckCheckbox(1);
  await checkboxesPage.verifyCheckboxUnchecked(1);
});

test('Second checkbox is checked by default', async ({ page }) => {
  //4
  const checkboxesPage = new CheckboxesPage(page);
  await checkboxesPage.goto();

  await checkboxesPage.verifyCheckboxChecked(2);
});

test('Second checkbox can be unchecked', async ({ page }) => {
  //5
  const checkboxesPage = new CheckboxesPage(page);
  await checkboxesPage.goto();

  await checkboxesPage.uncheckCheckbox(2);
  await checkboxesPage.verifyCheckboxUnchecked(2);
});

test('Second checkbox can be checked', async ({ page }) => {
  //6
  const checkboxesPage = new CheckboxesPage(page);
  await checkboxesPage.goto();

  await checkboxesPage.uncheckCheckbox(2);
  await checkboxesPage.checkCheckbox(2);
  await checkboxesPage.verifyCheckboxChecked(2);
});
