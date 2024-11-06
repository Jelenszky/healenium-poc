const {I} = inject();
const {expect} = require("chai");

Then(/^The text of "([^"]+)" is( not)? visible$/, async (text, condition) => {
    condition ? await I.dontsee(text) : await I.see(text);
});

Then(/^The "([^"]+)" locator should( not)? be visible(?: with waiting exactly "([^"]+)" seconds)?$/, async (selector, condition, exactWait) => {
    const timeout = exactWait ? exactWait : 5;
    await I.waitForVisible(selector, timeout);
});

Then(/^The page url should( not)? contain "([^"]+)"$/, async (condition, urlPart) => {
    condition ? await I.dontseeInCurrentUrl(urlPart) : await I.seeInCurrentUrl(urlPart);
});

Then(/^The "([^"]+)" locator should contain the "([^"]+)" attribute$/, async (selector, attributeName) => {
    const attributes = await I.grabAttributeFromAll(selector, attributeName);
    console.log(attributes);
});

Then(/^The "([^"]+)" locator should be (enabled|disabled)$/, async (selector, condition) => {
    const isDisabled = await I.grabAttributeFromAll(selector, 'disabled');
    console.log(`Disabled attribute for ${selector}:`, isDisabled);
    if (condition === 'disabled') {
        expect(isDisabled.length).greaterThan(0);
    } else {
        expect(isDisabled.length).equal(0);
    }
});

