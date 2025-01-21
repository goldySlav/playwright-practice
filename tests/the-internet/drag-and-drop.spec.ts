/*
  Pre-conditions:
  1. Navigate to https://the-internet.herokuapp.com/
  2. Click on "Drag and Drop" link

  Tests:
  1. Verify "A" element is placed in the first column by default
  2. Verify "A" element can be drag and droppped into the second column
  3. Verify "A" element can be drag and droppped back into the first column
  4. Verify "B" element is placed in the second column by default
  5. Verify "B" element can be drag and droppped into the first column
  6. Verify "B" element can be drag and droppped back into the second column
*/

import { expect, test } from '@playwright/test';
import { TheInternetPage } from '../../page-objects/the-internet.page';
import { DragAndDropPage } from '../../page-objects/drag-and-drop.page';

test('Page Can Be Opened @smoke', async ({ page }) => {
  const theInternetPage = new TheInternetPage(page);
  const dragAndDropPage = new DragAndDropPage(page);
  await theInternetPage.goto();
  await theInternetPage.clickDragAndDrop();
  await dragAndDropPage.verifyHeaderPresent();
});

test.describe('Drag & Drop Tests', () => {
  let dragAndDropPage: DragAndDropPage;

  test.beforeEach(async ({ page }) => {
    dragAndDropPage = new DragAndDropPage(page);
    await dragAndDropPage.goto();
  });

  //1
  test('"A" element is placed in the first column by default', async () => {
    expect(await dragAndDropPage.getFirstElementText()).toBe('A');
  });

  //2
  test('"A" element can be drag and droppped into the second column', async () => {
    await dragAndDropPage.dragFromLeftToRight();
    expect(await dragAndDropPage.getFirstElementText()).toBe('B');
    expect(await dragAndDropPage.getSecondElementText()).toBe('A');
  });

  //3
  test('Verify "A" element can be drag and droppped back into the first column', async () => {
    await dragAndDropPage.dragFromLeftToRight();
    await dragAndDropPage.dragFromRightToLeft();
    expect(await dragAndDropPage.getFirstElementText()).toBe('A');
    expect(await dragAndDropPage.getSecondElementText()).toBe('B');
  });

  //4
  test('"B" element is placed in the second column by default', async () => {
    expect(await dragAndDropPage.getSecondElementText()).toBe('B');
  });

  //5
  test('"B" element can be drag and droppped into the first column', async () => {
    await dragAndDropPage.dragFromRightToLeft();
    expect(await dragAndDropPage.getFirstElementText()).toBe('B');
    expect(await dragAndDropPage.getSecondElementText()).toBe('A');
  });

  //6
  test('Verify "B" element can be drag and droppped back into the second column', async () => {
    await dragAndDropPage.dragFromRightToLeft();
    await dragAndDropPage.dragFromLeftToRight();
    expect(await dragAndDropPage.getFirstElementText()).toBe('A');
    expect(await dragAndDropPage.getSecondElementText()).toBe('B');
  });
});
