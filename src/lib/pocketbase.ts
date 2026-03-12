import PocketBase from 'pocketbase';

export const pb = new PocketBase(`http://${window.location.hostname}:8090`);

// Attach to window for easy debugging and Playwright test verification
if (typeof window !== 'undefined') {
  (window as any).pb = pb;
}

// Auto-login a mock user to skip login during Phase 1 evaluation of Core Loop / Dashboard
if (!pb.authStore.isValid) {
  pb.authStore.save('mock_token', {
    id: 'mock_user_id',
    email: 'test@example.com',
    collectionId: 'users',
    collectionName: 'users',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  });
}
