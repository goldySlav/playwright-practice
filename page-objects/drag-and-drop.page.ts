import { type Page } from '@playwright/test';
import { IDragAndDropPageLocators } from '../interfaces/drag-and-drop-page.interface';
import { BasicPage } from './basic.page';

export class DragAndDropPage extends BasicPage {
  readonly locators: IDragAndDropPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Drag and Drop' }),
      firstColumn: page.locator('div#column-a'),
      secondColumn: page.locator('div#column-b'),
    };
    this.url = '/drag_and_drop';
  }

  async getFirstElementText() {
    return await this.locators.firstColumn.textContent();
  }

  async getSecondElementText() {
    return await this.locators.secondColumn.textContent();
  }

  async dragFromLeftToRight() {
    await this.locators.firstColumn.dragTo(this.locators.secondColumn);
  }

  async dragFromRightToLeft() {
    await this.locators.secondColumn.dragTo(this.locators.firstColumn);
  }
}
