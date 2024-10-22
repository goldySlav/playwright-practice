import { expect, type Page } from '@playwright/test';
import { IBasicAuthPageLocators } from '../interfaces/basic-auth-page.interface';
import { BasicPage } from './basic.page';

export class BasicAuthPage extends BasicPage {
  readonly locators: IBasicAuthPageLocators
  readonly authHeaderCorrect: string
  readonly authHeaderIncorrect: string

  constructor(page: Page) {
    super(page)
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Basic Auth' }),
      congratsText: page.locator('p', { hasText: 'Congratulations!' }),
      loginFailText: page.locator('body', { hasText: 'Not authorized' }),
    }
    this.authHeaderCorrect = "Basic " + btoa(`${process.env.USER_NAME}:${process.env.PASSWORD}`)
    this.authHeaderIncorrect = "Basic " + btoa(`username:password`)
    this.url = '/basic_auth/'
  }

  async setCorrectCredentials() {
    await this.page.setExtraHTTPHeaders({ Authorization: this.authHeaderCorrect })
  }

  async setIncorrectCredentials() {
    await this.page.setExtraHTTPHeaders({ Authorization: this.authHeaderIncorrect })
  }

  async verifyLoginSucceeded() {
    expect(this.locators.pageHeader).toBeVisible();
    expect(this.locators.congratsText).toBeVisible();
  }

  async verifyLoginFailed() {
    expect(this.locators.loginFailText).toBeVisible();
  }
}
