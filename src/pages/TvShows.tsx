import CarouselHome from '@/components/carousel/CarouselHome'
import LatestTvShows from '@/components/streams/latest/LatestTvShows'
import PopularTvShows from '@/components/streams/popular/PopularTvShows'
import { useGetTrendingTvShowsQuery } from '@/redux/api/api'
import { StreamResults } from '@/types/types'


const TvShows = () => {
    const { data, isLoading } = useGetTrendingTvShowsQuery("")
    return (
        <div>
            <CarouselHome data={data as StreamResults} isLoading={isLoading} />
            <LatestTvShows />
            <PopularTvShows />
        </div>
    )
}

export default TvShows