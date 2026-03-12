import { useState, useEffect } from 'react';
import { MOCK_LOGS } from '../data/mockDashboardData';

export function useLogs() {
  const [data, setData] = useState({ items: [] as any[], loading: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ items: MOCK_LOGS, loading: false });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return data;
}
