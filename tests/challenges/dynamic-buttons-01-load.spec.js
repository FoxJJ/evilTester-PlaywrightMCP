// spec: specs/dynamic-buttons-01-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Dynamic Buttons 01 Synchronization', () => {
  test('Initial state exposes only Start', async ({ page }) => {
    // 1. In a fresh browser context, navigate directly to the Dynamic Buttons 01 challenge
    await page.goto('https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-01/');

    await expect(page).toHaveURL('https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-01/');
    await expect(page).toHaveTitle('Dynamic Buttons 01 Synchronization Challenge | Test Pages');
    await expect(page.getByRole('heading', { name: 'Dynamic Buttons 01', exact: true })).toBeVisible();
    await expect(page.getByText('This page has buttons added by JavaScript. Click each button to reveal the next. There is a delay before the next button appears.', { exact: true })).toBeVisible();

    // 2. Inspect controls and completion area before interacting
    const startButton = page.getByRole('button', { name: 'start', exact: true });
    await expect(startButton).toBeVisible();
    await expect(startButton).toBeEnabled();
    await expect(page.getByRole('button', { name: 'One', exact: true })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Two', exact: true })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Three', exact: true })).toHaveCount(0);
    await expect(page.locator('#buttonmessage')).not.toHaveText('All Buttons Clicked');
  });
});
