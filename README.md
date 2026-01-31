Tamil Transliteration Automated Tests - How to Run

Prerequisites:
---------------
1. Node.js installed (v18 or later recommended). Check with:
   node -v
   npm -v

2. VSCode installed.

3. Internet access to load https://tamil.changathi.com/

Setup:
------
1. Clone this repository or copy the project folder to your machine.

2. Open the project folder in VSCode.

3. Install dependencies:
   npm install

4. Install Playwright browsers (Chromium, Firefox, WebKit):
   npx playwright install

Running the Tests:
-----------------
1. Run all tests:
   npx playwright test

2. Run a specific test file:
   npx playwright test tests/first-test.spec.js

3. Run a specific test case by name:
   npx playwright test tests/first-test.spec.js --grep "Test 4 - Convert naan romba sombal aa irunthen but veelaya moodichiten"

   Note: The --grep option matches the test title. Use quotes around the full test name.

4. Run tests in headed (UI) mode (to see the typing happening):
   npx playwright test --headed

5. Run a single test in headed mode:
   npx playwright test tests/first-test.spec.js --grep "Test 4" --headed
