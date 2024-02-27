const { $, expect } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    // NOTE: These will be our elements collection. 
    /**
     * define selectors using getter methods
     */
    get fieldUsername () {
        return $('#user-name');
    }

    get fieldPassword () {
        return $('#password');
    }

    get buttonLogin () {
        return $('#login-button');
    }

    LockedOutUserError = (dynamicMessage) => 
        $(`//h3[text()="${dynamicMessage}"]`)
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async login (username) {
        console.log(`USERNAME: ${process.env.USERNAME_STANDARD_USER}`)
        console.log(`PASSWORD: ${process.env.PASSWORD_SAUCEDEMO}`)

        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError (message) {
        await this.LockedOutUserError(message).waitForDisplayed({ timeout: 2500 })
        await expect(this.LockedOutUserError(message)).toBeDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
        // by default, it's going to redirect the login page directly to https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();
