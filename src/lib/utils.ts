import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const isActivePath = (
    currentPath: string,
    path: string,
    exactMatch = true,
    notIncludes = ''
) => {
    if (exactMatch === false) {
        if (notIncludes) {
            return (
                !currentPath.includes(notIncludes) && currentPath.includes(path)
            );
        }

        return currentPath.includes(path);
    }

    return (
        currentPath
            .replace(/(^\/+|\/+$)/gm, '')
            .split('/')
            .pop() === path
    );
};

export const getCurrentPath = (url: string) => {
    return url
        .replace(/(^\/+|\/+$)/gm, '')
        .split('/')
        .pop();
};
