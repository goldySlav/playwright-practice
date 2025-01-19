import { type Page, type Locator } from '@playwright/test';
import { IIFramePageLocators } from '../interfaces/iframe.interface';
import { BasicPage } from './basic.page';

export class IFramePage extends BasicPage {
  readonly locators: IIFramePageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'iFrame' }),
      iFrame: page.frameLocator('iframe'),
      iFrameText: (): Locator => this.locators.iFrame.locator('#tinymce'),
    };
    this.url = '/iframe';
  }

  async goto() {
    await this.page.goto(this.url);
    await this.verifyHeaderPresent();
    await this.page.waitForLoadState();
  }

  async getIFrameInnerText() {
    return await this.locators.iFrameText().textContent();
  }
}
