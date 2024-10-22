import { type Locator } from '@playwright/test';

export interface IAddRemoveElementsPageLocators {
    pageHeader: Locator
    addElementButton: Locator
    deleteButton: Locator
}