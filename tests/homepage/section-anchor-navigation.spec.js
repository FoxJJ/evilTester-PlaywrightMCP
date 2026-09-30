// spec: specs/homepage-test-plan.md
// seed: seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('Homepage rendering and navigation', () => {
  test('Homepage section links navigate to matching anchors', async ({ page }) => {
    // 1. From a fresh homepage, activate each in-page section link: Overview Video, About, Pages, Support These Pages, Sponsoring, and History.
    await page.goto('https://testpages.eviltester.com/');

    const sections = [
      { name: 'Overview Video', fragment: '#overview-video' },
      { name: 'About', fragment: '#about' },
      { name: 'Pages', fragment: '#pages' },
      { name: 'Support These Pages', fragment: '#support-these-pages' },
      { name: 'Sponsoring', fragment: '#sponsoring' },
      { name: 'History', fragment: '#history' },
    ];

    for (const section of sections) {
      await page.locator(`a[href="${section.fragment}"]`).click();
      await expect(page).toHaveURL(`https://testpages.eviltester.com/${section.fragment}`);
      await expect(page.getByRole('heading', { name: section.name, exact: true })).toBeInViewport();
    }

    // 2. Use browser back after following an in-page section link.
    await page.goBack();
    await expect(page).toHaveURL('https://testpages.eviltester.com/#sponsoring');
    await expect(page.getByRole('heading', { name: 'Sponsoring', exact: true })).toBeInViewport();
  });
});
