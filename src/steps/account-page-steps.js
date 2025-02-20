const { Given, When, Then } = require("@cucumber/cucumber");
const accountPage = require("../methods/account-page-methods.js");

Given('I login with incorrect details', async function () {
    await accountPage.loginWithDetails("invalid email", "invalid password");
});
Then('I see an error message', async function () {
    await accountPage.getErrorMessage();
});