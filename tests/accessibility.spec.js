const { test } = require('@playwright/test');
const axe = require('@axe-core/playwright').default; // 🛠️ Correct import
const { LoginPage } = require('../pages/login.page');

test('Accessibility check on All Items page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');
  await page.waitForLoadState('networkidle');

  console.log('Attempting axe injection...');
  await axe.injectAccessibilityEngine(page);  // ✅ Now it will work!
  console.log('Injection successful!');

  await axe.analyzeAccessibility(page, {
    includedImpacts: ['critical', 'serious'],
    axeOptions: {
      runOnly: {
        type: 'tag',
        values: ['wcag2aa']
      }
    }
  });
});
