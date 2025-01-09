import { useGetlatestTvShowsQuery } from '@/redux/api/api'
import CarouselStreamList from '../carousel/CarouselStreamList'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

const TvShows = () => {
    const { data, isLoading } = useGetlatestTvShowsQuery("")
    const navigate = useNavigate()
    return (
        <div className='container  mx-auto my-6 px-4'>
            <div className="flex justify-between items-center my-4">
                <h2 className='heading'>Latest TV Shows</h2>
                <Button onClick={() => navigate("/tv/latest")} variant={"destructive"}>More...</Button>
            </div>
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
            <CarouselStreamList data={data} isLoading={isLoading} streamType='Tv' />
        </div>
    )
}

export default TvShows