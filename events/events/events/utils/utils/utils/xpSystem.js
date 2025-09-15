const xpMap = new Map();

export function addXP(userId, amount=10) {
    const xp = xpMap.get(userId) || 0;
    xpMap.set(userId, xp + amount);
    return xpMap.get(userId);
}

export function getXP(userId) {
    return xpMap.get(userId) || 0;
}

export function getTopXP(count=10) {
    return [...xpMap.entries()].sort((a,b)=>b[1]-a[1]).slice(0,count);
}
