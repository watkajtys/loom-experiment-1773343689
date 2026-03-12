import { useState, useEffect } from 'react';
import { MOCK_OPERATORS } from '../data/mockDashboardData';

export function useOperators() {
  const [data, setData] = useState({ items: [] as any[], loading: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ items: MOCK_OPERATORS, loading: false });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return data;
}
