const { Selector, t } = require('testcafe');

async function checkForRightRoute(portOut, portRet) {
    return await Selector('div.rsDeets').withText(portOut).withText(portRet).visible
}
module.exports = {
    waitForQuotes: async function () {
        await t
            .expect(Selector('.opLoader').visible).notOk('Quotes haven\'t loaded', { timeout: 100000 })
    },
    checkRouteIsPresent: async function(portOut, portRet){
        await t.expect(await checkForRightRoute(portOut, portRet)).eql(true, "You are not viewing the right route for the quotes page")
    }
}
