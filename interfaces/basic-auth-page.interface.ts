import { type Locator } from '@playwright/test';

export interface IBasicAuthPageLocators {
    pageHeader: Locator
    congratsText: Locator
    loginFailText: Locator
}