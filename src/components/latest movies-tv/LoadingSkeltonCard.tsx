import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import { CarouselItem } from '../ui/carousel'

const LoadingSkeltonCard = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function changeWidth() {
            setWidth(Math.round(window.innerWidth / 192));
        }

        window.addEventListener("resize", changeWidth);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    return (

        <CarouselItem>
            <div className="flex gap-4">
                {
                    Array.from({ length: width }).map((_, index) => (
                        <Skeleton key={index} className='w-48 h-72' />
                    ))
                }

            </div>
        </CarouselItem>

    )
}

export default LoadingSkeltonCard