import React from 'react';
import { getStatusThemeClasses } from '../../lib/theme';

interface TactileSwitchProps {
    label: string;
    statusLabel: string;
    statusColor: string;
    isActive: boolean;
}

export function TactileSwitch({ label, statusLabel, statusColor, isActive }: TactileSwitchProps) {
    const { indicatorColor, textColor, neonClass } = getStatusThemeClasses(statusColor);

    return (
        <div className="bg-black border-2 border-border-heavy p-4 tactile-switch">
            <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-gray-300">{label}</span>
                <div className="w-12 h-6 bg-zinc-900 border-2 border-black relative cursor-pointer shadow-[inset_0px_2px_4px_black] overflow-hidden">
                    <div className={`absolute top-0 ${isActive ? 'left-0 w-full' : 'left-0 w-0'} h-full ${indicatorColor} ${neonClass} transition-all duration-200 opacity-20`}></div>
                    <div className={`absolute top-0 ${isActive ? 'right-0 border-l-2' : 'left-0 border-r-2'} w-6 h-full bg-zinc-700 border-black flex items-center justify-center transition-all duration-200 z-10`}>
                        <div className={`w-1 h-3 ${isActive ? indicatorColor : 'bg-zinc-800'} ${isActive ? neonClass : ''}`}></div>
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
