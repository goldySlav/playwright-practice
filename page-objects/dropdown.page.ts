import { expect, type Page, type Locator } from '@playwright/test';
import { IDropdownPageLocators } from '../interfaces/dropdown-page.interface';
import { BasicPage } from './basic.page';

interface IDropdownOptions {
  default: string;
  option1: string;
  option2: string;
}

export class DropdownPage extends BasicPage {
  readonly locators: IDropdownPageLocators;
  readonly options: IDropdownOptions;

  constructor(page: Page) {
    super(page);
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Dropdown List' }),
      dropdown: page.locator('#dropdown'),
      customOption: function (text: string): Locator {
        return page.locator('option', { hasText: text });
      },
      option1: () => this.locators.customOption(this.options.option1),
      option2: () => this.locators.customOption(this.options.option2),
      defaultOption: () => this.locators.customOption(this.options.default),
      selectedOption: page.locator('option[selected="selected"]'),
    };
    this.url = '/dropdown';
    this.options = {
      default: 'Please select an option',
      option1: 'Option 1',
      option2: 'Option 2',
    };
  }

  async getSelectedOption() {
    return await this.locators.selectedOption.textContent();
  }

  async selectOption(option: string) {
    await this.locators.dropdown.selectOption(option);
  }

  async verifyOptionPresent(option: string) {
    expect(this.locators.customOption(option)).toBeVisible();
  }
}
