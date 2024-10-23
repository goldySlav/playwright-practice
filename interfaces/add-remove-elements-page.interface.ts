import { type Locator } from '@playwright/test';
import { IBasicPageLocators } from './basic-page.interface';

export interface IAddRemoveElementsPageLocators extends IBasicPageLocators {
  addElementButton: Locator;
  deleteButton: Locator;
}
