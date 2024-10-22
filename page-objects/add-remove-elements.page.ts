import { expect, type Page } from '@playwright/test';
import { IAddRemoveElementsPageLocators } from '../interfaces/add-remove-elements-page.interface';


export class AddRemoveElementsPage {
  readonly page: Page;
  readonly locators: IAddRemoveElementsPageLocators

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      addRemoveElementsHeader: page.locator('h3', { hasText: 'Add/Remove Elements' }),
      addElementButton: page.locator('button', { hasText: "Add Element" }),
      deleteButton: page.locator('button', { hasText: "Delete" }),
    }
  }

  async goto() {
    await this.page.goto('/add_remove_elements/');
    await this.verifyHeaderPresent();
  }

  async clickAddElementsButton(times: number = 1) {
    for (let i = 0; i < times; i++) {
      await this.locators.addElementButton.click();
    }
  }

  async clickDeleteButton(number: number = 1) {
    await this.locators.deleteButton.locator(`nth=${number - 1}`).click()
  }

  async verifyHeaderPresent() {
    expect(this.locators.addRemoveElementsHeader).toBeVisible();
  }

  async verifyDeleteButtonsAmountEqual(amount: number) {
    expect(this.locators.deleteButton).toHaveCount(amount);
  }
}
