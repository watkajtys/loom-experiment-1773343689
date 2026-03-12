import { useState, useEffect } from 'react';

export function useMockData<T>(mockData: T[]) {
  const [data, setData] = useState({ items: [] as T[], loading: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ items: mockData, loading: false });
    }, 100);
    return () => clearTimeout(timer);
  }, [mockData]);

  return data;
}
