const { Selector, t } = require('testcafe');

module.exports = {
    onHomepageDE: async function () {
        await t
        .navigateTo('https://www.directferries.de?dealfinderVersion=A')
        .click(Selector('[data-cky-tag="accept-button"]'));
    },
    onHomepageUK: async function () {
        await t
        .navigateTo('https://www.directferries.co.uk?dealfinderVersion=A');
    },
    onHomepageIT: async function () {
        await t
        .navigateTo('https://www.directferries.it?dealfinderVersion=A')
        .click(Selector('[data-cky-tag="accept-button"]'));
    },
    onAccountPage: async function () {
        await t
        .navigateTo('https://account.directferries.com/?culture=en-GB');
    }
}
