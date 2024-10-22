import { expect, type Page, type Locator } from '@playwright/test';
import { IDragAndDropPageLocators } from '../interfaces/drag-and-drop-page.interface';


export class DragAndDropPage {
  readonly page: Page;
  readonly locators: IDragAndDropPageLocators

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Drag and Drop' }),
      firstColumn: page.locator('div#column-a'),
      secondColumn: page.locator('div#column-b'),
    }
  }

  async goto() {
    await this.page.goto('/drag_and_drop');
    await this.verifyHeaderPresent();
  }

  async getFirstElementText() {
    return await this.locators.firstColumn.textContent()
  }

  async getSecondElementText() {
    return await this.locators.secondColumn.textContent()
  }

  async dragFromLeftToRight() {
    await this.locators.firstColumn.dragTo(this.locators.secondColumn)
  }

  async dragFromRightToLeft() {
    await this.locators.secondColumn.dragTo(this.locators.firstColumn)
  }

  async verifyHeaderPresent() {
    expect(this.locators.pageHeader).toBeVisible();
  }
}
