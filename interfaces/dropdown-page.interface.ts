import { type Locator } from '@playwright/test';
import { IBasicPageLocators } from './basic-page.interface';

export interface IDropdownPageLocators extends IBasicPageLocators {
    dropdown: Locator
    selectedOption: Locator
    customOption: Function
    defaultOption: Function
    option1: Function
    option2: Function
}