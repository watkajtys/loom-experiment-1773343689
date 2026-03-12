import React from 'react';
import { useMockData } from '../../hooks/useMockData';
import { MOCK_LOGS, MOCK_DIAGNOSTICS } from '../../data/mockDashboardData';

export function Footer() {
    const { items: logs } = useMockData(MOCK_LOGS);
    const { items: diagnostics } = useMockData(MOCK_DIAGNOSTICS);

    return (
        <footer className="h-32 bg-panel-industrial border-t-4 border-border-heavy grid grid-cols-12 z-40 shrink-0 overflow-hidden">
            <div className="col-span-3 border-r-4 border-border-heavy p-4 flex flex-col justify-center bg-black">
                <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-sm">vpn_key</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400">ENCRYPTION_LINK</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[9px] font-bold">
                        <span className="text-gray-500">AES-XTS-512</span>
                        <span className="text-primary neon-cyan-glow">ACTIVE</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-900">
                        <div className="h-full bg-primary" style={{ width: '100%' }}></div>
                    </div>
                </div>
            </div>
            
            <div className="col-span-6 border-r-4 border-border-heavy bg-black p-4 font-mono text-[10px] overflow-hidden flex flex-col">
                <div className="flex justify-between items-center mb-2 text-primary font-bold border-b border-primary/20 pb-1">
                    <span className="tracking-widest">TACTICAL_LOG_FEED</span>
                    <span className="opacity-50">SESSION_IDX_8812</span>
                </div>
                <div className="flex-1 overflow-y-auto pr-4 space-y-1 terminal-scroll">
                    {logs.map((log: any) => {
                        const isRed = log.color === 'red';
                        const isAmber = log.color === 'amber';
                        const isPrimary = log.color === 'primary';
                        
                        let borderClass = 'border-zinc-800';
                        let bgClass = '';
                        let textClass = 'text-primary';
                        let msgClass = 'text-gray-300';

                        if (isRed) {
                            borderClass = 'border-red-brutal';
                            bgClass = 'bg-red-brutal/5';
                            textClass = 'text-red-brutal';
                            msgClass = 'text-red-brutal';
                        } else if (isAmber) {
                            borderClass = 'border-amber-brutal';
                            bgClass = 'bg-amber-brutal/5';
                            textClass = 'text-amber-brutal';
                            msgClass = 'text-amber-brutal';
                        } else if (isPrimary) {
                            borderClass = 'border-primary';
                        }

                        return (
                            <div key={log.id} className={`flex gap-4 border-l-2 ${borderClass} pl-2 ${bgClass}`}>
                                <span className="text-gray-600 font-bold">{log.timestamp}</span>
                                <span className={`${textClass} font-bold`}>{log.type}</span>
                                <span className={msgClass}>{log.message}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="col-span-3 p-4 flex flex-col justify-center bg-black">
                <div className="flex items-center justify-between mb-3 border-b border-border-heavy pb-1">
                    <span className="text-[9px] font-bold text-gray-500">DIAGNOSTIC_MTX</span>
                    <span className="text-[9px] font-bold text-primary tabular-nums tracking-widest">34.05 / 118.24</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {diagnostics.map((diag: any) => {
                        const isAmber = diag.color === 'amber';
                        const textClass = isAmber ? 'text-amber-brutal neon-amber-glow' : 'text-primary';
                        return (
                            <div key={diag.id} className="bg-zinc-900 border-2 border-border-heavy p-2 flex flex-col items-center">
                                <span className="text-[8px] text-gray-600 font-bold">{diag.label}</span>
                                <span className={`text-xs font-bold ${textClass}`}>{diag.value}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
