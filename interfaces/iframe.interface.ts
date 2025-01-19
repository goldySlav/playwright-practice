import { type Locator, type FrameLocator } from '@playwright/test';
import { IBasicPageLocators } from './basic-page.interface';

export interface IIFramePageLocators extends IBasicPageLocators {
  iFrame: FrameLocator;
  iFrameText: () => Locator;
}
