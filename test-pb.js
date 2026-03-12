import PocketBase from 'pocketbase';
const pb = new PocketBase('http://localhost:8090');
pb.authStore.save('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1vY2tfb2lkIiwiZXhwIjo5OTk5OTk5OTk5fQ.signature', { id: 'mock' });
console.log('Is valid with fake JWT:', pb.authStore.isValid);
