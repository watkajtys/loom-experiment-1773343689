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
  // In a real scenario we could log in, but for mocking we update the local storage directly
  // or use the exposed window.pb
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
  await page.screenshot({ path: 'evidence_old.png' });
});

test('Implement the foundational application shell and Navigation/Sidebar.', async ({ page }) => {
  // Mock auth state so we can access dashboard
  await page.addInitScript(() => {
    const mockModel = {
      id: 'mock_user_id',
      email: 'test@example.com',
      collectionId: 'users',
      collectionName: 'users',
      created: '',
      updated: '',
    };
    localStorage.setItem('pocketbase_auth', JSON.stringify({ token: 'mock_token', model: mockModel }));
    if ((window as any).pb) {
       (window as any).pb.authStore.save('mock_token', mockModel);
    }
  });

  await page.goto('/');

  // Navigate to dashboard via pushState
  await page.evaluate(() => {
    window.history.pushState({}, '', '/dashboard');
    window.dispatchEvent(new Event('popstate'));
  });
  
  // Wait for the app to initialize and ensure we're on dashboard
  await expect(page).toHaveURL(/\/dashboard/);
  
  // Verify foundational shell components
  await expect(page.locator('text=CONSOLE_V4.0_SHELL')).toBeVisible();
  await expect(page.locator('text=SECTOR_MATRIX')).toBeVisible();
  
  // Verify deep linking map/data/comms logic
  const mapBtn = page.getByRole('button', { name: 'MAP', exact: true });
  const dataBtn = page.getByRole('button', { name: 'DATA', exact: true });
  
  // Default is data usually or checking if they exist
  await expect(mapBtn).toBeVisible();
  await expect(dataBtn).toBeVisible();
  
  // Click MAP and verify URL updates with search params
  await mapBtn.click();
  await expect(page).toHaveURL(/tab=map/);
  
  // Take a screenshot of the active feature
  await page.screenshot({ path: 'evidence_old.png' });
});

test('Implement a protected route wrapper component.', async ({ page }) => {
  // Try accessing dashboard without auth
  await page.goto('/dashboard');
  
  // Verify redirect to login
  await expect(page.locator('text=Login')).toBeVisible();
  await expect(page).toHaveURL(/\/login/);

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
    
    // In pocketbase > 0.16.x authStore.save also stores it in local storage.
    // However, since we're calling page.goto immediately after, it's possible window.pb instance is re-initialized 
    // and loses the in-memory state if we only did it via evaluate on the old page.
  });
  
  // Wait a bit for auth state to propagate in React
  await page.waitForTimeout(500);

  // Instead of page.goto (which reloads the whole app and potentially clears our mock state before it's persisted in local storage or read properly),
  // let's just click a link to dashboard or update the URL without reload, or set localstorage directly before goto.
  // The safest way is to set localStorage so when page.goto happens, the initialization picks it up.
  await page.evaluate(() => {
    const mockModel = {
      id: 'mock_user_id',
      email: 'test@example.com',
      collectionId: 'users',
      collectionName: 'users',
      created: '',
      updated: '',
    };
    localStorage.setItem('pocketbase_auth', JSON.stringify({ token: 'mock_token', model: mockModel }));
    // We also forcefully set authStore manually to ensure React context doesn't race against redirect.
    if ((window as any).pb) {
       (window as any).pb.authStore.save('mock_token', mockModel);
    }
  });

  // Wait for the local storage event or PB update to be picked up
  await page.waitForTimeout(500);

  // Go to home page to make sure context initializes with the token
  await page.goto('/');
  await expect(page.locator('#auth-status')).toHaveText('Logged in as test@example.com');
  
  // Navigate to dashboard with auth, but we should use click or evaluate instead of page.goto since pocketbase JS SDK sets AuthStore lazily or loses it upon hard navigation if local storage isn't strictly synchronized.
  await page.evaluate(() => {
    window.history.pushState({}, '', '/dashboard');
    window.dispatchEvent(new Event('popstate'));
  });
  
  // Wait for the route to load before asserting the text
  await page.waitForTimeout(500);

  // Verify dashboard is accessible
  await expect(page.locator('#dashboard-title')).toBeVisible();
  await expect(page.locator('#dashboard-title')).toHaveText('SECTOR_MATRIX');
  await expect(page).toHaveURL(/\/dashboard/);

  // Take a screenshot of the active feature
  await page.screenshot({ path: 'evidence_old.png' });
});
