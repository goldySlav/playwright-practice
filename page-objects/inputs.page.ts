import { expect, type Page } from '@playwright/test';
import { IInputsPageLocators } from '../interfaces/inputs-page.interface';
import { BasicPage } from './basic.page';

export class InputsPage extends BasicPage {
  readonly locators: IInputsPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Inputs' }),
      numbersInput: page.locator('input[type="number"]'),
    };
    this.url = '/inputs';
  }

  async fillNumbersInput(text: string) {
    await this.locators.numbersInput.type(text);
  }
}
