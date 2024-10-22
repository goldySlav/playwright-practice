import { expect, type Page } from '@playwright/test';
import { ITheInternetPageLocators } from '../interfaces/the-internet-page.interface';


export class TheInternetPage {
  public page: Page;
  readonly locators: ITheInternetPageLocators

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      welcomeHeader: page.locator('h1', { hasText: 'Welcome to the-internet' }),
      addRemoveElementsLink: page.locator('a', { hasText: 'Add/Remove Elements' }),
    }
  }

  async goto() {
    await this.page.goto('/');
    await this.verifyHeaderPresent();
  }

  async verifyHeaderPresent() {
    expect(this.locators.welcomeHeader).toBeVisible();
  }

  async clickAddRemoveElements() {
    await this.locators.addRemoveElementsLink.click();
  }
}