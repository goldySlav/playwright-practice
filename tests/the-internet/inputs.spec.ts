/*
  Pre-conditions:
  1. Navigate to https://the-internet.herokuapp.com/
  2. Click on "Numbers" link

  Tests:
  1. Numbers input is empty by default
  2. User can input number into the numbers input
*/

import { expect, test } from '@playwright/test';
import { TheInternetPage } from '../../page-objects/the-internet.page';
import { InputsPage } from '../../page-objects/inputs.page';

test('Page Can Be Opened @smoke', async ({ page }) => {
  const theInternetPage = new TheInternetPage(page);
  const inputsPage = new InputsPage(page);
  await theInternetPage.goto();
  await theInternetPage.clickInputs();
  await inputsPage.verifyHeaderPresent();
});

test.describe('Inputs Tests', () => {
  let inputsPage: InputsPage;

  test.beforeEach(async ({ page }) => {
    inputsPage = new InputsPage(page);
    await inputsPage.goto();
  });

  //1
  test('Numbers input is empty by default', async () => {
    expect(inputsPage.locators.numbersInput).toBeEmpty();
  });

  //2
  test('User can input number into the numbers input', async () => {
    await inputsPage.fillNumbersInput('1337');
    expect(inputsPage.locators.numbersInput).toHaveValue('1337');
  });
});
