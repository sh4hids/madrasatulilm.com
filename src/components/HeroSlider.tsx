import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';

const images = [
    'madrasatul-ilm-08.jpeg',
    'madrasatul-ilm-02.jpeg',
    'madrasatul-ilm-03.jpg',
    'madrasatul-ilm-01.jpeg',
    'madrasatul-ilm-11.jpeg',
    'madrasatul-ilm-03.jpg',
];

export default function HeroSlider() {
    return (
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
            className="w-full max-w-xs"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="overflow-hidden rounded-md">
                            <img src={`images/${images[index]}`} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
