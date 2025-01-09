import CarouselHome from '@/components/carousel/CarouselHome'

import Movies from '@/components/latest-streams/Movies'
import TvShows from '@/components/latest-streams/TvShows'
import { FC } from 'react'

const Home: FC = () => {
    return (
        <div className=''>
            <CarouselHome />
            <Movies />
            <TvShows />
        </div>
    )
}

export default Home