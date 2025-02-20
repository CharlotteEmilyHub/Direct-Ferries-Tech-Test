const { Given, When, Then } = require("@cucumber/cucumber");
const navigation = require("../methods/dealfinder-methods.js");

Given('I have selected route {string} at index {int}', async function (t, [route, index]) {
    await navigation.selectRoute('single', route, index);
});

Given('I have selected return route {string} at index {int}', async function (t, [route, index]) {
    await navigation.selectRoute('return', route, index);
});

Given('I click different details for return trip', async function (t) {
    await navigation.clickDifferentDetails();
});

Given('I click Search on the dealfinder', async function (t) {
    await navigation.clickSearch();
});

