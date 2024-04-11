const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://www.saucedemo.com/v1/index.html", // defining the visit url
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Define the pattern for locating test files in the 'cypress/integration/tests' directory with a '.js' extension.
    // Cypress will automatically run tests that match this pattern.
    specPattern: "cypress/integration/tests/*.js", //
  },
});
