import { useState, useEffect } from 'react';
import {
  MOCK_HARDWARE_TOGGLES,
  MOCK_SUB_PROCESSES,
  MOCK_STATS,
  MOCK_OPERATORS,
  MOCK_LOGS,
  MOCK_DIAGNOSTICS,
} from '../data/mockDashboardData';

export function useDashboardData() {
  const [data, setData] = useState({
    hardwareToggles: [] as any[],
    subProcesses: [] as any[],
    stats: [] as any[],
    operators: [] as any[],
    logs: [] as any[],
    diagnostics: [] as any[],
    loading: true,
  });

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setData({
        hardwareToggles: MOCK_HARDWARE_TOGGLES,
        subProcesses: MOCK_SUB_PROCESSES,
        stats: MOCK_STATS,
        operators: MOCK_OPERATORS,
        logs: MOCK_LOGS,
        diagnostics: MOCK_DIAGNOSTICS,
        loading: false,
      });
    }, 100); // Small delay to simulate async

    return () => clearTimeout(timer);
  }, []);

  return data;
}
