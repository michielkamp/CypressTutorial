const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wuzup1',
  e2e: {
    baseUrl: 'https://qacart-todo.herokuapp.com',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
