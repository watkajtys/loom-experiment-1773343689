import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { DataView } from './features/dashboard/DataView';
import { MapView } from './features/dashboard/MapView';
import { CommsView } from './features/dashboard/CommsView';

export default function Dashboard() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'data';

    const handleTabChange = (tab: string) => {
        setSearchParams({ tab });
    };

    let ViewComponent = DataView;
    if (activeTab === 'map') {
        ViewComponent = MapView;
    } else if (activeTab === 'comms') {
        ViewComponent = CommsView;
    }

    return (
        <DashboardLayout activeTab={activeTab} onTabChange={handleTabChange}>
            <ViewComponent />
        </DashboardLayout>
    );
}
