import { type Page } from '@playwright/test';
import { IEntryAdPageLocators } from '../interfaces/entry-ad-page.interface';
import { BasicPage } from './basic.page';

export class EntryAdPage extends BasicPage {
  readonly locators: IEntryAdPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Entry Ad' }),
    };
    this.url = '/entry_ad';
  }

  async getPopupPage(): Promise<Page> {
    return this.page.on('popup', async (popup) => {
      await popup.waitForLoadState();
      return popup;
    });
  }

  async getPopupTitle() {
    const popup = await this.getPopupPage();
    const title = popup.locator('h3').locator('nth=1');
    return title.textContent();
  }

  async closePopup() {
    const popup = await this.getPopupPage();
    await popup.getByText('Close', { exact: true }).click();
  }
}
