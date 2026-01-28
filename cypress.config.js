import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  video: false,
  env: {
    // CYPRESS_baseUrl: secrets.DEV_ENV_URL,
    CYPRESS_USER_EMAIL: vars.DEV_ENV_USER,
    // CYPRESS_USER_PASSWORD: secrets.DEV_ENV_PASSWORD
  },
  e2e: {
    baseUrl: CYPRESS_baseUrl,
    viewportHeight: 958,
    viewportWidth: 1920,
    env: {
      USER: CYPRESS_USER_EMAIL,
      PASS: CYPRESS_USER_PASSWORD
    },
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    setupNodeEvents(on) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.table(message);
          return null;
        }
      });
    }
  }
});
