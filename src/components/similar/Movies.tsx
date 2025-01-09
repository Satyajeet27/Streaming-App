import { useGetSimilarMoviesQuery } from '@/redux/api/api'
import { useParams } from 'react-router-dom'
import CarouselStreamList from '../carousel/CarouselStreamList'

const SimilarMovies = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetSimilarMoviesQuery(Number(id))
    return (
        <div className='container  mx-auto mt-1 mb-4 px-4'>
            <h2 className='heading'>Similar Movies</h2>
            {/* <Carousel className='relative'>
                <CarouselContent>
                    {isLoading ? <SkeltonCard /> :
                        data?.results && data.results.map((result: LatestShow, index: number) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/6 flex">
                                <MovieTvShowCard streamType="Movies" id={result.id} poster_path={result.poster_path} release_date={result.release_date as string || result.first_air_date as string} title={result.title as string || result.name as string} vote_average={result.vote_average} />
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

            </Carousel> */}
            <CarouselStreamList data={data} isLoading={isLoading} streamType='Movies' />
        </div>
    )
}

export default SimilarMovies