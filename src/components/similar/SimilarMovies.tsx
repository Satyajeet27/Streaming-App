import { useGetSimilarMoviesQuery } from '@/redux/api/api'
import { Loader } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import LoadingSkeltonCard from '../latest movies-tv/LoadingSkeltonCard'
import MovTvCard from '../latest movies-tv/MovTvCard'
import { LatestShowType } from '@/types/types'

const SimilarMovies = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetSimilarMoviesQuery(Number(id))
    console.log(data)
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='container  mx-auto my-6 px-4'>
            <h2 className='bg-yellow-400 mb-4 py-3 px-6 inline-block rounded-full text-sm font-medium hover:bg-amber-500 text-custom-blue'>Similar Movies</h2>
            <Carousel className='relative'>
                <CarouselContent>
                    {isLoading ? <LoadingSkeltonCard /> :
                        data?.results && data.results.map((result: LatestShowType, index: number) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/6 flex">
                                <MovTvCard latestTagName="Movies" id={result.id} poster_path={result.poster_path} release_date={result.release_date as string || result.first_air_date as string} title={result.title as string || result.name as string} vote_average={result.vote_average} />
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

export default SimilarMovies