import { expect, type Page } from '@playwright/test';
import { ITheInternetPageLocators } from '../interfaces/the-internet-page.interface';


export class TheInternetPage {
  public page: Page;
  readonly locators: ITheInternetPageLocators

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      pageHeader: page.locator('h1', { hasText: 'Welcome to the-internet' }),
      addRemoveElementsLink: page.locator('a', { hasText: 'Add/Remove Elements' }),
      basicAuthLink: page.locator('a', { hasText: 'Basic Auth' }),
      checkboxesLink: page.locator('a', { hasText: 'Checkboxes' }),
      dragAndDropLink: page.locator('a', { hasText: 'Drag and Drop' }),
    }
  }

  async goto() {
    await this.page.goto('/');
    await this.verifyHeaderPresent();
  }

  async verifyHeaderPresent() {
    expect(this.locators.pageHeader).toBeVisible();
  }

  async clickAddRemoveElements() {
    await this.locators.addRemoveElementsLink.click();
  }

  async clickBasicAuth() {
    await this.locators.basicAuthLink.click();
  }

  async clickCheckboxes() {
    await this.locators.checkboxesLink.click();
  }

  async clickDragAndDrop() {
    await this.locators.dragAndDropLink.click();
  }
}