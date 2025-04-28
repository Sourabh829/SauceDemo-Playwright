# SauceDemo Playwright Test Automation

## Prerequisites

- Node.js (v18.x or higher recommended)
- NPM (comes with Node.js)
- Browsers (Chromium is enough, WebKit optional)
- Recommended: VS Code with Playwright extension

## Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd saucedemo-playwright
```

2. **Install dependencies**

```bash
npm install
```

3. **Install Playwright browsers** (if not already installed)

```bash
npx playwright install
```

4. **Run the tests**

```bash
npx playwright test
```

> Note: Tests are configured to run **only on Chromium**.

5. **View the test report**

After running tests, to open the Playwright HTML report:

```bash
npx playwright show-report
```

---

## Project Structure

```
saucedemo-playwright/
 ├── tests/
 │   ├── accessibility.spec.js
 │   ├── sorting.spec.js
 │   ├── cartCheckout.spec.js
 │   └── visual.spec.js
 ├── pages/
 │   └── login.page.js, inventory.page.js
 ├── playwright.config.js
 └── package.json
```

---

## Example Commands

- Run a specific test file:

```bash
npx playwright test tests/sorting.spec.js
```

- Re-run only failed tests:

```bash
npx playwright test --last-failed
```

- Generate and open a detailed HTML report:

```bash
npx playwright test --reporter=html
npx playwright show-report
```

---

## Test Execution Reports

Reports are generated automatically in the `playwright-report/` folder after test execution. Use `npx playwright show-report` to open them in a browser.

Sample log output:

```
Running 5 tests using 1 worker
  ✔ Sorting Tests ✔ Verify Z-A Sorting (Chromium)
  ✔ Sorting Tests ✔ Verify Price High-Low Sorting (Chromium)
  ✔ Cart Tests ✔ Add multiple items and checkout (Chromium)
  ✔ Accessibility Tests ✔ Accessibility check on All Items page (Chromium)

All tests passed! 🎉
```

---

## Notes

- Only **Chromium** browser is used for testing.
- Make sure to have a stable internet connection for SauceDemo site access.
- For accessibility testing, `@axe-core/playwright` is used.

Happy Testing! 🚀

