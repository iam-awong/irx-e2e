import { Locator, Page } from "@playwright/test";

export const viewAllNonVisibleJobsBtn = (page: Page): Locator => {
	return page.getByRole('button', { name: 'View all non-visible jobs', exact: true });
}

export const searchBtn = (page: Page): Locator => {
	return page.getByRole('button', { name: 'Search', exact: true });
}

export const searchByJobTitleTxt = (page: Page): Locator => {
	return page.getByRole('textbox');
}

export const requiresSponsorshipTab = (page: Page): Locator => {
	return page.getByText('Requires sponsorship');
}

export const allTab = (page: Page): Locator => {
	return page.getByText('All', { exact: true });
}