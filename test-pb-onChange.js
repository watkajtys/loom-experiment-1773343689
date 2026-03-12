import PocketBase from 'pocketbase';
const pb = new PocketBase('http://localhost:8090');
pb.authStore.save('mock_token', { id: 'mock' });
pb.authStore.onChange((token, model) => {
  console.log('token:', token, '!!token:', !!token);
});
pb.authStore.save('mock_token', { id: 'mock2' });
