// @ts-check
const { expect } = require('@playwright/test');

/**
 * Inventory Page Model
 */
class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Sort items by given option.
   * @param {string} option
   */
  async sortBy(option) {
    await this.page.selectOption('[data-test="product-sort-container"]', option);
  }

  /**
   * Get all item names displayed.
   * @returns {Promise<string[]>}
   */
  async getAllItemNames() {
    return await this.page.$$eval('.inventory_item_name', items =>
      items.map(item => item.textContent?.trim() || '')
    );
  }

  /**
   * Get all item prices displayed.
   * @returns {Promise<number[]>}
   */
  async getAllItemPrices() {
    return await this.page.$$eval('.inventory_item_price', items =>
      items.map(item => {
        const text = item.textContent?.replace('$', '').trim();
        return text ? parseFloat(text) : 0;
      })
    );
  }

  /**
   * Add multiple items to cart.
   * @param {number} count
   */
  async addItemsToCart(count) {
    const addButtons = await this.page.$$('[data-test^="add-to-cart"]');
    for (let i = 0; i < count; i++) {
      await addButtons[i].click();
    }
  }

  /**
   * Navigate to the cart page.
   */
  async navigateToCart() {
    await this.page.click('.shopping_cart_link');
  }
}

module.exports = { InventoryPage };
