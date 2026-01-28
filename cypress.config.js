import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  video: false,
  e2e: {
    baseUrl: process.env.CYPRESS_URL,
    viewportHeight: 958,
    viewportWidth: 1920,
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
