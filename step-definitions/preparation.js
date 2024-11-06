const {I} = inject();

Given(/^I opened the "([^"]*)" page$/, (pageUrlPart) => {
    I.amOnPage(pageUrlPart);
});
