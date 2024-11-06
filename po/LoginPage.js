const { I } = inject();

module.exports = {

    // Define your locators. 
    headerText: 'h1:has-text("Sign in to GitHub")',
    usernameField: '#login_field',
    passwordField: '#password',
    signInButton: 'input.js-sign-in-button',

    // action methods
    async loginWithTestUserCredentials() {
        I.fillField(this.usernameField,"TestUser2024Debrecen");
        I.fillField(this.passwordField, "testaccount12345678");
        I.click(this.signInButton);
    },

    async seeSignInButton() {
        return I.seeElement(this.signInButton); // seeElement checks if the element is visible
    }

};