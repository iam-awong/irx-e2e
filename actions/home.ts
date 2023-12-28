import { Page } from "@playwright/test";

export const openHomePage = async (page: Page) => {
  await page.goto('https://employers.qa.indeed.net/irx/sidebar/home');
}