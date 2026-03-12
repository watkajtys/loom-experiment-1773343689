import React from 'react';
import { TABS } from '../../lib/constants';

interface HeaderProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
    return (
        <header className="h-12 bg-panel-industrial border-b-4 border-border-heavy flex items-center justify-between px-4 z-40 shrink-0">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 bg-primary px-4 py-1.5 border-r-4 border-b-4 border-black">
                    <span className="material-symbols-outlined text-black scale-110 font-bold">terminal</span>
                    <span className="text-black font-bold text-xs tracking-widest">CONSOLE_V4.0_SHELL</span>
                </div>
                <div className="flex gap-6 border-l-2 border-border-heavy pl-6">
                    <div className="flex flex-col">
                        <span className="text-[8px] text-gray-500 font-bold">SIGNAL_DB</span>
                        <div className="flex gap-1 mt-1">
                            <div className="w-2 h-2 bg-primary neon-cyan-glow"></div>
                            <div className="w-2 h-2 bg-primary neon-cyan-glow"></div>
                            <div className="w-2 h-2 bg-primary neon-cyan-glow"></div>
                            <div className="w-2 h-2 bg-zinc-800"></div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[8px] text-gray-500 font-bold">ENCRYPTION</span>
                        <span className="text-[10px] text-primary font-bold">AES_512_SECURE</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex bg-black border-2 border-border-heavy p-0.5">
                    <button 
                        onClick={() => onTabChange(TABS.MAP)}
                        className={`px-4 py-1 text-[10px] font-bold border ${activeTab === TABS.MAP ? 'bg-zinc-800 text-primary border-border-heavy' : 'border-transparent text-gray-500 hover:text-primary'}`}
                    >
                        MAP
                    </button>
                    <button 
                        onClick={() => onTabChange(TABS.AUTH)}
                        className={`px-4 py-1 text-[10px] font-bold border ${activeTab === TABS.AUTH ? 'bg-zinc-800 text-primary border-border-heavy' : 'border-transparent text-gray-500 hover:text-primary'}`}
                    >
                        AUTH
                    </button>
                    <button 
                        onClick={() => onTabChange(TABS.COMMS)}
                        className={`px-4 py-1 text-[10px] font-bold border ${activeTab === TABS.COMMS ? 'bg-zinc-800 text-primary border-border-heavy' : 'border-transparent text-gray-500 hover:text-primary'}`}
                    >
                        COMMS
                    </button>
                </div>
                <div className="flex items-center gap-3 bg-red-brutal/10 border-2 border-red-brutal px-3 py-1">
                    <span className="w-2 h-2 bg-red-brutal neon-red-glow"></span>
                    <span className="text-[10px] text-red-brutal font-bold">ALARM_ACTIVE</span>
                </div>
            </div>
        </header>
    );
}
