import { Locator, Page } from "@playwright/test";
import { rateUsBtn } from "./rate-us";

export const clickShowSettingsBtn = async (page: Page) => {
  await page.getByLabel('Notifications').nth(1).click();
}

export const clickSwitchAdBtn = async (page: Page, lastAd: string) => {
  await page.getByText(lastAd).click();
}

export const settingsHeading = (page: Page): Locator => {
	return page.getByRole('heading', { name: 'Settings'});
}

export const clickAdBtn = async (page: Page) => {
  await page.getByLabel('active account').click();
}


