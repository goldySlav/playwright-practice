Playwright tests practice

## Install:

1. Clone/Fork the repo
2. Run `npm i` in terminal to install all dependencies
3. Run `npx playwright install` in terminal to install playwright's browsers
4. Run `npm run prepare` to properly install Husky (needed for automatic code prettifying)

## Run tests options:

1. `npm run test:e2e` to run ALL tests on CHOSEN browsers (by default: Desktop Chrome, Desktop Firefox)
2. `npm run test:e2e:chromium` to run ALL tests on CHROMIUM browser (Desktop Google Chrome)
3. `npm run test:e2e:firefox` to run ALL tests on FIREFOX browser (Desktop Firefox)
4. `npm run test:e2e:webkit` to run ALL tests on WEBKIT browser (Desktop Safari)
5. `npm run test:e2e:all` to run ALL tests on ALL browser (Desktop Google Chrome, Desktop Firefox, Desktop Safari)
6. `npm run test:e2e:smoke` to run `@smoke` tagged tests on CHOSEN browsers (by default: Desktop Chrome, Desktop Firefox)
7. `npm run test:e2e:non-smoke` to run ALL tests except `@smoke` tagged tests on CHOSEN browsers (by default: Desktop Chrome, Desktop Firefox)
8. `npx playwright test --headed` to run ALL tests on ALL browsers in HEADED mode
9. `npx playwright test --ui` to open UI mode and execute/debug needed tests there on demand

## Features:

1. Automatic Smoke Test Run on commit (GitHub Actions)
2. Implemented Code Design Patterns:
   - Facade
   - Page Object Model (POM)
3. Secure storage of environment variables through `.env` file
4. Authentication test with dinamycally generated `Basic` token
5. Automatic code prettifying on commit
6. Smoke test suite
7. Regression test suite
