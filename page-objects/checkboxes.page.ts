import { expect, type Page, type Locator } from '@playwright/test';
import { ICheckboxesPageLocators } from '../interfaces/checkboxes-page.interface';
import { BasicPage } from './basic.page';

export class CheckboxesPage extends BasicPage {
  readonly locators: ICheckboxesPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Checkboxes' }),
      checkbox: function (number: number): Locator {
        return page.getByRole('checkbox').locator(`nth=${number - 1}`);
      },
    };
    this.url = '/checkboxes';
  }

  async checkCheckbox(number: number) {
    await this.locators.checkbox(number).check();
  }

  async uncheckCheckbox(number: number) {
    await this.locators.checkbox(number).uncheck();
  }

  async verifyCheckboxChecked(number: number) {
    expect(this.locators.checkbox(number)).toBeChecked();
  }

  async verifyCheckboxUnchecked(number: number) {
    expect(this.locators.checkbox(number)).not.toBeChecked();
  }
}
