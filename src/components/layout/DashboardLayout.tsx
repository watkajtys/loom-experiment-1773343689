import React, { ReactNode } from 'react';
import { Header } from './Header';

interface DashboardLayoutProps {
    children: ReactNode;
    activeTab: string;
    onTabChange: (tab: string) => void;
    sidebar: ReactNode;
    footer: ReactNode;
}

export function DashboardLayout({ children, activeTab, onTabChange, sidebar, footer }: DashboardLayoutProps) {
    return (
        <div className="flex flex-col h-screen w-full border-4 border-border-heavy">
            <Header activeTab={activeTab} onTabChange={onTabChange} />
            <div className="flex flex-1 overflow-hidden">
                {sidebar}
                <main className="flex-1 overflow-y-auto p-10 relative">
                    <div className="max-w-7xl mx-auto space-y-10 relative">
                        {children}
                    </div>
                </main>
            </div>
            {footer}
        </div>
    );
}
