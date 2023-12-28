import { test, expect } from '@playwright/test';
import { openHomePage } from '../actions/home';
import { clickLoginBtn, login } from '../actions/login';
import { clickCloseThanksModal, clickRateFiveStars, noThanksBtn, rateUsBtn, rateUsModalHeading, resetFeedbackCampaigns, shareFeedBackBtn, thanksModalHeading } from '../actions/rate-us';

test.describe('Rate us', () => {

	test.beforeEach(async ({ page }, testInfo) => {
		await openHomePage(page);
		await clickLoginBtn(page);
		let pages = await page.context().pages();
		let extensionPage = pages[1];
		expect(await extensionPage.title()).toContain('Indeed.com');
		await login(page, extensionPage);
		await resetFeedbackCampaigns(page);
		await page.waitForLoadState();
	});

	test('User selects no thanks ', async ({ page }) => {
		await rateUsBtn(page).click();
		await expect(rateUsModalHeading(page)).toBeVisible();
		await noThanksBtn(page).click();
		await expect(rateUsBtn(page)).toBeVisible();
	});

	test('User rates 5 stars ', async ({ page }) => {
		await rateUsBtn(page).click();
		await expect(rateUsModalHeading(page)).toBeVisible();
		await clickRateFiveStars(page);
		await shareFeedBackBtn(page).isEnabled();
		await shareFeedBackBtn(page).click();
		await expect(thanksModalHeading(page)).toBeVisible();
		await clickCloseThanksModal(page);
		await expect(rateUsBtn(page)).not.toBeVisible();
	});

});