const { I } = inject();

module.exports = {
    // Locators:
    headerTextLocator: 'h2[data-target="feed-container.feedTitle"]',
    searchField: 'span#qb-input-query',
    queryField: 'input#query-builder-test',
    createMenuButton: '#global-create-menu-anchor',
    createNewRepositoryButton: 'a[href*=new] span:has-text("New repository")',
    
    // Methods:
    async searchForRepositories(queryString) {
      I.click(this.searchField);
      I.fillField(this.queryField, queryString);
      return I.pressKey('Enter');
    },

    async clickCreateNewRepositoryButton() {
      I.click(this.createMenuButton);
      return I.click(this.createNewRepositoryButton);
    },

    // Verifying Element Text Content
    async seeHeaderText(expectedText) {
        return I.see(expectedText, this.headerTextLocator);
    },

    async seeSearchField() {
        return I.seeElement(this.searchField);
    },

    async seeCreateMenuButton() {
        return I.seeElement(this.createMenuButton);
    }

  };