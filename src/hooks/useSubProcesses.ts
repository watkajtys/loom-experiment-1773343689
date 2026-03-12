import { useState, useEffect } from 'react';
import { MOCK_SUB_PROCESSES } from '../data/mockDashboardData';

export function useSubProcesses() {
  const [data, setData] = useState({ items: [] as any[], loading: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ items: MOCK_SUB_PROCESSES, loading: false });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return data;
}
