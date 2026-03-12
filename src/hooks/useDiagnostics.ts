import { useState, useEffect } from 'react';
import { MOCK_DIAGNOSTICS } from '../data/mockDashboardData';

export function useDiagnostics() {
  const [data, setData] = useState({ items: [] as any[], loading: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ items: MOCK_DIAGNOSTICS, loading: false });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return data;
}
