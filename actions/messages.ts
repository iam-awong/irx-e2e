import { Locator, Page } from "@playwright/test";

export const clickMessageTab = async (page: Page) => {
    await page.getByTestId('messaging-tab').click();
}

export const messageSent = (page: Page) : Locator => {
    return page.getByTestId('html-filtered-text').last();
}

export const clickFirstMessageFromList = async (page: Page) => {
    await page.getByTestId('messaging-module-thread-list-item').first().click();
}

export const messageTextarea = (page: Page) : Locator => {
    return page.getByRole('textbox');
}

export const sendMessage = async (page: Page, message: string) => {
    await messageTextarea(page).fill(message);
    await page.locator("[type=submit]").click();
}



