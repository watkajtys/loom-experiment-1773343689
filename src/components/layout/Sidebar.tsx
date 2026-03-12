import React from 'react';
import { Button } from '../ui/Button';
import { TactileSwitch } from '../ui/TactileSwitch';

interface SidebarProps {
    hardwareToggles: any[];
    subProcesses: any[];
}

export function Sidebar({ hardwareToggles, subProcesses }: SidebarProps) {
    return (
        <aside className="w-72 bg-panel-industrial border-r-4 border-border-heavy flex flex-col shrink-0 z-30">
            <div className="p-4 flex-1 flex flex-col gap-8 overflow-y-auto terminal-scroll">
                <section>
                    <h4 className="text-[10px] font-bold text-primary mb-6 border-b-2 border-primary/20 pb-1">HARDWARE_TOGGLES</h4>
                    <div className="grid grid-cols-1 gap-4">
                        {hardwareToggles.map((toggle: any) => (
                            <TactileSwitch
                                key={toggle.id}
                                label={toggle.label}
                                statusLabel={toggle.statusLabel}
                                statusColor={toggle.statusColor}
                                isActive={toggle.isActive}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h4 className="text-[10px] font-bold text-gray-500 mb-4 border-b-2 border-border-heavy pb-1">SUB_PROCESSES</h4>
                    <div className="flex flex-col gap-1">
                        {subProcesses.map((process: any) => (
                            <Button key={process.id} variant="sidebar" icon={process.icon}>
                                {process.label}
                            </Button>
                        ))}
                    </div>
                </section>
            </div>
            <div className="p-4 border-t-4 border-border-heavy bg-black">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[8px] text-gray-500 font-bold">UPTIME_CLOCK</span>
                    <span className="text-[10px] font-bold text-primary tabular-nums tracking-widest">1,042:12:04</span>
                </div>
                <Button variant="danger">
                    EMERGENCY_SCRAM
                </Button>
            </div>
        </aside>
    );
}
