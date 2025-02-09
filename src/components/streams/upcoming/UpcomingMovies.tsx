import CarouselStreamList from '@/components/carousel/CarouselStreamList'
import { useGetUpcomingMoviesQuery } from '@/redux/api/api'

const UpcomingMovies = () => {
    const { data, isLoading } = useGetUpcomingMoviesQuery("")
    return (
        <div className='container  mx-auto my-6 px-4'>
            <h2 className='heading'>Upcoming Movies</h2>
            <CarouselStreamList data={data} isLoading={isLoading} streamType='movie' />
        </div>
    )
}

export default UpcomingMovies