import { test, expect } from '@playwright/test';
import { openHomePage } from '../actions/home';
import { clickLoginBtn, login } from '../actions/login';
import { addJobBtn, careerPlugLogo, jobsBtn } from '../actions/hiring-insight';
import { allTab, requiresSponsorshipTab, searchBtn, searchByJobTitleTxt, viewAllNonVisibleJobsBtn } from '../actions/non-visible-jobs';

test.describe.only('Non visible jobs', () => {

	test.beforeEach(async ({ page }, testInfo) => {
		await openHomePage(page);
		await clickLoginBtn(page);
		let pages = await page.context().pages();
		let extensionPage = pages[1];
		expect(await extensionPage.title()).toContain('Indeed.com');
		await login(page, extensionPage);
		await page.waitForLoadState();
	});


	test('Non visible jobs', async ({ page }) => {
		await viewAllNonVisibleJobsBtn(page).click();
        await requiresSponsorshipTab(page).click();
        await allTab(page).click();
		await searchByJobTitleTxt(page).fill("Ts");
        await searchBtn(page).click();
	});
});