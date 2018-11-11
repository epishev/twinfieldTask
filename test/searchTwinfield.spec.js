const GooglePage = require('./pageObjects/google.pageObject.js');

describe('Twinfield Demo Tests', function () {

    beforeEach(async function () {
        browser.ignoreSynchronization = true;
        browser.get('https://www.google.com');
    });

    it('Twinfield should be first in google search', async function () {
        let google = new GooglePage();
        await google.search('Twinfield');
        expect(google.getFirstResultLink()).toEqual('https://www.twinfield.co.uk/');
    });

    it('Open link from search results which contains word \'Twinfield\'', async function () {
        let google = new GooglePage();
        await google.search('Twinfield');
        let availableLinks = await google.getLinkThatContains('Twinfield');
        availableLinks.forEach(function (item) {
            browser.get(item);
            expect(browser.getCurrentUrl()).toContain('Twinfield');
        });
    })
});