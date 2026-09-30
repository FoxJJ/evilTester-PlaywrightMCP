import { test, expect } from '@playwright/test';

test('the page has a title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});