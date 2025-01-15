import { useGetSimilarTvShowsQuery } from '@/redux/api/api'
import { useParams } from 'react-router-dom'
import CarouselStreamList from '../../carousel/CarouselStreamList'

const TvShows = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetSimilarTvShowsQuery(Number(id))
    return (
        <div className='container  mx-auto my-6 px-4'>
            <h2 className='heading'>Similar TV Shows</h2>
            {/* <Carousel >
                <CarouselContent className=''>
                    {isLoading ? <SkeltonCard /> :
                        data?.results && data.results.map((result: LatestShow, index: number) => (
                            <CarouselItem key={index} className={`basis-48`}>
                                <MovieTvShowCard streamType={"Tv"} id={result.id} poster_path={result.poster_path} release_date={result.release_date as string || result.first_air_date as string} title={result.title as string || result.name as string} vote_average={result.vote_average} />
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
            <CarouselStreamList data={data} isLoading={isLoading} streamType='tv' />
        </div>
    )
}

export default TvShows