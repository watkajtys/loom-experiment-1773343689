import { useState, useEffect } from 'react';
import { MOCK_STATS } from '../data/mockDashboardData';

export function useStats() {
  const [data, setData] = useState({ items: [] as any[], loading: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ items: MOCK_STATS, loading: false });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return data;
}
