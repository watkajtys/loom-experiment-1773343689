import { pb } from '../../lib/pocketbase';

export const authService = {
  login: async (operatorId: string, accessKey: string) => {
    try {
      const authData = await pb.collection('users').authWithPassword(operatorId, accessKey);
      return authData;
    } catch (error: any) {
      throw new Error(error.message || 'AUTHENTICATION_FAILED');
    }
  },
  logout: () => {
    pb.authStore.clear();
  }
};
