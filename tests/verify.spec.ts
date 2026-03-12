import { test, expect } from '@playwright/test';

test('App initializes correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Loom Initialized')).toBeVisible();
});

test('The application boots successfully and the PocketBase client can be instantiated globally without errors.', async ({ page }) => {
  await page.goto('/');
  
  // Wait for the app to initialize
  await expect(page.locator('text=Loom Initialized')).toBeVisible();

  // Verify that window.pb is defined globally
  const isPbDefined = await page.evaluate(() => {
    return typeof (window as any).pb !== 'undefined';
  });
  
  expect(isPbDefined).toBe(true);

  // Take a screenshot after verification
  await page.screenshot({ path: 'evidence.png' });
});
