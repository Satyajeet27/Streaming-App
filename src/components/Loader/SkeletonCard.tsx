import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import { CarouselItem } from '../ui/carousel'

const SkeltonCard = () => {
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

        <>
            {
                Array.from({ length: width }).map((_, index) => (
                    <CarouselItem className='basis-44 md:basis-48' key={index}>
                        <Skeleton key={index} className='w-40 md:w-44 h-72' />
                    </CarouselItem>
                ))
            }

        </>


    )
}

export default SkeltonCard