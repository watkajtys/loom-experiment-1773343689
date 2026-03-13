export function getStatusThemeClasses(color: string) {
    const isAmber = color === 'amber';
    const isPrimary = color === 'primary';
    const isRed = color === 'red';

    return {
        textColor: isRed ? 'text-red-brutal' : isAmber ? 'text-amber-brutal' : isPrimary ? 'text-primary' : 'text-gray-600',
        neonClass: isRed ? 'neon-red-glow' : isAmber ? 'neon-amber-glow' : isPrimary ? 'neon-cyan-glow' : '',
        bgClass: isRed ? 'bg-red-brutal' : isAmber ? 'bg-amber-brutal' : isPrimary ? 'bg-primary' : 'bg-zinc-800',
        bgOpacityClass: isRed ? 'bg-red-brutal/10' : isAmber ? 'bg-amber-brutal/10' : isPrimary ? 'bg-primary/10' : 'bg-zinc-800/10',
        indicatorColor: isRed ? 'bg-red-brutal' : isAmber ? 'bg-amber-brutal' : isPrimary ? 'bg-primary' : 'bg-zinc-800'
    };
}

export function getLogThemeClasses(color: string) {
    const isRed = color === 'red';
    const isAmber = color === 'amber';
    const isPrimary = color === 'primary';

    let borderClass = 'border-zinc-800';
    let bgClass = '';
    let textClass = 'text-primary';
    let msgClass = 'text-gray-300';

    if (isRed) {
        borderClass = 'border-red-brutal';
        bgClass = 'bg-red-brutal/5';
        textClass = 'text-red-brutal';
        msgClass = 'text-red-brutal';
    } else if (isAmber) {
        borderClass = 'border-amber-brutal';
        bgClass = 'bg-amber-brutal/5';
        textClass = 'text-amber-brutal';
        msgClass = 'text-amber-brutal';
    } else if (isPrimary) {
        borderClass = 'border-primary';
    }

    return { borderClass, bgClass, textClass, msgClass };
}
