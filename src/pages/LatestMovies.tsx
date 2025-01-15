import MovieTvShowCard from '@/components/Card/MovieTVShowCard'
import { SkeletonCarouselLoader } from '@/components/Loader/Skeleton'
import { useGetlatestMoviesQuery } from '@/redux/api/api'

const LatestMovies = () => {
    const { data, isLoading } = useGetlatestMoviesQuery("")
    if (isLoading || !data) {
        return <SkeletonCarouselLoader />
    }
    return (
        <div className="container mx-auto">
            <div className="p-1">
                <h2 className='heading  mt-20'>Latest Movies</h2>
                <div className='flex flex-wrap gap-10 '>
                    {
                        data.results.map((result, index) => <MovieTvShowCard key={index} id={result.id} poster_path={result.poster_path} release_date={result.release_date as string} streamType='movie' title={result.title as string} vote_average={result.vote_average} genre_ids={result.genre_ids} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default LatestMovies