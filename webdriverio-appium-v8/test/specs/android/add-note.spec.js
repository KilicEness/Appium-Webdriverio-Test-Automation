describe('Add Notes', () => {
    it('Skip Tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add a note, save changes & verify note', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        await driver.saveScreenshot('note-screen.png');

        // add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue("Fav Anime List");

        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue("Naruto\nOnePiece\nAOT");

        //Save the Changes
        await driver.back();
        await driver.back();

        //assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
            .toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Naruto\nOnePiece\nAOT");

    });
});