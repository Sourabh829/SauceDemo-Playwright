// tests/visual.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('Visual regression test on All Items page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveScreenshot('all-items-page.png');
});
