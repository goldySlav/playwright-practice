import { type Locator } from '@playwright/test';
import { IBasicPageLocators } from './basic-page.interface';

export interface IBasicAuthPageLocators extends IBasicPageLocators {
    congratsText: Locator
    loginFailText: Locator
}