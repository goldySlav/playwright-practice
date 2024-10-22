import { type Locator } from '@playwright/test';

export interface IBasicAuthPageLocators {
    basicAuthHeader: Locator
    congratsText: Locator
    loginFailText: Locator
}