import MovTvCard from './MovTvCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { LatestShowType } from '@/types/types'
import { useLatestMoviesQuery } from '@/redux/api/api'
import LoadingSkeltonCard from './LoadingSkeltonCard'


type Props = {
    latestTagName: "Movies" | "Tv"
}

const LatestShows = ({ latestTagName }: Props) => {

    const { data, isLoading } = useLatestMoviesQuery(latestTagName)

    return (
        <div className='container  mx-auto my-6 px-4'>
            <h2 className='bg-yellow-400 mb-4 py-3 px-6 inline-block rounded-full text-sm font-medium hover:bg-amber-500 text-custom-blue'>Latest {latestTagName}</h2>
            <Carousel className='relative'>
                <CarouselContent>
                    {isLoading ? <LoadingSkeltonCard /> :
                        data?.results && data.results.map((result: LatestShowType, index: number) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/6 flex">
                                <MovTvCard latestTagName={latestTagName} id={result.id} poster_path={result.poster_path} release_date={result.release_date as string || result.first_air_date as string} title={result.title as string || result.name as string} vote_average={result.vote_average} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all"
                />
                <CarouselNext
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all"
                />
            </Carousel>

        </div>
    )
}

export default LatestShows