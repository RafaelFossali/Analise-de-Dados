exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],    
    ],
    services: [
        ['chromedriver', {
            chromedriverCustomPath: './node_modules/chromedriver/lib/chromedriver/chromedriver'
        }]
      ],
      capabilities: [{
          browserName: 'chrome',
          'goog:chromeOptions': {
              args: ['--no-sandbox', '--disable-dev-shm-usage']
          }
      }]           
};


