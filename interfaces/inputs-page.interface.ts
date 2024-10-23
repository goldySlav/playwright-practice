import { type Locator } from '@playwright/test';
import { IBasicPageLocators } from './basic-page.interface';

export interface IInputsPageLocators extends IBasicPageLocators {
  numbersInput: Locator;
}
