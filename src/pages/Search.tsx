import CarouselStreamList from '@/components/carousel/CarouselStreamList';
import { useGetMoviesandTvShowsBySearchQuery } from '@/redux/api/api';
import { Result, StreamResults } from '@/types/types';
import { useSearchParams } from 'react-router-dom';

type Props = {
    movieLists: {
        results: Result[]
    };
    tvShowList: {
        results: Result[]
    };
}

const Search = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get('query'); // Retrieve the 'query' parameter

    const { data, isLoading } = useGetMoviesandTvShowsBySearchQuery(query as string)
    const streamList: Props = {
        movieLists: {
            results: []
        },
        tvShowList: {
            results: []
        }
    }

    streamList.movieLists.results = data?.results.filter(result => result.media_type === "movie") as Result[]
    streamList.tvShowList.results = data?.results.filter(result => result.media_type === "tv") as Result[]
    return (
        <div className="container mx-auto my-24 p-4">
            <h1 className="text-2xl text-gray-200 font-bold">Search Results</h1>
            {query ? (
                <div className="">
                    <p className="text-gray-300 mt-2">Showing results for: <strong>{query}</strong></p>
                    {
                        streamList?.movieLists.results?.length > 0 && <div className="my-2">
                            <div className="heading">Movies</div>
                            <CarouselStreamList data={streamList.movieLists as StreamResults} isLoading={isLoading} streamType='movie' />
                        </div>
                    }
                    {
                        streamList.tvShowList.results?.length > 0 && <div className="my-2">
                            <div className="heading">Tv Shows</div>
                            <CarouselStreamList data={streamList.tvShowList as StreamResults} isLoading={isLoading} streamType='tv' />
                        </div>
                    }

                </div>
            ) : (
                <p className="text-gray-300 mt-2">Please enter a search term.</p>
            )}
        </div>
    );
};

export default Search;
