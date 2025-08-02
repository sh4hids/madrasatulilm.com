export type SiteConfig = {
    author: string;
    title: string;
    description: string;
    lang: string;
    ogLocale: string;
    date: {
        locale: string | string[] | undefined;
        options: Intl.DateTimeFormatOptions;
    };
};

export type SiteMeta = {
    title: string;
    description?: string;
    ogImage?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
};

export const siteConfig: SiteConfig = {
    author: 'Shahidul Islam Majumder',
    title: 'মাদ্‌রাসাতুল ইল্‌ম',
    description: 'বিশুদ্ধ ইসলামি জ্ঞানের এক নির্ভরযোগ্য প্রতিষ্ঠান',
    lang: 'bn',
    ogLocale: 'bn_BD',
    date: {
        locale: 'en-US',
        options: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        },
    },
};

export const PAGE_SIZE = 10;
