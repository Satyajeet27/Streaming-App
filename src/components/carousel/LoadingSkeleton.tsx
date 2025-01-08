import { CarouselContent, CarouselItem } from '../ui/carousel'
import { Skeleton } from '../ui/skeleton'

const LoadingSkeleton = () => {
    return (
        <CarouselContent>
            {
                [1, 2, 3].map(item => (
                    <CarouselItem key={item}>
                        <div className="relative flex justify-center items-center h-[70vh]">
                            <div className="w-full h-full bg-gray-200 animate-pulse" />
                            <div className="absolute z-20 md:left-10 space-y-2 top-2/3 md:top-1/2 w-[90%] md:w-1/4">
                                <Skeleton className="h-10 w-3/4 bg-gray-300" />
                                <Skeleton className="h-20 w-full bg-gray-300" />
                                <div className="flex gap-2">
                                    <Skeleton className="h-4 w-24 bg-gray-300" />
                                    <Skeleton className="h-4 w-24 bg-gray-300" />
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))
            }
        </CarouselContent>
    )
}

export default LoadingSkeleton