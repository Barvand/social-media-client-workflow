const { defineConfig } = require("cypress");
require("dotenv").config(); // Load environment variables from .env file

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    password: process.env.USER_PASSWORD,
  },
});
