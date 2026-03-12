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
  await page.screenshot({ path: 'evidence_old.png' });
});

test('PocketBase auth store changes automatically update the global user context and are accessible by all components.', async ({ page }) => {
  await page.goto('/');

  // Wait for the app to initialize
  await expect(page.locator('text=Loom Initialized')).toBeVisible();

  // Initially, should be not logged in
  await expect(page.locator('#auth-status')).toHaveText('Not logged in');

  // Simulate an auth state change via window.pb
  await page.evaluate(() => {
    // Create a mock model object
    const mockModel = {
      id: 'mock_user_id',
      email: 'test@example.com',
      collectionId: 'users',
      collectionName: 'users',
      created: '',
      updated: '',
    };
    // Save to the auth store
    (window as any).pb.authStore.save('mock_token', mockModel);
  });

  // Check if UI updates to show the logged-in email
  await expect(page.locator('#auth-status')).toHaveText('Logged in as test@example.com');

  // Take a screenshot of the active feature
  await page.screenshot({ path: 'evidence.png' });
});
