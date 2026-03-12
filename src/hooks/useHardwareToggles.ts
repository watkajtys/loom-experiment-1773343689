import { useState, useEffect } from 'react';
import { MOCK_HARDWARE_TOGGLES } from '../data/mockDashboardData';

export function useHardwareToggles() {
  const [data, setData] = useState({ items: [] as any[], loading: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ items: MOCK_HARDWARE_TOGGLES, loading: false });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return data;
}
