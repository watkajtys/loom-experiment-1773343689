import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Dashboard() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'data';

    const handleTabChange = (tab: string) => {
        setSearchParams({ tab });
    };

    return (
        <div className="flex flex-col h-screen w-full border-4 border-border-heavy">
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
                            onClick={() => handleTabChange('map')}
                            className={`px-4 py-1 text-[10px] font-bold border ${activeTab === 'map' ? 'bg-zinc-800 text-primary border-border-heavy' : 'border-transparent text-gray-500 hover:text-primary'}`}
                        >
                            MAP
                        </button>
                        <button 
                            onClick={() => handleTabChange('data')}
                            className={`px-4 py-1 text-[10px] font-bold border ${activeTab === 'data' ? 'bg-zinc-800 text-primary border-border-heavy' : 'border-transparent text-gray-500 hover:text-primary'}`}
                        >
                            DATA
                        </button>
                        <button 
                            onClick={() => handleTabChange('comms')}
                            className={`px-4 py-1 text-[10px] font-bold border ${activeTab === 'comms' ? 'bg-zinc-800 text-primary border-border-heavy' : 'border-transparent text-gray-500 hover:text-primary'}`}
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
            <div className="flex flex-1 overflow-hidden">
                <aside className="w-72 bg-panel-industrial border-r-4 border-border-heavy flex flex-col shrink-0 z-30">
                    <div className="p-4 flex-1 flex flex-col gap-8 overflow-y-auto terminal-scroll">
                        <section>
                            <h4 className="text-[10px] font-bold text-primary mb-6 border-b-2 border-primary/20 pb-1">HARDWARE_TOGGLES</h4>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="bg-black border-2 border-border-heavy p-4 tactile-switch">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-[10px] font-bold text-gray-300">CORE_TURBINE_A</span>
                                        <div className="w-12 h-6 bg-zinc-900 border-2 border-black relative cursor-pointer shadow-[inset_0px_2px_4px_black]">
                                            <div className="absolute top-0 left-0 w-6 h-full bg-zinc-700 border-r-2 border-black flex items-center justify-center">
                                                <div className="w-1 h-3 bg-zinc-800"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary neon-cyan-glow"></span>
                                        <span className="text-[9px] text-primary font-bold">STATUS_ACTIVE</span>
                                    </div>
                                </div>
                                <div className="bg-black border-2 border-border-heavy p-4 tactile-switch">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-[10px] font-bold text-gray-300">VALVE_SYSTEM_B</span>
                                        <div className="w-12 h-6 bg-zinc-900 border-2 border-black relative cursor-pointer shadow-[inset_0px_2px_4px_black]">
                                            <div className="absolute top-0 right-0 w-6 h-full bg-zinc-700 border-l-2 border-black flex items-center justify-center">
                                                <div className="w-1 h-3 bg-zinc-800"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-zinc-800"></span>
                                        <span className="text-[9px] text-gray-600 font-bold">MANUAL_BYPASS</span>
                                    </div>
                                </div>
                                <div className="bg-black border-2 border-border-heavy p-4 tactile-switch">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-[10px] font-bold text-gray-300">THERMAL_REG</span>
                                        <div className="w-12 h-6 bg-zinc-900 border-2 border-black relative cursor-pointer shadow-[inset_0px_2px_4px_black]">
                                            <div className="absolute top-0 left-0 w-6 h-full bg-zinc-700 border-r-2 border-black flex items-center justify-center">
                                                <div className="w-1 h-3 bg-zinc-800"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-amber-brutal neon-amber-glow"></span>
                                        <span className="text-[9px] text-amber-brutal font-bold">WARNING_LVL_2</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h4 className="text-[10px] font-bold text-gray-500 mb-4 border-b-2 border-border-heavy pb-1">SUB_PROCESSES</h4>
                            <div className="flex flex-col gap-1">
                                <button className="w-full text-left p-3 border-2 border-border-heavy bg-black hover:bg-primary hover:text-black transition-none font-bold text-xs flex items-center gap-3">
                                    <span className="material-symbols-outlined text-sm">storage</span> MEMORY_CELLS
                                </button>
                                <button className="w-full text-left p-3 border-2 border-border-heavy bg-black hover:bg-primary hover:text-black transition-none font-bold text-xs flex items-center gap-3">
                                    <span className="material-symbols-outlined text-sm">security</span> FIREWALL_ROOT
                                </button>
                                <button className="w-full text-left p-3 border-2 border-border-heavy bg-black hover:bg-primary hover:text-black transition-none font-bold text-xs flex items-center gap-3">
                                    <span className="material-symbols-outlined text-sm">hub</span> NETWORK_MAP
                                </button>
                            </div>
                        </section>
                    </div>
                    <div className="p-4 border-t-4 border-border-heavy bg-black">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[8px] text-gray-500 font-bold">UPTIME_CLOCK</span>
                            <span className="text-[10px] font-bold text-primary tabular-nums tracking-widest">1,042:12:04</span>
                        </div>
                        <button className="w-full py-3 bg-red-brutal text-black border-4 border-black font-bold text-xs active:translate-y-1 shadow-[4px_4px_0px_#000]">
                            EMERGENCY_SCRAM
                        </button>
                    </div>
                </aside>
                <main className="flex-1 overflow-y-auto p-10 relative">
                    <div className="max-w-7xl mx-auto space-y-10 relative">
                        <div className="flex flex-col md:flex-row md:items-end justify-between border-l-8 border-primary pl-8 py-4 bg-black/40 corner-accent corner-top-right">
                            <div>
                                <h1 className="text-6xl font-bold tracking-tighter leading-none text-white" id="dashboard-title">SECTOR_MATRIX</h1>
                                <p className="text-primary text-xs mt-4 font-bold tracking-[0.2em]">ID: DX-200 // AUTH: OMEGA_01 // LVL: SUB_4</p>
                            </div>
                            <div className="mt-8 md:mt-0 flex gap-4">
                                <button className="px-6 py-3 bg-black border-4 border-border-heavy text-[10px] font-bold hover:border-primary">GENERATE_REP</button>
                                <button className="px-6 py-3 bg-primary text-black font-bold text-[10px] border-4 border-black shadow-[4px_4px_0px_#222]">OVERRIDE_LOCK</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-black border-4 border-border-heavy p-6 corner-accent corner-bottom-left">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-bold text-gray-500">PWR_DRAW</span>
                                    <span className="text-primary text-[10px] font-bold neon-cyan-glow bg-primary/10 px-2">STABLE</span>
                                </div>
                                <div className="text-5xl font-bold text-primary mb-4 tracking-tighter">824.5 <span className="text-lg">KW</span></div>
                                <div className="h-2 w-full bg-zinc-900 border border-border-heavy">
                                    <div className="h-full bg-primary" style={{ width: '72%' }}></div>
                                </div>
                            </div>
                            <div className="bg-black border-4 border-border-heavy p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-bold text-gray-500">THERM_LD</span>
                                    <span className="text-amber-brutal text-[10px] font-bold neon-amber-glow bg-amber-brutal/10 px-2">RISING</span>
                                </div>
                                <div className="text-5xl font-bold text-amber-brutal mb-4 tracking-tighter">48.2 <span className="text-lg">°C</span></div>
                                <div className="h-2 w-full bg-zinc-900 border border-border-heavy">
                                    <div className="h-full bg-amber-brutal" style={{ width: '48%' }}></div>
                                </div>
                            </div>
                            <div className="bg-black border-4 border-border-heavy p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-bold text-gray-500">CACHE_UT</span>
                                    <span className="text-primary text-[10px] font-bold neon-cyan-glow bg-primary/10 px-2">PEAK</span>
                                </div>
                                <div className="text-5xl font-bold text-white mb-4 tracking-tighter">92.1 <span className="text-lg">%</span></div>
                                <div className="h-2 w-full bg-zinc-900 border border-border-heavy">
                                    <div className="h-full bg-primary" style={{ width: '92%' }}></div>
                                </div>
                            </div>
                            <div className="bg-black border-4 border-border-heavy p-6 corner-accent corner-bottom-right">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-bold text-gray-500">NET_LAT</span>
                                    <span className="text-primary text-[10px] font-bold neon-cyan-glow bg-primary/10 px-2">NOMINAL</span>
                                </div>
                                <div className="text-5xl font-bold text-white mb-4 tracking-tighter">0.08 <span className="text-lg">MS</span></div>
                                <div className="h-2 w-full bg-zinc-900 border border-border-heavy">
                                    <div className="h-full bg-primary" style={{ width: '15%' }}></div>
                                </div>
                            </div>
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
                                    <div className="flex items-center gap-4 border-b border-border-heavy pb-4">
                                        <div className="w-10 h-10 bg-zinc-800 border-2 border-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary">person</span>
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-bold text-white">ADMIN_KLYNE</div>
                                            <div className="text-[9px] text-primary font-bold">SUPERVISOR_MODE</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 border-b border-border-heavy pb-4">
                                        <div className="w-10 h-10 bg-zinc-800 border-2 border-border-heavy flex items-center justify-center">
                                            <span className="material-symbols-outlined text-gray-500">person</span>
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-bold text-white">TECH_DRAKE</div>
                                            <div className="text-[9px] text-gray-500 font-bold">STATION_04_LOC</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-zinc-800 border-2 border-amber-brutal flex items-center justify-center">
                                            <span className="material-symbols-outlined text-amber-brutal">engineering</span>
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-bold text-white">ENG_VANCE</div>
                                            <div className="text-[9px] text-amber-brutal font-bold">MAINT_REQUIRED</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
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
                        <div className="flex gap-4 border-l-2 border-zinc-800 pl-2">
                            <span className="text-gray-600 font-bold">[14:34:01]</span>
                            <span className="text-primary font-bold">SYS_INFO</span>
                            <span className="text-gray-300">HANDSHAKE_ESTABLISHED_DELTA_NODE</span>
                        </div>
                        <div className="flex gap-4 border-l-2 border-primary pl-2">
                            <span className="text-gray-600 font-bold">[14:34:22]</span>
                            <span className="text-primary font-bold">AUTH_REQ</span>
                            <span className="text-gray-300">IDENTITY_VERIFIED_BIOMETRIC_RELAY_SUCCESS</span>
                        </div>
                        <div className="flex gap-4 border-l-2 border-red-brutal pl-2 bg-red-brutal/5">
                            <span className="text-gray-600 font-bold">[14:35:05]</span>
                            <span className="text-red-brutal font-bold">WARN_PKT</span>
                            <span className="text-red-brutal">PACKET_LOSS_DETECTED_LINE_7G_CRITICAL</span>
                        </div>
                        <div className="flex gap-4 border-l-2 border-zinc-800 pl-2">
                            <span className="text-gray-600 font-bold">[14:35:12]</span>
                            <span className="text-primary font-bold">NET_REOUTE</span>
                            <span className="text-gray-300">DIVERSION_THRU_SUB_SILO_01_COMPLETE</span>
                        </div>
                        <div className="flex gap-4 border-l-2 border-amber-brutal pl-2 bg-amber-brutal/5">
                            <span className="text-gray-600 font-bold">[14:36:00]</span>
                            <span className="text-amber-brutal font-bold">THRM_ALRT</span>
                            <span className="text-amber-brutal">THERMAL_THRESHOLD_APPROACHING_LIMITS</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 p-4 flex flex-col justify-center bg-black">
                    <div className="flex items-center justify-between mb-3 border-b border-border-heavy pb-1">
                        <span className="text-[9px] font-bold text-gray-500">DIAGNOSTIC_MTX</span>
                        <span className="text-[9px] font-bold text-primary tabular-nums tracking-widest">34.05 / 118.24</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-zinc-900 border-2 border-border-heavy p-2 flex flex-col items-center">
                            <span className="text-[8px] text-gray-600 font-bold">CPU</span>
                            <span className="text-xs font-bold text-primary">0.02%</span>
                        </div>
                        <div className="bg-zinc-900 border-2 border-border-heavy p-2 flex flex-col items-center">
                            <span className="text-[8px] text-gray-600 font-bold">NET</span>
                            <span className="text-xs font-bold text-primary">1.2GB/S</span>
                        </div>
                        <div className="bg-zinc-900 border-2 border-border-heavy p-2 flex flex-col items-center">
                            <span className="text-[8px] text-gray-600 font-bold">IO_B</span>
                            <span className="text-xs font-bold text-amber-brutal neon-amber-glow">BUSY</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
