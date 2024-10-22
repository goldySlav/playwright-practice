import { expect, type Page } from '@playwright/test';
import { IAddRemoveElementsPageLocators } from '../interfaces/add-remove-elements-page.interface';
import { BasicPage } from './basic.page';


export class AddRemoveElementsPage extends BasicPage {
  readonly locators: IAddRemoveElementsPageLocators

  constructor(page: Page) {
    super(page)
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Add/Remove Elements' }),
      addElementButton: page.locator('button', { hasText: "Add Element" }),
      deleteButton: page.locator('button', { hasText: "Delete" }),
    }
    this.url = '/add_remove_elements/'
  }

  async clickAddElementsButton(times: number = 1) {
    for (let i = 0; i < times; i++) {
      await this.locators.addElementButton.click();
    }
  }

  async clickDeleteButton(number: number = 1) {
    await this.locators.deleteButton.locator(`nth=${number - 1}`).click()
  }

  async verifyDeleteButtonsAmountEqual(amount: number) {
    expect(this.locators.deleteButton).toHaveCount(amount);
  }
}
