import PocketBase from 'pocketbase';

export const pb = new PocketBase(`http://${window.location.hostname}:8090`);

// Attach to window for easy debugging and Playwright test verification
if (typeof window !== 'undefined') {
  (window as any).pb = pb;
}
