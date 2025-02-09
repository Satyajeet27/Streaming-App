import CarouselHome from '@/components/carousel/CarouselHome'

import LatestMovies from '@/components/streams/latest/LatestMovies'
import LatestTvShows from '@/components/streams/latest/LatestTvShows'
import { useTrendingAllQuery } from '@/redux/api/api'
import { StreamResults } from '@/types/types'
import { FC } from 'react'

const Home: FC = () => {
    const { data, isLoading } = useTrendingAllQuery("")
    return (
        <div className=''>
            <CarouselHome data={data as StreamResults} isLoading={isLoading} />
            <LatestMovies />
            <LatestTvShows />
        </div>
    )
}

export default Home