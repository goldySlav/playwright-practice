import { expect, type Page, type Locator } from '@playwright/test';
import { ICheckboxesPageLocators } from '../interfaces/checkboxes-page.interface';


export class CheckboxesPage {
  readonly page: Page;
  readonly locators: ICheckboxesPageLocators

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Checkboxes' }),
      checkbox: function (number: number): Locator {
        return page.getByRole("checkbox").locator(`nth=${number - 1}`)
      }
    }
  }

  async goto() {
    await this.page.goto('/checkboxes');
    await this.verifyHeaderPresent();
  }

  async checkCheckbox(number: number) {
    await this.locators.checkbox(number).check();
  }

  async uncheckCheckbox(number: number) {
    await this.locators.checkbox(number).uncheck();
  }

  async verifyHeaderPresent() {
    expect(this.locators.pageHeader).toBeVisible();
  }

  async verifyCheckboxChecked(number: number) {
    expect(this.locators.checkbox(number)).toBeChecked();
  }

  async verifyCheckboxUnchecked(number: number) {
    expect(this.locators.checkbox(number)).not.toBeChecked();
  }
}
