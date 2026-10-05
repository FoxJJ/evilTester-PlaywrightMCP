// spec: specs/dynamic-buttons-03-test-plan.md
// seed: seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('Dynamic Button Behavior', () => {
  test('Challenge loads with its current dynamic button', async ({ page }) => {
    // 1. In a fresh browser context, navigate directly to the Dynamic Buttons 03 challenge.
    await page.goto('https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-03/');
    await expect(page).toHaveURL('https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-03/');
    await expect(page).toHaveTitle('Dynamic Buttons 03 Synchronization Challenge | Test Pages');

    // 2. Inspect the main challenge content and current button.
    await expect(page.getByRole('heading', { name: 'Dynamic Buttons 03', level: 1 })).toBeVisible();
    await expect(page.getByText('This page has a button that will be replaced by a new button automatically after a delay.')).toBeVisible();
    const currentButton = page.getByRole('button', { name: /^Button \d+$/ });
    await expect(currentButton).toBeVisible();
    await expect(currentButton).toBeEnabled();
  });
});
