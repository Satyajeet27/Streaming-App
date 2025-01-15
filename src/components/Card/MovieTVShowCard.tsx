
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/card'
import { formatDate } from '@/lib/utils';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

import GenreComponent from '../genre/GenreComponent';


type Props = {
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    id: number;
    genre_ids: number[]
    streamType: "movie" | "tv"

}
const MovieTvShowCard = ({ id, poster_path, release_date, title, vote_average, streamType, genre_ids }: Props) => {
    const baseImgUrl = import.meta.env.VITE_TMDB_IMAGE_URL
    const formattedDate = formatDate(release_date)
    const { setInputText } = useContext(SearchContext)

    const navigate = useNavigate()
    const handleNavigate = () => {
        setInputText("")

        navigate(streamType === "tv" ? `/tv/${id}` : `/movie/${id}`)
    }


    return (
        <Card className=' border-black/80 w-44 h-60  relative group'>
            <div className='hover:cursor-pointer ' onClick={handleNavigate} >
                <img className='rounded-md h-60 w-full' src={baseImgUrl + poster_path} alt={title} />
                <div className='h-0 opacity-0 group-hover:h-full rounded-md  bg-black/80 group-hover:p-2  absolute group-hover:opacity-100 flex flex-col w-full bottom-0 text-white  font-light justify-between transition-all duration-300 ease-in-out'>
                    <div className=' leading-tight text-gray-300 flex-1 place-content-center text-center text-xl font-medium'>
                        <p>{title}</p>
                        <GenreComponent genre_ids={genre_ids} />
                    </div>
                    <div className='flex justify-between w-full text-xs'>
                        <div>{formattedDate}</div> <div className="mx-1">|</div>
                        <span className=''>Rating {vote_average.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default MovieTvShowCard