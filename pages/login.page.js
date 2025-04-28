// pages/login.page.js
class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.goto('/');
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login-button"]');
    await this.page.waitForSelector('.inventory_list'); // ✅ Ensure login is complete
  }
}

module.exports = { LoginPage };
