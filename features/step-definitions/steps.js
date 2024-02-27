const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');


Given(/^I am on the Login page$/, async () => {
    await LoginPage.open()
});

When(/^I login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
});

Then(/^I should see the Home page$/, async () => {
    await HomePage.validateHomePage()

    // Just an add-on notes
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
    // Given I am on the Login page
    // When I login with "standard_user" credential
    // Then I should see the Home page

Then(/^I should see error of "(.*)"$/, async (message) => {
    await LoginPage.validateLockedOutUserError(message)
});
    // When I login with "locked_out_user" credential
    // Then I should see error of "Epic sadface: Sorry, this user has been locked out."