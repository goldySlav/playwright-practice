/*
  Pre-conditions:
  1. Navigate to https://the-internet.herokuapp.com/
  2. Click on "Dropdown" link

  Tests:
  1. No option is selected by default
  2. "Option 1" can be selected
  3. "Option 2" can be selected
  4. Default option cannot be selected
*/

import { expect, test } from '@playwright/test';
import { TheInternetPage } from '../../page-objects/the-internet.page';
import { DropdownPage } from '../../page-objects/dropdown.page';

test('Page Can Be Opened @smoke', async ({ page }) => {
  const theInternetPage = new TheInternetPage(page);
  const dropdownPage = new DropdownPage(page);
  await theInternetPage.goto();
  await theInternetPage.clickDropdown();
  await dropdownPage.verifyHeaderPresent();
});

test('Default option is selected by default', async ({ page }) => {
  //1
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.goto();

  expect(await dropdownPage.getSelectedOption()).toBe(dropdownPage.options.default);
});

test('"Option 1" can be selected', async ({ page }) => {
  //2
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.goto();

  await dropdownPage.locators.dropdown.selectOption(dropdownPage.options.option1);
  expect(await dropdownPage.getSelectedOption()).toBe(dropdownPage.options.option1);
});

test('"Option 2" can be selected', async ({ page }) => {
  //3
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.goto();

  await dropdownPage.locators.dropdown.selectOption(dropdownPage.options.option2);
  expect(await dropdownPage.getSelectedOption()).toBe(dropdownPage.options.option2);
});

test('Default option is disabled', async ({ page }) => {
  //4
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.goto();

  expect(dropdownPage.locators.defaultOption()).toBeDisabled();
});
