// pages/cart.page.js
class CartPage {
  constructor(page) {
    this.page = page;
  }

  async checkout() {
    await this.page.click('[data-test="checkout"]');
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', postalCode);
    await this.page.click('[data-test="continue"]');
  }

  async finishCheckout() {
    await this.page.click('[data-test="finish"]');
  }
}

module.exports = { CartPage };
