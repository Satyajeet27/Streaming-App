
import { Link } from 'react-router-dom';
import { Card } from '../ui/card'
import { formatDate } from '@/lib/utils';
type Props = {
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    id: number;
    streamType: "Movies" | "Tv"

}
const MovieTvShowCard = ({ id, poster_path, release_date, title, vote_average, streamType }: Props) => {
    const baseImgUrl = import.meta.env.VITE_TMDB_IMAGE_URL
    const formattedDate = formatDate(release_date)
    return (
        <Card className=' border-black/80 w-44 h-60 relative group'>
            <Link to={streamType === "Movies" ? `/movie/${id}` : `/tv/${id}`}>
                <img className='rounded-md h-full w-full' src={baseImgUrl + poster_path} alt={title} />
                <div className='h-0 opacity-0 group-hover:h-full rounded-md  bg-black/80 group-hover:p-2  absolute group-hover:opacity-100 flex flex-col w-full bottom-0 text-white  font-light justify-between transition-all duration-300 ease-in-out'>
                    <div className=' leading-tight text-gray-300 flex-1 place-content-center text-center text-xl font-medium'>
                        <p>{title}</p>

                    </div>
                    <div className='flex justify-between w-full text-xs'>
                        <div>{formattedDate}</div> <div className="mx-1">|</div>
                        <span className=''>Rating {vote_average.toFixed(1)}</span>
                    </div>
                </div>
            </Link>
        </Card>
    )
}

export default MovieTvShowCard