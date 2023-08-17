// appPackage is the full name of application 
// appActivitiy as your certain screen or functionality of that application. An application have a lot of screen or functionalities and all of those activities combined will build in your appPackage 
// Advantage of this you can access where you want screen directly, save time and helps test stabilization


describe('Android Native Feature tests', () => {
    it('Access an activity directyly', async () => {
        //access activitiy
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        //pause 3s 
        await driver.pause(3000);

        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Dialog Boxes', async () => {
        // access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        // click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        // accept Alert
        // await driver.acceptAlert();

        // dismiss Alert
        // await driver.dismissAlert();

        // get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());

        // click on the OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        // assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical Scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        // scroll to the end (not stable)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)'); //scroll one time and its speed 5

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // await $('~Secure Surfaces').click();
        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal Scrolling', async () => {
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1");

        //Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await driver.pause(3000);
    });

    it.only('Change Date', async () => {
        //Get the date
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.DateWidgets1");

        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        //Change the date
        await $('~change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('//*[@content-desc="10 September 2023"]').click();
        await $('//*[@resource-id="android:id/button1"]').click();

        //Assertion
        await expect(await date.getText()).not.toEqual(currentDate);
    });
});