import { expect, type Page } from '@playwright/test';
import { IBasicPageLocators } from '../interfaces/basic-page.interface';

export class BasicPage {
  readonly page: Page;
  public locators: IBasicPageLocators;
  protected url: string;

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Checkboxes' }),
    };
  }

  async goto() {
    await this.page.goto(this.url);
    await this.verifyHeaderPresent();
  }

  async verifyHeaderPresent() {
    await this.page.waitForLoadState('domcontentloaded');
    expect(this.locators.pageHeader).toBeVisible();
  }
}
