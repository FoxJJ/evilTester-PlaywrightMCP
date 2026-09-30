import { test, expect } from '@playwright/test';

test.describe('Homepage rendering and navigation', () => {
  test('Primary header navigation opens the expected section', async ({ page }) => {
    const homepageUrl = 'https://testpages.eviltester.com/';
    const sections = [
      { path: '/pages/' },
      { path: '/apps/' },
      { path: '/fun-and-games/' },
      { path: '/tools/' },
      { path: '/challenges/' },
      { path: '/reference/' },
    ];

    // 1. From a fresh homepage, activate each header navigation link and verify its section URL.
    await page.goto(homepageUrl);

    for (const section of sections) {
      await page.locator(`#main_navbar a[href='${section.path}']`).click();
      await expect(page).toHaveURL(`https://testpages.eviltester.com${section.path}`);
      await page.goto(homepageUrl);
    }

    // 2. Navigate back to the homepage, then activate the Test Pages logo/home link.
    await page.goto(homepageUrl);
    await page.getByRole('link').filter({ hasText: 'Test Pages' }).click();
    await expect(page).toHaveURL(homepageUrl);
    await expect(page).toHaveTitle('Software Testing Practice Pages, Apps, and Challenges');
    await expect(page.getByRole('heading', { name: 'Software Testing Practice Pages', level: 1 })).toBeVisible();
  });
});
