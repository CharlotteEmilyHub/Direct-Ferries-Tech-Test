const { Selector, t } = require('testcafe');

function getTextInput(name) {
    return Selector(`[name="${name}"]`);
}

function getSignInButton() {
    return Selector('button.amplify-button.amplify-field-group__control.amplify-button--primary[type="submit"]');
}

function getErrorMessage() {
    return Selector('#df-social-error.amplify-flex.amplify-alert.amplify-alert--error');
}

module.exports = {
    loginWithDetails: async function (email, password) {
        await t
        .typeText(getTextInput("username"), email) 
        .typeText(getTextInput("password"), password) 
        .click(getSignInButton());
    },
    getErrorMessage: async function () {
        await t
            .expect(getErrorMessage().visible).ok('Error message not displayed', { timeout: 100000 });
    }
};