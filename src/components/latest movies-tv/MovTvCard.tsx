
import { Link } from 'react-router-dom';
import { Card } from '../ui/card'
type Props = {
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    id: number;
    latestTagName: string

}
const MovTvCard = ({ id, poster_path, release_date, title, vote_average, latestTagName }: Props) => {
    const baseImgUrl = import.meta.env.VITE_TMDB_IMAGE_URL
    return (
        <Card className='w-48 h-72 relative group'>
            <Link to={latestTagName === "Movies" ? `/movie/${id}` : "/"}>
                <img className='rounded-lg h-full w-full' src={baseImgUrl + poster_path} alt={title} />
                <div className='h-0 group-hover:h-full rounded-lg  bg-black/80 group-hover:p-4 rounded-b-lg absolute flex flex-col w-full bottom-0 text-white  font-light justify-between transition-all duration-300 ease-in-out'>
                    <div className=' leading-tight text-gray-300 flex-1 place-content-center text-center text-xl font-medium'>{title}</div>
                    <div className='flex justify-between w-full text-xs'>
                        <div>{new Date(release_date).toLocaleDateString('en-US', { month: 'short', day: "numeric", year: 'numeric' })}</div>
                        <span className='bg-red-500 px-2 rounded-lg'>Rating {vote_average.toFixed(1)}</span>
                    </div>
                </div>
            </Link>
        </Card>
    )
}

export default MovTvCard