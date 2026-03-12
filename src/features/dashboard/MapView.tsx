import React from 'react';

export function MapView() {
    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[500px] bg-black/40 border-l-8 border-primary p-12 corner-accent corner-top-right">
            <span className="material-symbols-outlined text-6xl text-primary mb-4 opacity-50">map</span>
            <h1 className="text-4xl font-bold tracking-tighter leading-none text-white mb-2" id="dashboard-title">SECTOR_MATRIX</h1>
            <h2 className="text-2xl font-bold text-gray-500 tracking-widest">MAP_INTERFACE_OFFLINE</h2>
            <p className="text-primary text-xs mt-4 font-bold tracking-[0.2em] animate-pulse">AWAITING_SATELLITE_LINK...</p>
        </div>
    );
}
