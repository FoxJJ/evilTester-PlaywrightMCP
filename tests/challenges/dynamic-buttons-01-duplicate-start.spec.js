// spec: specs/dynamic-buttons-01-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Dynamic Buttons 01 Synchronization', () => {
  test('Repeated Start activation does not create duplicates', async ({ page }) => {
    // 1. In a fresh browser context, open Dynamic Buttons 01
    await page.goto('https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-01/');
    await page.locator('#button00').click();

    const oneButtons = page.getByRole('button', { name: 'One', exact: true });
    await expect(oneButtons).toHaveCount(1);

    // 2. Activate the still-visible Start button a second time, then inspect the dynamic buttons and their IDs
    await page.locator('#button00').click();
    await expect.soft(oneButtons).toHaveCount(1);
    await expect.soft(page.locator('#button01')).toHaveCount(1);
    await expect.soft(page.locator('#buttonmessage')).not.toHaveText('All Buttons Clicked');

    await page.locator('#buttons button:nth-child(2)').click();
    await expect(page.getByRole('button', { name: 'Two', exact: true })).toBeVisible();
  });
});
