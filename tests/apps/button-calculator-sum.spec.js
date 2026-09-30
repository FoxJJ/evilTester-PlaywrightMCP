import { test, expect } from '@playwright/test';

test.describe('Button Calculator', () => {
  test('Calculate 1 + 1 from the homepage', async ({ page }) => {
    // 1. In a fresh browser context, navigate to https://testpages.eviltester.com/.
    await page.goto('https://testpages.eviltester.com/');
    await expect(page).toHaveURL('https://testpages.eviltester.com/');

    // 2. Use the site navigation to open the Apps directory and select Button Calculator.
    await page.locator('#main_navbar').getByRole('link', { name: 'Apps' }).click();
    await page.getByRole('main').getByText('Button Calculator').click();
    await expect(page).toHaveURL('https://testpages.eviltester.com/apps/button-calculator/');

    // 3. Select 1, +, 1, and = on the calculator.
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '+', exact: true }).click();
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '=' }).click();

    await expect(page.locator('#calculated-display')).toHaveValue('2');
  });
});
