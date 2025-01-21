/*
  Tests:
  1. Login with correct credentials
  2. Login with incorrect credentials
*/

import { test } from '@playwright/test';
import { BasicAuthPage } from '../../page-objects/basic-auth.page';

test.describe('Basic Auth Tests', () => {
  let basicAuthPage: BasicAuthPage;

  test.beforeEach(({ page }) => {
    basicAuthPage = new BasicAuthPage(page);
  });

  //1
  test('Login with correct credentials @smoke', async () => {
    await basicAuthPage.setCorrectCredentials();
    await basicAuthPage.goto();
    await basicAuthPage.verifyLoginSucceeded();
  });

  //2
  test('Login with incorrect credentials', async () => {
    await basicAuthPage.setIncorrectCredentials();
    await basicAuthPage.goto();
    await basicAuthPage.verifyLoginFailed();
  });
});
