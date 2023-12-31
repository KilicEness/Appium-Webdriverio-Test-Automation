require('dotenv').config()
const path = require('path');
const { config } = require('./wdio.shared.conf');

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
    // ToDo: define location for spec files here
    path.join(process.cwd(), './test/specs/android/delete-note-screen*.js')
];

// ============
// Capabilities
// ============

config.capabilities = [{
    platformName: 'Android',
    'appium:platformVersion': '9.0',
    'appium:deviceName': 'Google Pixel 3',
    'appium:automationName': 'UIAutomator2',
    'appium:app': "bs://fc7b12bb24404e003b284aa4edb6623fde9750a0",
    'appium:autoGrantPermissions': true
}];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;