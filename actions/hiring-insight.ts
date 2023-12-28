import { Locator, Page } from "@playwright/test";

export const jobsBtn = (page: Page): Locator => {
	return page.locator('#jobs_link');
}
export const addJobBtn = (page: Page): Locator => {
	return page.locator('#add_job');
}

export const careerPlugLogo = (page: Page): Locator => {
	return page.locator('#navbar-switcher');
}
export const hiringInsightLogin = async (page: Page) => {
    await page.goto('https://app.careerplug.com/user/sign_in');
    await page.locator('#user_login').fill('mgregory@indeed.com');
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.locator('#user_password').fill('7MeAGT08WAdI');
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
}