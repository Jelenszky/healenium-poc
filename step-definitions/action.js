const { I } = inject();

When(/^The "([^"]+)" locator is clicked$/, (selector) => {
   I.click(selector);
});

When(/^([^"]+) second(s)? awaited$/, (seconds) => {
    I.wait(seconds);
});

When(/The page is refreshed/, async () => {
    await I.refreshPage();
});

When(/The "([^"]+)" input field is filled with "([^"]+)"$/, async (selector, text) => {
    await I.fillField(selector, text);
});
