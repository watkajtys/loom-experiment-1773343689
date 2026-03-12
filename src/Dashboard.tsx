import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { DataView } from './features/dashboard/DataView';
import { MapView } from './features/dashboard/MapView';
import { CommsView } from './features/dashboard/CommsView';
import { TABS, TabKey } from './lib/constants';
import { useMockData } from './hooks/useMockData';
import { MOCK_HARDWARE_TOGGLES, MOCK_SUB_PROCESSES, MOCK_LOGS, MOCK_DIAGNOSTICS } from './data/mockDashboardData';

export default function Dashboard() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') as TabKey || TABS.AUTH;

    const { items: hardwareToggles } = useMockData(MOCK_HARDWARE_TOGGLES);
    const { items: subProcesses } = useMockData(MOCK_SUB_PROCESSES);
    const { items: logs } = useMockData(MOCK_LOGS);
    const { items: diagnostics } = useMockData(MOCK_DIAGNOSTICS);

    const handleTabChange = (tab: string) => {
        setSearchParams({ tab });
    };

    let ViewComponent = DataView;
    if (activeTab === TABS.MAP) {
        ViewComponent = MapView;
    } else if (activeTab === TABS.COMMS) {
        ViewComponent = CommsView;
    }

    return (
        <DashboardLayout 
            activeTab={activeTab} 
            onTabChange={handleTabChange}
            sidebar={<Sidebar hardwareToggles={hardwareToggles} subProcesses={subProcesses} />}
            footer={<Footer logs={logs} diagnostics={diagnostics} />}
        >
            <ViewComponent />
        </DashboardLayout>
    );
}
