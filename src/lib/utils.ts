import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const isActivePath = (
    currentPath: string,
    path: string,
    isExact = true
) => {
    return isExact
        ? currentPath.split('/').pop() === path
        : currentPath.includes(path);
};
