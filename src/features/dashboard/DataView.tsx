import React from 'react';
import { Button } from '../../components/ui/Button';
import { StatCard } from '../../components/ui/StatCard';
import { MOCK_STATS, MOCK_OPERATORS } from '../../data/mockDashboardData';

export function DataView() {
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
                {MOCK_STATS.map((stat, index) => {
                    let cornerClass = '';
                    if (index === 0) cornerClass = 'corner-accent corner-bottom-left';
                    if (index === MOCK_STATS.length - 1) cornerClass = 'corner-accent corner-bottom-right';

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
                <div className="lg:col-span-8 bg-black border-4 border-border-heavy corner-accent corner-top-left">
                    <div className="p-4 border-b-4 border-border-heavy flex justify-between items-center bg-zinc-900">
                        <h3 className="text-[10px] font-bold tracking-widest flex items-center gap-3 text-primary">
                            <span className="w-3 h-3 bg-primary neon-cyan-glow"></span> TELEMETRY_STREAM_7
                        </h3>
                        <div className="flex gap-6 text-[10px] text-gray-500 font-bold">
                            <span>FREQ: 144.2 MHZ</span>
                            <span>AMP: 4.2 V</span>
                        </div>
                    </div>
                    <div className="p-8 h-[320px] flex items-end gap-2 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[40%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[60%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[55%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[85%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[70%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[30%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[45%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[95%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[65%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[50%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[40%]"></div>
                        <div className="flex-1 bg-primary/30 border-t-4 border-primary h-[75%]"></div>
                    </div>
                </div>

                <div className="lg:col-span-4 bg-black border-4 border-border-heavy flex flex-col corner-accent corner-top-right">
                    <div className="p-4 border-b-4 border-border-heavy bg-zinc-900">
                        <h3 className="text-[10px] font-bold tracking-widest text-primary">ACTIVE_OPERATORS</h3>
                    </div>
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto terminal-scroll">
                        {MOCK_OPERATORS.map((operator, index) => {
                            const isPrimary = operator.statusColor === 'primary';
                            const isAmber = operator.statusColor === 'amber';
                            
                            const borderClass = isPrimary ? 'border-primary' : isAmber ? 'border-amber-brutal' : 'border-border-heavy';
                            const iconColorClass = isPrimary ? 'text-primary' : isAmber ? 'text-amber-brutal' : 'text-gray-500';
                            const roleColorClass = isPrimary ? 'text-primary' : isAmber ? 'text-amber-brutal' : 'text-gray-500';
                            const hasBottomBorder = index !== MOCK_OPERATORS.length - 1;

                            return (
                                <div key={operator.id} className={`flex items-center gap-4 ${hasBottomBorder ? 'border-b border-border-heavy pb-4' : ''}`}>
                                    <div className={`w-10 h-10 bg-zinc-800 border-2 ${borderClass} flex items-center justify-center`}>
                                        <span className={`material-symbols-outlined ${iconColorClass}`}>{operator.icon}</span>
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-bold text-white">{operator.name}</div>
                                        <div className={`text-[9px] ${roleColorClass} font-bold`}>{operator.role}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
