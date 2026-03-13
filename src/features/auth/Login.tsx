import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from './authService';

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
      await authService.login(operatorId, accessKey);
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Authentication failed:', err);
      setError(err.message || 'AUTHENTICATION_FAILED');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start p-8 gap-8 w-full">
      {/* SYS_ACCESS BLOCK */}
      <div className="w-full max-w-4xl bg-black border-4 border-border-heavy p-8 corner-accent corner-top-left corner-top-right">
        <div className="flex justify-between items-center mb-8 border-b-4 border-border-heavy pb-4">
          <h2 className="text-3xl font-bold tracking-[0.2em] text-primary">SYS_ACCESS</h2>
          <div className="flex gap-2">
            <div className="w-4 h-4 border-2 border-primary"></div>
            <div className="w-4 h-4 bg-primary neon-cyan-glow"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div className="space-y-4 lg:col-span-1">
            <div className="bg-primary/10 border-l-4 border-primary p-4">
              <p className="text-[10px] text-primary font-bold">PROVIDE OPERATOR CREDENTIALS TO INITIALIZE HARDWARE INTERFACE. IF NEW UNIT: PROCEED TO GRID_ENROLLMENT BELOW.</p>
            </div>
            {error && (
              <div className="bg-red-brutal/10 border-l-4 border-red-brutal p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-brutal">error</span>
                <p className="text-[10px] text-red-brutal font-bold">{error}</p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleLogin} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold tracking-widest block uppercase">Operator_ID</label>
                <input 
                  type="text" 
                  value={operatorId}
                  onChange={(e) => setOperatorId(e.target.value)}
                  className="input-industrial w-full" 
                  placeholder="ID_STATION_XXXX" 
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold tracking-widest block uppercase">Access_Key</label>
                <div className="flex relative">
                  <input 
                    type="password" 
                    value={accessKey}
                    onChange={(e) => setAccessKey(e.target.value)}
                    className="input-industrial w-full font-mono text-lg tracking-[0.3em] pl-4 pr-12" 
                    placeholder="********" 
                    disabled={isLoading}
                    required
                  />
                  <div className="absolute right-0 top-0 h-full w-12 border-l-2 border-border-heavy bg-zinc-900 flex items-center justify-center cursor-help">
                    <span className="material-symbols-outlined text-zinc-600 text-sm">key</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end h-[42px]">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full px-4 py-2 bg-primary text-black font-bold text-sm border-4 border-black hover:bg-white transition-colors shadow-[4px_4px_0px_#00f3ff55] disabled:opacity-50 disabled:cursor-not-allowed h-full flex items-center justify-center whitespace-nowrap"
                >
                  {isLoading ? 'AUTHENTICATING...' : 'INIT_HANDSHAKE'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* GRID_ENROLLMENT_V3.2 BLOCK */}
      <div className="w-full max-w-4xl bg-black border-4 border-border-heavy p-8 corner-accent corner-bottom-left corner-bottom-right mt-8">
        <div className="flex items-center gap-4 mb-8 border-b-4 border-border-heavy pb-4">
          <div className="bg-amber-brutal text-black px-2 py-1 text-[10px] font-bold">TASK_OBJ</div>
          <h2 className="text-2xl font-bold tracking-[0.2em] text-white">GRID_ENROLLMENT_V3.2</h2>
          <div className="ml-auto flex gap-2">
            <div className="w-4 h-2 bg-amber-brutal"></div>
            <div className="w-4 h-2 bg-zinc-800"></div>
            <div className="w-4 h-2 bg-zinc-800"></div>
            <div className="w-4 h-2 bg-zinc-800"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 01: ID_VALIDATION */}
          <div className="space-y-6">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-amber-brutal leading-none">01</span>
              <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase">ID_VALIDATION</h3>
            </div>
            
            <div className="space-y-4">
              <input 
                type="text" 
                className="input-industrial w-full bg-transparent border-2 border-border-heavy focus:border-amber-brutal focus:ring-amber-brutal transition-colors placeholder:text-zinc-600" 
                placeholder="FULL_NAME" 
              />
              <input 
                type="text" 
                className="input-industrial w-full bg-transparent border-2 border-border-heavy focus:border-amber-brutal focus:ring-amber-brutal transition-colors placeholder:text-zinc-600" 
                placeholder="SECTOR_ASSIGNMENT" 
              />
              
              <div className="mt-4 border-2 border-dashed border-border-heavy p-8 flex flex-col items-center justify-center cursor-pointer hover:border-amber-brutal hover:bg-amber-brutal/5 transition-colors group">
                <span className="material-symbols-outlined text-zinc-600 text-4xl mb-2 group-hover:text-amber-brutal transition-colors">fingerprint</span>
                <span className="text-[10px] text-zinc-600 font-bold group-hover:text-amber-brutal transition-colors">SCAN_BIOMETRIC_DATA</span>
              </div>
            </div>
          </div>

          {/* Section 02: AUTH_LEVEL_SET */}
          <div className="space-y-6 md:border-l-2 md:border-r-2 md:border-border-heavy md:px-8">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-amber-brutal leading-none">02</span>
              <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase">AUTH_LEVEL_SET</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="py-3 border-2 border-border-heavy text-[10px] font-bold text-gray-400 hover:border-primary hover:text-primary transition-colors bg-zinc-900/50">LVL_01</button>
              <button type="button" className="py-3 border-2 border-border-heavy text-[10px] font-bold text-gray-400 hover:border-primary hover:text-primary transition-colors bg-zinc-900/50">LVL_02</button>
              <button type="button" className="py-3 border-2 border-border-heavy text-[10px] font-bold text-gray-400 hover:border-primary hover:text-primary transition-colors bg-zinc-900/50">LVL_03</button>
              <button type="button" className="py-3 border-2 border-border-heavy text-[10px] font-bold text-gray-400 hover:border-primary hover:text-primary transition-colors bg-zinc-900/50">LVL_OMEGA</button>
            </div>
            
            <div className="mt-6 bg-amber-brutal/10 border-l-4 border-amber-brutal p-4 flex gap-3">
              <span className="material-symbols-outlined text-amber-brutal text-sm">warning</span>
              <p className="text-[10px] text-amber-brutal font-bold leading-tight">OMEGA_LEVEL REQUIRES PHYSICAL_KEY_CARD INSERTION.</p>
            </div>
          </div>

          {/* Section 03: PROVISION_INIT */}
          <div className="space-y-6">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-amber-brutal leading-none">03</span>
              <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase">PROVISION_INIT</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[8px] font-bold text-gray-500 tracking-widest">COMPILING_PROFILES...</span>
                <span className="text-[8px] font-bold text-amber-brutal">0%</span>
              </div>
              <div className="w-full h-1 bg-zinc-800">
                <div className="h-full bg-amber-brutal w-0"></div>
              </div>
              
              <button type="button" className="w-full py-6 mt-6 bg-zinc-900 border-2 border-border-heavy text-zinc-600 text-xs font-bold tracking-widest hover:border-amber-brutal hover:text-amber-brutal transition-colors">
                EXECUTE_PROVISIONING
              </button>
              
              <p className="text-[8px] text-center text-zinc-600 mt-4 leading-relaxed font-mono">
                SYSTEM_ID_09894: COMPILE PROCESS STEPS TO UNLOCK FINAL EXECUTION
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
