import { test, expect } from '@playwright/test';

test.describe('Apps Directory', () => {
  test('App links open their matching pages', async ({ page }) => {
    // 1. In a fresh browser context, navigate to https://testpages.eviltester.com/apps/ and activate each named app link from the directory, returning to the Apps page between selections.
    await page.goto('https://testpages.eviltester.com/apps/');

    const apps = [
      { name: 'Triangle', path: '/apps/triangle/' },
      { name: '7 Char Val', path: '/apps/7-char-val/' },
      { name: 'Basic Shopping Cart', path: '/apps/basiccart/' },
      { name: 'AI Chat Bot', path: '/apps/ai-chat-bot/' },
      { name: 'Button Calculator', path: '/apps/button-calculator/' },
      { name: 'Canvas Draw', path: '/apps/canvas-draw/' },
      { name: 'Canvas Scribble', path: '/apps/canvas-scribble/' },
      { name: 'Validated Client Server Form', path: '/apps/client-server-form-validation/' },
      { name: 'HTML Table Generator', path: '/apps/html-table-generator/' },
      { name: 'Grammar Data Gen', path: '/apps/grammar-data-gen/' },
      { name: 'Countdown Timer', path: '/apps/countdown-timer/' },
      { name: 'Server Side Calculator', path: '/apps/server-side-calculator/' },
      { name: 'Simple Calculator API', path: '/apps/calculator-api/' },
      { name: 'Text Transformer', path: '/apps/text-transformer/' },
      { name: 'Cookie Controlled Login', path: '/apps/simulated-login/' },
      { name: 'Numbers to Text', path: '/apps/numbers-to-text/' },
      { name: 'Note Taker', path: '/apps/note-taker/' },
      { name: 'E-Primer', path: '/apps/e-primer/' },
      { name: 'Simple TODO List', path: '/apps/simple-todo-list/' },
    ];

    for (const app of apps) {
      const appLink = page.locator(`main a[href="${app.path}"]:has-text("${app.name}")`).first();
      await expect(appLink).toBeVisible();
      await appLink.click();

      await expect(page).toHaveURL(url =>
        url.origin === 'https://testpages.eviltester.com' && url.pathname === app.path
      );
      await expect(page).toHaveTitle(/\S/);
      await expect(page.locator('main')).toContainText(/\S/);

      await page.goto('https://testpages.eviltester.com/apps/');
      await expect(page.getByRole('heading', { name: 'Apps', level: 1 })).toBeVisible();
    }
  });
});
