const { I } = inject();

module.exports = {
  // Locators...
  repoCounter: 'a#repositories-tab > span.Counter',

  // Methods...
  async getNumberOfRepositories() {
    I.wait(5);
    I.waitForElement(this.repoCounter);
    return I.grabTextFrom(this.repoCounter);
  }
};