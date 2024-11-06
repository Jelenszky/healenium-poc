const { I, landingPage, loginPage, homePage, overViewPage } = inject();
const { expect } = require('chai');


// The following maps the Given-When-Then keywords from the Feature to the functions
Given('I am on the landing page', async () => {
  await landingPage.goto();
});

Then('I should see the title {string}', (title) => {
  I.seeInTitle(title);
});

Then('I should see the GitHub logo', async () => {
  await landingPage.seeLogo();
});

Then('I should see the search button', async () => {
  landingPage.seeSearchButton();
});

Then('I should see the sign in button', async () => {
    landingPage.seeSignInButton();
  });

When('I click on the sign in button', async () => {
    await landingPage.clickSignInButton();
});

Then('I should see the login page', async () => {
    await loginPage.seeSignInButton(); // This function has to be defined in LoginPage.js
});

When('I login with test user credentials', async () => {
    await loginPage.loginWithTestUserCredentials();
});

Then('I should see the home page', async () => {
    await homePage.seeHeaderText('Home');
});

Then('I should see the create menu button', async () => {
    await homePage.seeCreateMenuButton();
});

Then('I should see the search field', async () => {
    await homePage.seeSearchField();
});  

When('I search for repositories where owner is {string}', async function (owner) {
    this.owner = owner;
    await homePage.searchForRepositories(`owner:${owner}`);
  });

Then('I should see more than 0 repositories', async function () {
  const elementText = await overViewPage.getNumberOfRepositories();
  const numberOfRepositories = parseInt(elementText) || 0; 
  expect(numberOfRepositories).to.be.above(0);
});  

