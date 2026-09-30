import { test, expect } from '@playwright/test';

test('the page has a title', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/');
  await expect(page).toHaveTitle("Software Testing Practice Pages, Apps, and Challenges");
});