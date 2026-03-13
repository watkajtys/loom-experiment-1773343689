import React from 'react';
import { getStatusThemeClasses } from '../../lib/theme';

interface StatCardProps {
    label: string;
    statusLabel: string;
    statusColor: string;
    value: string | number;
    unit: string;
    percentage: number;
    cornerClass?: string;
}

export function StatCard({ label, statusLabel, statusColor, value, unit, percentage, cornerClass = '' }: StatCardProps) {
    const { textColor, neonClass, bgClass, bgOpacityClass } = getStatusThemeClasses(statusColor);

    return (
        <div className={`bg-black border-4 border-border-heavy p-6 ${cornerClass}`}>
            <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold text-gray-500">{label}</span>
                <span className={`${textColor} text-[10px] font-bold ${neonClass} ${bgOpacityClass} px-2`}>
                    {statusLabel}
                </span>
            </div>
            <div className={`text-5xl font-bold ${textColor} mb-4 tracking-tighter`}>
                {value} <span className="text-lg">{unit}</span>
            </div>
            <div className="h-2 w-full bg-zinc-900 border border-border-heavy">
                <div className={`h-full ${bgClass}`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}
