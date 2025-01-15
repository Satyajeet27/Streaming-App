import CarouselStreamList from '@/components/carousel/CarouselStreamList'
import { useGetPopularMoviesQuery } from '@/redux/api/api'

const PopularMovies = () => {
    const { data, isLoading } = useGetPopularMoviesQuery("")
    return (
        <div className='container  mx-auto my-6 px-4'>
            <h2 className='heading'>Popular Movies</h2>
            <CarouselStreamList data={data} isLoading={isLoading} streamType='movie' />
        </div>
    )
}

export default PopularMovies