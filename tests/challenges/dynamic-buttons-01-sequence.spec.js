// spec: specs/dynamic-buttons-01-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Dynamic Buttons 01 Synchronization', () => {
  test('Complete the sequence using synchronization', async ({ page }) => {
    const startButton = page.getByRole('button', { name: 'start', exact: true });
    const oneButton = page.getByRole('button', { name: 'One', exact: true });
    const twoButton = page.getByRole('button', { name: 'Two', exact: true });
    const threeButton = page.getByRole('button', { name: 'Three', exact: true });
    const waitMessage = page.getByText('Wait...', { exact: true });

    // 1. In a fresh browser context, open the challenge and click Start once
    await page.goto('https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-01/');
    await startButton.click();
    await expect(oneButton).toBeVisible();
    await expect(startButton).toBeVisible();

    // 2. Click One and inspect the page while the next button is pending; wait for Two to become available
    await oneButton.click();
    await expect(waitMessage).toBeVisible();
    await expect(twoButton).toHaveCount(0);
    await expect(twoButton).toBeVisible();
    await expect(waitMessage).toBeHidden();
    await expect(startButton).toBeVisible();
    await expect(oneButton).toBeVisible();

    // 3. Click Two and inspect the page while the next button is pending; wait for Three to become available
    await twoButton.click();
    await expect(waitMessage).toBeVisible();
    await expect(threeButton).toHaveCount(0);
    await expect(threeButton).toBeVisible();
    await expect(waitMessage).toBeHidden();
    await expect(startButton).toBeVisible();
    await expect(oneButton).toBeVisible();
    await expect(twoButton).toBeVisible();

    // 4. Click Three and inspect the completion area
    await threeButton.click();
    await expect(page.locator('#buttonmessage')).toHaveText('All Buttons Clicked');
    await expect(waitMessage).toBeHidden();
    await expect(startButton).toBeVisible();
    await expect(oneButton).toBeVisible();
    await expect(twoButton).toBeVisible();
    await expect(threeButton).toBeVisible();
  });
});
