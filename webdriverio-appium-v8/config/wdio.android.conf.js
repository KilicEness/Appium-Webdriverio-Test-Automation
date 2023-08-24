const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================

config.port = 4723;

config.specs = [
    // ToDo: define location for spec files here
    path.join(process.cwd(), './test/specs/android/delete-note-screen*.js')
];

// ============
// Capabilities
// ============

config.capabilities = [{
    'appium:platformName': 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Zebra Emulator API 30',
    'appium:automationName': 'UIAutomator2',
    'appium:app': path.join(process.cwd(), 'app/android/ColorNote-Notepad.apk'),
    'appium:autoGrantPermissions': true
}];

exports.config = config;