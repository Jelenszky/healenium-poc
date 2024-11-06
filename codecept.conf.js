exports.config = {
    tests: './test/*.feature',
    output: './output',
    helpers: {
        WebDriver: {
            url: 'https://elenastepuro.github.io/test_env/index.html',
            smartWait: 5000,
            browser: "chrome",
            timeouts: {
                script: 60000,
                "page load": 10000
            },
            windowSize: '1920x1080', // Set to Full HD
            hostname: 'localhost',
            port: 8085,
            protocol: 'http',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'],
                },
            }
        }
    },
    include: {
        landingPage: './po/LandingPage.js',  // Make sure this path is correct
        loginPage: './po/LoginPage.js',
        homePage: './po/HomePage.js',
        overViewPage: './po/OverViewPage.js'
      },
    gherkin: {
        features: './test/*.feature', 
        steps: ['./step-definitions/preparation.js', './step-definitions/action.js', './step-definitions/validation.js','./step-definitions/uisteps.js']
    },
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    },
    name: 'healenium-poc-solution'
};
