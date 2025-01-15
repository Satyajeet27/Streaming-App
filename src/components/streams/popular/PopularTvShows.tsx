import CarouselStreamList from '@/components/carousel/CarouselStreamList'
import { useGetPopularTvShowsQuery } from '@/redux/api/api'


const PopularTvShows = () => {
    const { data, isLoading } = useGetPopularTvShowsQuery("")
    return (
        <div className='container  mx-auto my-6 px-4'>
            <h2 className='heading'>Popular Tv Shows</h2>
            <CarouselStreamList data={data} isLoading={isLoading} streamType='Movies' />
        </div>
    )
}

export default PopularTvShows