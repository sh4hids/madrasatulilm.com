import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

function BookInfo({
    name,
    description,
}: {
    name: string;
    description: string;
}) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <p className="line-clamp-1 p-0">{name}</p>
            </HoverCardTrigger>
            <HoverCardContent>
                <div
                    className="text-xs *:pt-2 *:first:pt-0"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </HoverCardContent>
        </HoverCard>
    );
}

export default BookInfo;
