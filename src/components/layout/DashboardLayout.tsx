import React, { ReactNode } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { TABS, TabKey } from '../../lib/constants';

interface DashboardLayoutProps {
    children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    // If on login page, default to AUTH tab, else get from URL or default to AUTH
    let activeTab = searchParams.get('tab') as TabKey || TABS.AUTH;
    if (location.pathname === '/login') {
        activeTab = TABS.AUTH;
    }

    const handleTabChange = (tab: string) => {
        setSearchParams({ tab });
    };

    return (
        <div className="flex flex-col h-screen w-full border-4 border-border-heavy">
            <Header activeTab={activeTab} onTabChange={handleTabChange} />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-10 relative">
                    <div className="max-w-7xl mx-auto space-y-10 relative">
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
