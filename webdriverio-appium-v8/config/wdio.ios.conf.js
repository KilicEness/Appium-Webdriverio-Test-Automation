const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/ios/webview*.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "16.0",
    "appium:deviceName": "iPhone 14 Pro",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/wdioNativeDemoApp.app"),
  }
]

exports.config = config;