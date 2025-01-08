import CarouselHome from '@/components/carousel/CarouselHome'
import LatestShows from '@/components/latest movies-tv/LatestShows'
import { FC } from 'react'

const Home: FC = () => {


    return (
        <div className=''>
            <CarouselHome />
            <LatestShows latestTagName='Movies' />
            <LatestShows latestTagName='Tv' />
        </div>
    )
}

export default Home