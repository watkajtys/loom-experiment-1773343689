import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'danger' | 'sidebar' | 'secondary';
    fullWidth?: boolean;
    icon?: string;
    className?: string;
    children?: ReactNode;
}

export function Button({ variant = 'primary', fullWidth = false, icon, className = '', children, ...props }: ButtonProps) {
    const baseClasses = 'font-bold flex items-center justify-center gap-3 transition-none';
    
    let variantClasses = '';
    switch (variant) {
        case 'primary':
            variantClasses = 'px-6 py-3 bg-primary text-black text-[10px] border-4 border-black shadow-[4px_4px_0px_#222] active:translate-y-1';
            break;
        case 'secondary':
            variantClasses = 'px-6 py-3 bg-black border-4 border-border-heavy text-[10px] hover:border-primary active:translate-y-1';
            break;
        case 'danger':
            variantClasses = 'w-full py-3 bg-red-brutal text-black border-4 border-black font-bold text-xs active:translate-y-1 shadow-[4px_4px_0px_#000]';
            break;
        case 'sidebar':
            variantClasses = 'w-full text-left p-3 border-2 border-border-heavy bg-black hover:bg-primary hover:text-black transition-none font-bold text-xs flex items-center gap-3 text-white';
            break;
    }

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button className={`${baseClasses} ${variantClasses} ${widthClass} ${className}`} {...props}>
            {icon && <span className="material-symbols-outlined text-sm">{icon}</span>}
            {children}
        </button>
    );
}
