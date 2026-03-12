import React from 'react';

export function TelemetryChart() {
    return (
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
    );
}
