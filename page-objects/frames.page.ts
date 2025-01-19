import { type Page } from '@playwright/test';
import { IFramesPageLocators } from '../interfaces/frames.interface';
import { BasicPage } from './basic.page';

export class FramesPage extends BasicPage {
  readonly locators: IFramesPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Frames' }),
      nestedFramesLink: page.locator('a', { hasText: 'Nested Frames' }),
      iFrameLink: page.locator('a', { hasText: 'iFrame' }),
    };
    this.url = '/frames';
  }

  async clickNestedFramesLink() {
    await this.locators.nestedFramesLink.click();
  }

  async clickIFrameLink() {
    await this.locators.iFrameLink.click();
  }
}
