import { type Locator } from '@playwright/test';
import { IBasicPageLocators } from './basic-page.interface';

export interface IFramesPageLocators extends IBasicPageLocators {
  nestedFramesLink: Locator;
  iFrameLink: Locator;
}
