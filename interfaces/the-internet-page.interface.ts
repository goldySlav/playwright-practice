import { type Locator } from '@playwright/test';
import { IBasicPageLocators } from './basic-page.interface';

export interface ITheInternetPageLocators extends IBasicPageLocators {
  addRemoveElementsLink: Locator;
  basicAuthLink: Locator;
  checkboxesLink: Locator;
  dragAndDropLink: Locator;
  dropdownLink: Locator;
}
