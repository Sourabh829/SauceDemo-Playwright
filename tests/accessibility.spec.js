// tests/accessibility.spec.js
const { test } = require('@playwright/test');
const { injectAxe, checkA11y } = require('@axe-core/playwright');
const { LoginPage } = require('../pages/login.page');
const axe = require('@axe-core/playwright');  // Change import style

test('Accessibility check on All Items page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  // Navigate directly to login page
  await page.goto('https://www.saucedemo.com/');
  
  // Perform login
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Wait for inventory page to load
  await page.waitForURL('**/inventory.html');
  
  
  // Add stability check
  await page.waitForLoadState('networkidle');
  
  // Initialize axe-core
  //await injectAxe(page);  

  // Verify axe injection
  console.log('Attempting axe injection...');
  await axe.injectAxe(page);  // Use namespace import
  console.log('Injection successful!');
  
  // Basic check
  await axe.checkA11y(page);
  
  // Run accessibility checks
  await checkA11y(page, {
    includedImpacts: ['critical', 'serious'],
    axeOptions: {
      runOnly: {
        type: 'tag',
        values: ['wcag2aa']
      }
    }
  });
});