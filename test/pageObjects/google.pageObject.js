class GooglePage {
    constructor() {
        this.input = element(by.css('input#lst-ib'));
        this.searchButton = element(by.css('input[name=btnK]'));
        this.resultLinkCSSLocator = 'div.TbwUpd';
    }

    async search(value) {
        await this.input.sendKeys(value);
        await this.searchButton.click();
    }

    async getAllLinks() {
        let results = [];
        let linksArray = await element.all(by.css(this.resultLinkCSSLocator));
        for (let i = 0; i < linksArray.length; i++) {
            results.push(await linksArray[i].getText());
        }
        return results;
    }

    async getFirstResultLink() {
        let linksArray = await this.getAllLinks();
        return linksArray[0];
    }

    async getLinkThatContains(param) {
        let linksArray = await this.getAllLinks();
        let results = [];
        for (let i = 0; i < linksArray.length; i++) {
            if (linksArray[i].includes(param)) {
                results.push(linksArray[i]);
            }
        }
        return results;
    }
}

module.exports = GooglePage;
