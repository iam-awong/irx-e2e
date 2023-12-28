import { test, expect } from '@playwright/test';
import { openHomePage } from '../actions/home';
import { clickLoginBtn, login } from '../actions/login';
import { clickAdBtn, clickSwitchAdBtn } from '../actions/navbar';

test.describe('Switch ad', () => {

	test.beforeEach(async ({ page }, testInfo) => {
		await openHomePage(page);
		await clickLoginBtn(page);
		let pages = await page.context().pages();
		let extensionPage = pages[1];
		expect(await extensionPage.title()).toContain('Indeed.com');
		await login(page, extensionPage);
		await page.waitForLoadState();
	});

    test('User switch ad ', async ({ page }) => {
    	await clickAdBtn(page);
		const currentAd =  await page.locator('span.css-e5x5ry').textContent();
		const lastAd =  await page.locator('span.css-sfm6zc').last().textContent();
		expect(currentAd).not.toEqual(lastAd);
    	await clickSwitchAdBtn(page, lastAd!);
		await page.waitForLoadState();
		const newCurrentAd =  await page.locator('span.css-1cawtvj').textContent();
		expect(newCurrentAd).toEqual(lastAd);
	});
});