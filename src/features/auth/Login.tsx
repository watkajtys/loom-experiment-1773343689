import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pb } from '../../lib/pocketbase';

export function Login() {
  const [operatorId, setOperatorId] = useState('');
  const [accessKey, setAccessKey] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Unified authentication handler for login operations
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await pb.collection('users').authWithPassword(operatorId, accessKey);
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Authentication failed:', err);
      setError(err.message || 'AUTHENTICATION_FAILED');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full border-[6px] border-border-heavy">
      <header className="h-14 bg-panel-industrial border-b-[6px] border-border-heavy flex items-center justify-between px-4 z-40 shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 bg-primary px-5 py-2 border-r-4 border-b-4 border-black">
            <span className="material-symbols-outlined text-black scale-110 font-bold">security</span>
            <span className="text-black font-bold text-sm tracking-[0.2em]">AUTH_PROVISIONING_MOD_3</span>
          </div>
          <div className="flex gap-8 border-l-2 border-border-heavy pl-8">
            <div className="flex flex-col">
              <span className="text-[9px] text-zinc-500 font-bold">KERNEL_STATUS</span>
              <div className="flex gap-1 mt-1">
                <div className="w-3 h-3 bg-primary neon-cyan-glow"></div>
                <div className="w-3 h-3 bg-zinc-800"></div>
                <div className="w-3 h-3 bg-zinc-800"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-zinc-500 font-bold">ENCRYPTION_LAYER</span>
              <span className="text-[11px] text-amber-brutal font-bold">RSA_4096_PENDING</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex bg-black border-2 border-border-heavy p-1">
            <button className="px-6 py-1 text-[11px] font-bold border border-transparent text-zinc-500 hover:text-primary">HELP</button>
            <button className="px-6 py-1 bg-zinc-800 text-primary text-[11px] font-bold border border-border-heavy">PROVISION</button>
          </div>
          <div className="flex items-center gap-3 bg-red-brutal/20 border-2 border-red-brutal px-4 py-1.5">
            <span className="w-2.5 h-2.5 bg-red-brutal neon-red-glow"></span>
            <span className="text-[11px] text-red-brutal font-bold">HARDWARE_LOCKED</span>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-80 bg-panel-industrial border-r-[6px] border-border-heavy flex flex-col shrink-0 z-30">
          <div className="p-5 flex-1 flex flex-col gap-10 overflow-y-auto terminal-scroll">
            <section>
              <div className="flex justify-between items-center mb-6 border-b-2 border-red-brutal/40 pb-2">
                <h4 className="text-[11px] font-bold text-red-brutal">HARDWARE_SUBSYSTEMS</h4>
                <span className="text-[9px] text-red-brutal font-bold">[LOCKED]</span>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div className="bg-black/50 border-2 border-zinc-900 p-4 tactile-switch-locked">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-bold text-zinc-600">PRIMARY_CORE_A</span>
                    <div className="w-12 h-6 bg-zinc-950 border-2 border-zinc-900 relative">
                      <div className="absolute top-0 right-0 w-6 h-full bg-zinc-800 flex items-center justify-center">
                        <div className="w-1.5 h-3 bg-zinc-900"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-red-brutal/30"></span>
                    <span className="text-[10px] text-zinc-600 font-bold">SIG_OFFLINE</span>
                  </div>
                </div>
                <div className="bg-black/50 border-2 border-zinc-900 p-4 tactile-switch-locked">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-bold text-zinc-600">VALVE_ARRAY_04</span>
                    <div className="w-12 h-6 bg-zinc-950 border-2 border-zinc-900 relative">
                      <div className="absolute top-0 right-0 w-6 h-full bg-zinc-800 flex items-center justify-center">
                        <div className="w-1.5 h-3 bg-zinc-900"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-red-brutal/30"></span>
                    <span className="text-[10px] text-zinc-600 font-bold">SIG_OFFLINE</span>
                  </div>
                </div>
                <div className="bg-black/50 border-2 border-zinc-900 p-4 tactile-switch-locked">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-bold text-zinc-600">HEAT_EXCHANGER</span>
                    <div className="w-12 h-6 bg-zinc-950 border-2 border-zinc-900 relative">
                      <div className="absolute top-0 right-0 w-6 h-full bg-zinc-800 flex items-center justify-center">
                        <div className="w-1.5 h-3 bg-zinc-900"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-red-brutal/30"></span>
                    <span className="text-[10px] text-zinc-600 font-bold">SIG_OFFLINE</span>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h4 className="text-[11px] font-bold text-zinc-500 mb-4 border-b-2 border-border-heavy pb-1">RECOVERY_TOOLS</h4>
              <div className="flex flex-col gap-2">
                <button className="w-full text-left p-4 border-2 border-border-heavy bg-black/40 text-zinc-600 font-bold text-xs flex items-center gap-4 cursor-not-allowed">
                  <span className="material-symbols-outlined text-sm">key_visualizer</span> KEY_BYPASS
                </button>
                <button className="w-full text-left p-4 border-2 border-border-heavy bg-black/40 text-zinc-600 font-bold text-xs flex items-center gap-4 cursor-not-allowed">
                  <span className="material-symbols-outlined text-sm">terminal</span> ROOT_CONSOLE
                </button>
              </div>
            </section>
          </div>
          <div className="p-6 border-t-4 border-border-heavy bg-black">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[9px] text-zinc-500 font-bold">BOOT_TIME</span>
              <span className="text-[11px] font-bold text-zinc-400 tabular-nums">00:00:42:19</span>
            </div>
            <div className="w-full py-4 bg-zinc-900 text-zinc-600 border-4 border-zinc-800 font-bold text-xs text-center">
              SYSTEM_LOCKED
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto p-12 relative bg-black/20">
          <div className="max-w-6xl mx-auto space-y-12 relative">
            <div className="bg-black border-[4px] border-primary p-8 corner-accent corner-top-left corner-top-right shadow-[10px_10px_0px_#003438]">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                  <h2 className="text-3xl font-bold tracking-tighter text-primary border-b-4 border-primary mb-4 pb-2">SYS_ACCESS</h2>
                  <p className="text-[10px] text-primary/70 font-bold leading-relaxed">PROVIDE OPERATOR CREDENTIALS TO INITIALIZE HARDWARE INTERFACE. IF NEW UNIT: PROCEED TO GRID_ENROLLMENT BELOW.</p>
                </div>
                <form onSubmit={handleLogin} className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary">OPERATOR_ID</label>
                    <input 
                      className="input-industrial w-full" 
                      placeholder="ID_STATION_XXXX" 
                      type="text" 
                      value={operatorId}
                      onChange={(e) => setOperatorId(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary">ACCESS_KEY</label>
                    <input 
                      className="input-industrial w-full" 
                      placeholder="********" 
                      type="password" 
                      value={accessKey}
                      onChange={(e) => setAccessKey(e.target.value)}
                      required
                    />
                  </div>
                  {error && (
                    <div className="md:col-span-2 p-2 bg-red-brutal/20 border-2 border-red-brutal text-red-brutal text-xs font-bold text-center">
                      ERROR: {error}
                    </div>
                  )}
                  <div className="md:col-span-2 flex justify-end">
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="px-10 py-3 bg-primary text-black font-bold text-sm border-4 border-black hover:bg-white transition-colors shadow-[4px_4px_0px_#00f3ff55] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'AUTHENTICATING...' : 'INIT_HANDSHAKE'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-black border-[4px] border-border-heavy p-8 corner-accent corner-bottom-left corner-bottom-right">
              <div className="flex justify-between items-center mb-10 border-b-4 border-border-heavy pb-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs bg-amber-brutal text-black font-bold px-3 py-1">TASK_REQ</span>
                  <h2 className="text-2xl font-bold tracking-[0.1em]">GRID_ENROLLMENT_V3.2</h2>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-2 bg-amber-brutal"></div>
                  <div className="w-8 h-2 bg-zinc-800"></div>
                  <div className="w-8 h-2 bg-zinc-800"></div>
                  <div className="w-8 h-2 bg-zinc-800"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-6 border-r-2 border-border-heavy pr-8">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-amber-brutal">01</span>
                    <span className="text-xs font-bold text-zinc-500">ID_VALIDATION</span>
                  </div>
                  <div className="space-y-4">
                    <input className="input-industrial w-full border-zinc-800" placeholder="FULL_NAME" type="text" />
                    <input className="input-industrial w-full border-zinc-800" placeholder="SECTOR_ASSIGNMENT" type="text" />
                    <div className="p-4 border-2 border-dashed border-zinc-800 bg-zinc-900/30 text-center">
                      <span className="material-symbols-outlined text-zinc-600 mb-2">fingerprint</span>
                      <p className="text-[9px] text-zinc-600 font-bold">SCAN_BIOMETRIC_DATA</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 border-r-2 border-border-heavy pr-8">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-amber-brutal">02</span>
                    <span className="text-xs font-bold text-zinc-500">AUTH_LEVEL_SET</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 border-2 border-zinc-800 text-[10px] font-bold text-zinc-500 hover:border-amber-brutal hover:text-amber-brutal">LVL_01</button>
                    <button className="p-3 border-2 border-zinc-800 text-[10px] font-bold text-zinc-500 hover:border-amber-brutal hover:text-amber-brutal">LVL_02</button>
                    <button className="p-3 border-2 border-zinc-800 text-[10px] font-bold text-zinc-500 hover:border-amber-brutal hover:text-amber-brutal">LVL_03</button>
                    <button className="p-3 border-2 border-zinc-800 text-[10px] font-bold text-zinc-500 hover:border-amber-brutal hover:text-amber-brutal">LVL_OMEGA</button>
                  </div>
                  <div className="flex items-start gap-3 bg-amber-brutal/5 p-4 border border-amber-brutal/20">
                    <span className="material-symbols-outlined text-amber-brutal text-sm">warning</span>
                    <p className="text-[9px] text-amber-brutal font-bold">OMEGA_LEVEL REQUIRES PHYSICAL KEY_CARD INSERTION.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-amber-brutal">03</span>
                    <span className="text-xs font-bold text-zinc-500">PROVISION_INIT</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-zinc-500">COMPILING_PROFILES...</span>
                        <span className="text-amber-brutal">0%</span>
                      </div>
                      <div className="h-4 bg-zinc-900 border-2 border-zinc-800 p-0.5">
                        <div className="h-full bg-zinc-700 w-0"></div>
                      </div>
                    </div>
                    <button className="w-full py-6 bg-zinc-900 border-4 border-zinc-800 text-zinc-700 font-bold text-sm tracking-widest cursor-not-allowed">
                      EXECUTE_PROVISIONING
                    </button>
                    <p className="text-[8px] text-zinc-600 font-bold text-center">SYSTEM_STANDBY: COMPLETE PREVIOUS STEPS TO UNLOCK FINAL EXECUTION</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="h-36 bg-panel-industrial border-t-[6px] border-border-heavy grid grid-cols-12 z-40 shrink-0">
        <div className="col-span-3 border-r-4 border-border-heavy p-5 flex flex-col justify-center bg-black">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-amber-brutal text-sm">hub</span>
            <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-500">NETWORK_GATE</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-[10px] font-bold">
              <span className="text-zinc-500">LINK_VERIFICATION</span>
              <span className="text-red-brutal">WAITING...</span>
            </div>
            <div className="h-2 w-full bg-zinc-900">
              <div className="h-full bg-red-brutal/30" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-4 border-border-heavy bg-black p-5 font-mono text-[10px] overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-3 text-primary font-bold border-b border-primary/30 pb-1">
            <span className="tracking-[0.3em]">AUTH_TACTICAL_LOG_STREAM</span>
            <span className="text-zinc-500">NODE_001_BOOT</span>
          </div>
          <div className="flex-1 overflow-y-auto pr-4 space-y-1.5 terminal-scroll">
            <div className="flex gap-4 border-l-2 border-zinc-800 pl-3">
              <span className="text-zinc-600 font-bold">[00:00:01]</span>
              <span className="text-zinc-400 font-bold">KERN</span>
              <span className="text-zinc-500">KERNEL_BOOT_SEQUENCE_INITIALIZED</span>
            </div>
            <div className="flex gap-4 border-l-2 border-zinc-800 pl-3">
              <span className="text-zinc-600 font-bold">[00:00:05]</span>
              <span className="text-zinc-400 font-bold">MEM_</span>
              <span className="text-zinc-500">ALLOCATING_PAGES_78122_SUCCESS</span>
            </div>
            <div className="flex gap-4 border-l-2 border-red-brutal pl-3 bg-red-brutal/10">
              <span className="text-red-brutal font-bold">[00:00:12]</span>
              <span className="text-red-brutal font-bold">LOCK</span>
              <span className="text-red-brutal">HARDWARE_SUBSYSTEMS_FROZEN_PENDING_AUTH</span>
            </div>
            <div className="flex gap-4 border-l-2 border-zinc-800 pl-3">
              <span className="text-zinc-600 font-bold">[00:00:30]</span>
              <span className="text-primary font-bold">SERV</span>
              <span className="text-zinc-500">PROVISIONING_PORT_8080_LISTENING</span>
            </div>
            <div className="flex gap-4 border-l-2 border-amber-brutal pl-3 bg-amber-brutal/5">
              <span className="text-zinc-600 font-bold">[00:00:42]</span>
              <span className="text-amber-brutal font-bold">WAIT</span>
              <span className="text-amber-brutal">AWAITING_GRID_ENROLLMENT_PACKETS...</span>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-5 flex flex-col justify-center bg-black">
          <div className="flex items-center justify-between mb-4 border-b border-border-heavy pb-2">
            <span className="text-[10px] font-bold text-zinc-500">PROVISIONING_MTX</span>
            <span className="text-[10px] font-bold text-primary tabular-nums tracking-widest">0.00 / 100.00</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-zinc-950 border-2 border-zinc-900 p-3 flex flex-col items-center">
              <span className="text-[9px] text-zinc-700 font-bold">DB_SYNC</span>
              <span className="text-[10px] font-bold text-zinc-800">0%</span>
            </div>
            <div className="bg-zinc-950 border-2 border-zinc-900 p-3 flex flex-col items-center">
              <span className="text-[9px] text-zinc-700 font-bold">NET_UP</span>
              <span className="text-[10px] font-bold text-zinc-800">0.0B</span>
            </div>
            <div className="bg-zinc-950 border-2 border-zinc-900 p-3 flex flex-col items-center">
              <span className="text-[9px] text-zinc-700 font-bold">IO_STAT</span>
              <span className="text-[10px] font-bold text-zinc-800">IDLE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
