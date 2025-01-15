import CarouselHome from '@/components/carousel/CarouselHome'
import LatestMovies from '@/components/streams/latest/LatestMovies'
import PopularMovies from '@/components/streams/popular/PopularMovies'
import UpcomingMovies from '@/components/streams/upcoming/UpcomingMovies'
import { useGetTrendingMoviesQuery } from '@/redux/api/api'
import { StreamResults } from '@/types/types'

const Movies = () => {
    const { data, isLoading } = useGetTrendingMoviesQuery("")
    return (
        <div>
            <CarouselHome data={data as StreamResults} isLoading={isLoading} />
            <div className="">
                <LatestMovies />
                <PopularMovies />
                <UpcomingMovies />
            </div>
        </div>
    )
}

export default Movies