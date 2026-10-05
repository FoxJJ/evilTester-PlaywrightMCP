// spec: specs/dynamic-buttons-03-test-plan.md
// seed: seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('Dynamic Button Behavior', () => {
  test('Clicking the current button is recorded', async ({ page }) => {
    let activatedButtonName;
    await page.exposeFunction('recordActivatedButton', (name) => {
      activatedButtonName = name;
    });
    await page.addInitScript(() => {
      document.addEventListener('click', (event) => {
        const target = event.target;
        if (target instanceof Element) {
          const button = target.closest('main button');
          if (button) {
            window.recordActivatedButton(button.innerText.trim());
          }
        }
      }, true);
    });

    // 1. Navigate to the challenge and re-find the currently rendered button immediately before interaction.
    await page.goto('https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-03/');
    const currentButton = page.getByRole('button', { name: /^Button \d+$/ });
    await expect(currentButton).toBeVisible();
    await expect(currentButton).toBeEnabled();

    // 2. Click the current button and inspect the click history.
    await currentButton.click();
    await expect.poll(() => activatedButtonName).toMatch(/^Button \d+$/);
    await expect(page.getByText(`Clicked ${activatedButtonName}`, { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Button \d+$/ })).toBeVisible();
  });
});
