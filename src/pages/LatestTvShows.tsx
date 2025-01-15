import MovieTvShowCard from '@/components/Card/MovieTVShowCard'
import { SkeletonCarouselLoader } from '@/components/Loader/Skeleton'
import { useGetlatestTvShowsQuery } from '@/redux/api/api'

const LatestTvShows = () => {
    const { data, isLoading } = useGetlatestTvShowsQuery("")
    if (isLoading || !data) {
        return <SkeletonCarouselLoader />
    }
    return (
        <div className="container mx-auto">
            <div className="p-1">
                <h2 className='heading  mt-20'>Latest Tv Shows</h2>
                <div className='flex flex-wrap gap-10 '>
                    {
                        data.results.map((result, index) => <MovieTvShowCard key={index} id={result.id} poster_path={result.poster_path} release_date={result.release_date as string} streamType='tv' genre_ids={result.genre_ids} title={result.title as string} vote_average={result.vote_average} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default LatestTvShows