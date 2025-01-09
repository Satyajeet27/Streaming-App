
import { useGetlatestMoviesQuery } from '@/redux/api/api'

import CarouselStreamList from '../carousel/CarouselStreamList'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

const Movies = () => {
    const { data, isLoading } = useGetlatestMoviesQuery("")
    const navigate = useNavigate()
    return (
        <div className='container  mx-auto my-6 px-4'>
            <div className="flex justify-between items-center my-4">
                <h2 className='heading'>Latest Movies</h2>
                <Button onClick={() => navigate("/movies/latest")} variant={"destructive"}>More...</Button>
            </div>
            {/* <Carousel >
                <CarouselContent className=''>
                    {isLoading ? <SkeltonCard /> :
                        data?.results && data.results.map((result: LatestShow, index: number) => (
                            <CarouselItem key={index} className={`basis-48`}>
                                <MovieTvShowCard streamType={"Movies"} id={result.id} poster_path={result.poster_path} release_date={result.release_date as string || result.first_air_date as string} title={result.title as string || result.name as string} vote_average={result.vote_average} />
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

export default Movies