import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { StreamResults } from '@/types/types'
import MovieTvShowCard from '../Card/MovieTVShowCard'
import SkeltonCard from '../Loader/SkeletonCard'

type Props = {
    data: StreamResults | undefined
    streamType: "Tv" | "Movies";
    isLoading: boolean;
}

const CarouselStreamList = ({ data, isLoading, streamType }: Props) => {
    return (
        <Carousel >
            <CarouselContent className=''>
                {isLoading ? <SkeltonCard /> :
                    data?.results && data.results.slice(0, 10).map((result, index: number) => (
                        <CarouselItem key={index} className={`basis-48`}>
                            <MovieTvShowCard streamType={streamType} id={result.id} poster_path={result.poster_path} release_date={result.release_date as string || result.first_air_date as string} title={result.title as string || result.name as string} vote_average={result.vote_average} />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            {
                !isLoading && (
                    <>
                        <CarouselPrevious
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all"
                        />
                        <CarouselNext
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all"
                        />
                    </>
                )
            }

        </Carousel>
    )
}

export default CarouselStreamList