// spec: specs/dynamic-buttons-03-test-plan.md
// seed: seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('Dynamic Button Behavior', () => {
  test('Button is automatically replaced without user interaction', async ({ page }) => {
    // 1. Navigate to the challenge and locate its current button without clicking it.
    await page.goto('https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-03/');
    const initialButton = page.getByRole('button', { name: /^Button \d+$/ });
    await expect(initialButton).toBeVisible();
    await expect(initialButton).toBeEnabled();
    const initialButtonName = await initialButton.innerText();

    // 2. Wait for the captured button element to be detached, then query the current button again.
    const capturedButton = page.getByRole('button', { name: initialButtonName, exact: true });
    await expect(capturedButton).toBeDetached();

    const replacementButton = page.getByRole('button', { name: /^Button \d+$/ });
    await expect(replacementButton).toBeVisible();
    await expect(replacementButton).toBeEnabled();
    await expect(replacementButton).not.toHaveText(initialButtonName);
  });
});
