import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { DataView } from './features/dashboard/DataView';
import { MapView } from './features/dashboard/MapView';
import { CommsView } from './features/dashboard/CommsView';
import { TABS, TabKey } from './lib/constants';

export default function Dashboard() {
    const [searchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') as TabKey || TABS.AUTH;

    let ViewComponent = DataView;
    if (activeTab === TABS.MAP) {
        ViewComponent = MapView;
    } else if (activeTab === TABS.COMMS) {
        ViewComponent = CommsView;
    }

    return (
        <ViewComponent />
    );
}
