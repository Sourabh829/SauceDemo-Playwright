// tests/cartCheckout.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { InventoryPage } = require('../pages/inventory.page');
const { CartPage } = require('../pages/cart.page');

test('Add multiple items and checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addItemsToCart(2);
  await inventoryPage.navigateToCart();
  await cartPage.checkout();
  await cartPage.fillCheckoutInfo('John', 'Doe', '12345');
  await cartPage.finishCheckout();

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
