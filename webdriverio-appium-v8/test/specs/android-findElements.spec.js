describe('Android Elements Test', () => {
    it('Find element by accessibility id', async () => {
        //Find element by accessibility id
        const appOption = await $('~App');

        //Click on element
        await appOption.click();

        //Assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async () => {
        //Find element by class name
        const className = await $('android.widget.TextView'); //We have a lot of instance of this class.
        console.log(await className.getText());

        //Assertion
        await expect(className).toHaveText('API Demos');//But we can a specific choose like that
    });

    xit('Find elements by Xpath', async () => { //when you add x its means skip this test
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //Find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //Find by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //Find by class - assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('Find elements by UIAutomator', async () => {
        //find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    // it('Find multiple elements', async () => {
    //     const expectedList = [
    //         'API Demos',
    //         "Access'ibility",
    //         'Accessibility',
    //         'Animation',
    //         'App',
    //         'Content',
    //         'Graphics',
    //         'Media',
    //         'NFC',
    //         'OS',
    //         'Preference',
    //         'Text',
    //         'Views'
    //     ]
    //     const actualList = []

    //     // find multiple elements
    //     const textList = await $$('android.widget.TextView');

    //     // loop through them
    //     for (const element of textList) {
    //         actualList.push(await element.getText());
    //     }

    //     // assert the list
    //     await expect(actualList).toEqual(expectedList);
    // });

    it.only('working with text field', async () => {
        //Access the auto complete screen
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();

        //Enter the country name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');

        //Verify the country name
        await expect(textField).toHaveText('Canada');
    });

});
