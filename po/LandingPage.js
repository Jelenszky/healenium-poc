const { I } = inject();

module.exports = {

  // Locators:
  logo: '.octicon-mark-github',
  searchButton: 'div.color-fg-muted > svg.octicon-search',
  signIn: 'div.HeaderMenu-link-wrap > a[href*=login]',
  
  // Methods:
  async goto() {
    return I.amOnPage('https://github.com/');
  },

  async clickSignInButton() {
    return I.click(this.signIn);
  },

  // Verifying Element Visibility:

  async seeLogo() {
    return I.seeElement(this.logo);
  },

  async seeSearchButton() {
    return I.seeElement(this.searchButton);
  },

  async seeSignInButton() {
    return I.seeElement(this.signIn);
  },

};