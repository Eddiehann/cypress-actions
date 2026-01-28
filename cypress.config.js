import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  video: false,
  e2e: {
    baseUrl: process.env.CYPRESS_baseUrl,
    viewportHeight: 958,
    viewportWidth: 1920,
    env: {
      USER: process.env.CYPRESS_USER_EMAIL,
      PASS: process.env.CYPRESS_USER_PASSWORD
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
