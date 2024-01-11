import { test, expect } from '@playwright/test';
import { openHomePage } from '../actions/home';
import { clickLoginBtn, login } from '../actions/login';
import { clickFirstMessageFromList, clickMessageTab, messageSent, sendMessage } from '../actions/messages';

test.describe.only('Messages', () => {

	test.beforeEach(async ({ page }, testInfo) => {
		await openHomePage(page);
		await clickLoginBtn(page);
		let pages = await page.context().pages();
		let extensionPage = pages[1];
		expect(await extensionPage.title()).toContain('Indeed.com');
		await login(page, extensionPage);
		await page.waitForLoadState();
    });

    test('send message', async ({ page }) => {
        const messageToSend = 'testing message';
        await clickMessageTab(page);
        await clickFirstMessageFromList(page);
        await sendMessage(page, messageToSend);
        expect(await messageSent(page)).toContainText(messageToSend);
    });
});
    