import React from 'react';

interface TactileSwitchProps {
    label: string;
    statusLabel: string;
    statusColor: string;
    isActive: boolean;
}

export function TactileSwitch({ label, statusLabel, statusColor, isActive }: TactileSwitchProps) {
    const isAmber = statusColor === 'amber';
    const isPrimary = statusColor === 'primary';
    const indicatorColor = isAmber ? 'bg-amber-brutal' : isPrimary ? 'bg-primary' : 'bg-zinc-800';
    const textColor = isAmber ? 'text-amber-brutal' : isPrimary ? 'text-primary' : 'text-gray-600';
    const neonClass = isAmber ? 'neon-amber-glow' : isPrimary ? 'neon-cyan-glow' : '';

    return (
        <div className="bg-black border-2 border-border-heavy p-4 tactile-switch">
            <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-gray-300">{label}</span>
                <div className="w-12 h-6 bg-zinc-900 border-2 border-black relative cursor-pointer shadow-[inset_0px_2px_4px_black]">
                    <div className={`absolute top-0 ${isActive ? 'left-0 border-r-2' : 'right-0 border-l-2'} w-6 h-full bg-zinc-700 border-black flex items-center justify-center`}>
                        <div className="w-1 h-3 bg-zinc-800"></div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 ${indicatorColor} ${neonClass}`}></span>
                <span className={`text-[9px] ${textColor} font-bold`}>{statusLabel}</span>
            </div>
        </div>
    );
}
