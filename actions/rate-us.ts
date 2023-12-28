import { Locator, Page, expect } from "@playwright/test";
import { clickAdBtn, clickShowSettingsBtn } from '../actions/navbar';
import { openHomePage } from "./home";

export const rateUsBtn = (page: Page): Locator => {
	return page.getByText('Rate us')
}

export const rateUsModalHeading = (page: Page): Locator => {
	return page.getByRole('heading', { name: 'Are you enjoying the Indeed Recruiter Extension?'});
}

export const thanksModalHeading = (page: Page): Locator => {
	return page.getByRole('heading', { name: 'Thank you!'});
}

export const clickCloseThanksModal = async (page: Page) => {
  await page.getByRole('button', { name: 'Close' }).click();
}

export const noThanksBtn = (page: Page): Locator => {
	return page.getByRole('button', { name: 'No thanks' });
}

export const clickRateFiveStars = async (page: Page) => {
  await page.locator('label').filter({ hasText: '5' }).getByLabel('').click();
}

export const shareFeedBackBtn = (page: Page): Locator => {
  return page.getByRole('button', { name: 'Share feedback' })
}

export const accountSettingsBtn = (page: Page): Locator => {
  return page.getByRole('button', { name: 'Account Settings' })
}

export const clickDeveloperOptions =  async (page: Page) => {
	await page.getByRole('heading', { name: 'Developer options'}).click();
}

export const clickFeedBackBtn = async (page: Page) => {
  await page.getByRole('button', { name: 'Reset Feedback Campaigns' }).click();
}

export const resetFeedbackCampaigns = async (page: Page) => {
	await clickAdBtn(page);
	await accountSettingsBtn(page).click();
	await clickDeveloperOptions(page);
	await clickFeedBackBtn(page);
	await openHomePage(page);
}