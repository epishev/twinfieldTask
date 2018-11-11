let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',
    chromeDriver: './node_modules/protractor/selenium/chromedriver',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome'
        // browserName: 'firefox'
    },
    specs: ['./test/*.js'],
    allScriptsTimeout: 11000,
    getPageTimeout: 120000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 30000
    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
    }
};
