/*
  Pre-conditions:
  1. Navigate to https://the-internet.herokuapp.com/
  2. Click on "Add/Remove Elements" link

  Tests:
  1. Verify there are no dynamic elements by default
  2. Verify single element can be added
  3. Verify amount of elements can be reduced when single element is present
  4. Verify multiple elements can be added
  5. Verify amount of elements can be reduced when multiple elements are present (remove first element)
  6. Verify amount of elements can be reduced when multiple elements are present (remove second element)
  7. Verify multiple elements can be completely deleted
*/

import { test } from '@playwright/test';
import { TheInternetPage } from '../../page-objects/the-internet.page';
import { AddRemoveElementsPage } from '../../page-objects/add-remove-elements.page';

test('Page Can Be Opened @smoke', async ({ page }) => {
  const theInternetPage = new TheInternetPage(page);
  const addRemoveElementsPage = new AddRemoveElementsPage(page);
  await theInternetPage.goto();
  await theInternetPage.clickAddRemoveElements();
  await addRemoveElementsPage.verifyHeaderPresent();
});

test.describe('Dynamic Elements', () => {
  let addRemoveElementsPage: AddRemoveElementsPage;

  test.beforeEach(async ({ page }) => {
    addRemoveElementsPage = new AddRemoveElementsPage(page);
    await addRemoveElementsPage.goto();
  });

  test('Dynamic elements are absent by default', async () => {
    //1
    await addRemoveElementsPage.verifyDeleteButtonsAmountEqual(0);
  });

  test('Single element can be added', async () => {
    //2
    await addRemoveElementsPage.clickAddElementsButton();

    await addRemoveElementsPage.verifyDeleteButtonsAmountEqual(1);
  });

  test('Single element can be deleted', async () => {
    //3
    await addRemoveElementsPage.clickAddElementsButton();
    await addRemoveElementsPage.clickDeleteButton(1);

    await addRemoveElementsPage.verifyDeleteButtonsAmountEqual(0);
  });

  test('Multiple elements can be added', async () => {
    //4
    await addRemoveElementsPage.clickAddElementsButton(3);

    await addRemoveElementsPage.verifyDeleteButtonsAmountEqual(3);
  });

  test('First element can be removed', async () => {
    //5
    await addRemoveElementsPage.clickAddElementsButton(2);
    await addRemoveElementsPage.clickDeleteButton(1);

    await addRemoveElementsPage.verifyDeleteButtonsAmountEqual(1);
  });

  test('Second element can be removed', async () => {
    //6
    await addRemoveElementsPage.clickAddElementsButton(2);
    await addRemoveElementsPage.clickDeleteButton(2);

    await addRemoveElementsPage.verifyDeleteButtonsAmountEqual(1);
  });

  test('Multiple elements can be completely deleted', async () => {
    //7
    await addRemoveElementsPage.clickAddElementsButton(3);
    await addRemoveElementsPage.clickDeleteButton(1);
    await addRemoveElementsPage.clickDeleteButton(1);
    await addRemoveElementsPage.clickDeleteButton(1);

    await addRemoveElementsPage.verifyDeleteButtonsAmountEqual(0);
  });
});
