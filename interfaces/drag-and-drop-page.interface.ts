import { type Locator } from '@playwright/test';
import { IBasicPageLocators } from './basic-page.interface';

export interface IDragAndDropPageLocators extends IBasicPageLocators {
    firstColumn: Locator
    secondColumn: Locator
}