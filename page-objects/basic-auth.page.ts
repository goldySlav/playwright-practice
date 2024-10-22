import { expect, type Page } from '@playwright/test';
import { IBasicAuthPageLocators } from '../interfaces/basic-auth-page.interface';

export class BasicAuthPage {
  readonly page: Page
  readonly locators: IBasicAuthPageLocators
  readonly authHeaderCorrect: string
  readonly authHeaderIncorrect: string

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      pageHeader: page.locator('h3', { hasText: 'Basic Auth' }),
      congratsText: page.locator('p', { hasText: 'Congratulations!' }),
      loginFailText: page.locator('body', { hasText: 'Not authorized' }),
    }
    this.authHeaderCorrect = "Basic " + btoa(`${process.env.USER_NAME}:${process.env.PASSWORD}`)
    this.authHeaderIncorrect = "Basic " + btoa(`username:password`)
  }

  async goto() {
    await this.page.goto('/basic_auth/');
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
