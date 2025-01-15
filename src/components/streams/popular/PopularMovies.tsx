import CarouselStreamList from '@/components/carousel/CarouselStreamList'
import { useGetPopularMoviesQuery } from '@/redux/api/api'
import React from 'react'

const PopularMovies = () => {
    const { data, isLoading } = useGetPopularMoviesQuery("")
    return (
        <div className='container  mx-auto my-6 px-4'>
            <h2 className='heading'>Popular Movies</h2>
            <CarouselStreamList data={data} isLoading={isLoading} streamType='Movies' />
        </div>
    )
}

export default PopularMovies