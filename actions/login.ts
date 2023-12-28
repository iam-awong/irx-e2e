import { Page } from "@playwright/test";
import { openHomePage } from "./home";

export const clickLoginBtn = async (page: Page) => {
  await page.getByTestId('login-button').click();
  await page.waitForTimeout(2000);
}

export const login = async (page: Page, extensionPage: Page) => {
  await extensionPage.locator('#ifl-InputFormField-ihl-useId-passport-webapp-1').fill('tashraf+employer-20220510-2927@indeed.com');
  await extensionPage.getByRole('button', { name: 'Continue', exact: true }).click();
  await extensionPage.getByLabel('Password', { exact: true }).fill('testaccount');
  await extensionPage.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.reload();
  await page.waitForLoadState();
	await openHomePage(page);
  await page.waitForLoadState();
  extensionPage.close();
}