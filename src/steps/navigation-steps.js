const { Given, When, Then } = require("@cucumber/cucumber");
const navigation = require("../methods/navigation-methods.js");

Given('I am on the German homepage', async function () {
    await navigation.onHomepageDE();
});

Given('I am on the Italian homepage', async function () {
    await navigation.onHomepageIT();
});

Given('I am on the UK homepage', async function () {
    await navigation.onHomepageUK();
});

Given('I am on the UK account page', async function () {
    await navigation.onAccountPage();
});


