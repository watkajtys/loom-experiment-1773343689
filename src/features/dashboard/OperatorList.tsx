import React from 'react';

interface Operator {
    id: string;
    icon: string;
    name: string;
    role: string;
    statusColor: string;
}

interface OperatorListProps {
    operators: Operator[];
}

export function OperatorList({ operators }: OperatorListProps) {
    return (
        <div className="lg:col-span-4 bg-black border-4 border-border-heavy flex flex-col corner-accent corner-top-right">
            <div className="p-4 border-b-4 border-border-heavy bg-zinc-900">
                <h3 className="text-[10px] font-bold tracking-widest text-primary">ACTIVE_OPERATORS</h3>
            </div>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto terminal-scroll">
                {operators.map((operator: Operator, index: number) => {
                    const isPrimary = operator.statusColor === 'primary';
                    const isAmber = operator.statusColor === 'amber';
                    
                    const borderClass = isPrimary ? 'border-primary' : isAmber ? 'border-amber-brutal' : 'border-border-heavy';
                    const iconColorClass = isPrimary ? 'text-primary' : isAmber ? 'text-amber-brutal' : 'text-gray-500';
                    const roleColorClass = isPrimary ? 'text-primary' : isAmber ? 'text-amber-brutal' : 'text-gray-500';
                    const hasBottomBorder = index !== operators.length - 1;

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
    );
}
