import React from 'react';
import { Button } from '../../components/ui/Button';
import { StatCard } from '../../components/ui/StatCard';
import { useMockData } from '../../hooks/useMockData';
import { MOCK_STATS, MOCK_OPERATORS } from '../../data/mockDashboardData';
import { TelemetryChart } from './TelemetryChart';
import { OperatorList } from './OperatorList';

export function DataView() {
    const { items: stats, loading: statsLoading } = useMockData(MOCK_STATS);
    const { items: operators, loading: operatorsLoading } = useMockData(MOCK_OPERATORS);

    if (statsLoading || operatorsLoading) {
        return <div className="p-8 text-primary font-mono text-sm">LOADING_MODULES...</div>;
    }

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-end justify-between border-l-8 border-primary pl-8 py-4 bg-black/40 corner-accent corner-top-right">
                <div>
                    <h1 className="text-6xl font-bold tracking-tighter leading-none text-white" id="dashboard-title">SECTOR_MATRIX</h1>
                    <p className="text-primary text-xs mt-4 font-bold tracking-[0.2em]">ID: DX-200 // AUTH: OMEGA_01 // LVL: SUB_4</p>
                </div>
                <div className="mt-8 md:mt-0 flex gap-4">
                    <Button variant="secondary">GENERATE_REP</Button>
                    <Button variant="primary">OVERRIDE_LOCK</Button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat: any, index: number) => {
                    let cornerClass = '';
                    if (index === 0) cornerClass = 'corner-accent corner-bottom-left';
                    if (index === stats.length - 1) cornerClass = 'corner-accent corner-bottom-right';

                    return (
                        <StatCard
                            key={stat.id}
                            label={stat.label}
                            statusLabel={stat.statusLabel}
                            statusColor={stat.statusColor}
                            value={stat.value}
                            unit={stat.unit}
                            percentage={stat.percentage}
                            cornerClass={cornerClass}
                        />
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <TelemetryChart />
                <OperatorList operators={operators} />
            </div>
        </>
    );
}
