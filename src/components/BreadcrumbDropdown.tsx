import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { BreadcrumbItem } from './types';
import { ChevronRight, Ellipsis } from 'lucide-react';

type Props = {
    menuItems: BreadcrumbItem[];
};

function BreadcrumbDropdown({ menuItems }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Ellipsis className="text-foreground/60 relative -top-0.25 inline-block" />
                <ChevronRight className="text-foreground/60 relative -top-0.25 inline-block" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {menuItems.map((item) => (
                    <DropdownMenuItem>
                        <a
                            className="inline-block h-full w-full"
                            href={item.url}
                        >
                            {item.label}
                        </a>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default BreadcrumbDropdown;
