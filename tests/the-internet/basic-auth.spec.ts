/*
  Tests:
  1. Login with correct credentials
  2. Login with incorrect credentials
*/

import { expect, test } from '@playwright/test';
import { BasicAuthPage } from '../../page-objects/basic-auth.page';

test('Login with correct credentials @smoke', async ({ page }) => {
  const basicAuthPage = new BasicAuthPage(page);
  await basicAuthPage.setCorrectCredentials();
  await basicAuthPage.goto();
  await basicAuthPage.verifyLoginSucceeded();
});

test('Login with incorrect credentials', async ({ page }) => {
  const basicAuthPage = new BasicAuthPage(page);
  try {
    await basicAuthPage.setIncorrectCredentials();
    await basicAuthPage.goto();
  } catch (error) {
    expect(error.toString()).toContain('ERR_INVALID_AUTH_CREDENTIALS');
  }
});
