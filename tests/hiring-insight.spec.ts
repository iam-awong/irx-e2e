import { test, expect } from '@playwright/test';
import { openHomePage } from '../actions/home';
import { clickLoginBtn, login } from '../actions/login';
import { addJobBtn, careerPlugLogo, jobsBtn } from '../actions/hiring-insight';

test.describe('Hiring Insight', () => {

	test.beforeEach(async ({ page }, testInfo) => {
		await openHomePage(page);
		await clickLoginBtn(page);
		let pages = await page.context().pages();
		let extensionPage = pages[1];
		expect(await extensionPage.title()).toContain('Indeed.com');
		await login(page, extensionPage);
		await page.waitForLoadState();
	});


	test('Create job', async ({ page }) => {
		// hiringInsightLogin(page);
		await page.goto('https://app.careerplug.com/user/sign_in');
		// await page.waitForLoadState();
		await page.locator('#user_login').fill('mgregory@indeed.com');
		await page.getByRole('button', { name: 'Continue', exact: true }).click();
		await page.locator('#user_password').fill('7MeAGT08WAdI');
		await page.getByRole('button', { name: 'Submit', exact: true }).click();
		await expect(await careerPlugLogo(page)).toBeVisible();
		await jobsBtn(page).click();
		await addJobBtn(page).click();
	});
});