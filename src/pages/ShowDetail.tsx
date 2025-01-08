import SimilarMovies from '@/components/similar/SimilarMovies'
import { Separator } from '@/components/ui/separator'
import { useGetMoviesByIdQuery } from '@/redux/api/api'
import { Loader } from 'lucide-react'
import { useParams } from 'react-router-dom'

const ShowDetail = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetMoviesByIdQuery(id as string)

    const baseImgUrl = import.meta.env.VITE_TMDB_IMAGE_URL
    console.log(data)
    const bgImage = baseImgUrl + data?.backdrop_path
        ;
    const image = baseImgUrl + data?.poster_path;
    if (isLoading || !data) {
        return <Loader />
    }

    const date = new Date(data?.release_date).toLocaleDateString("en-us", { month: "short", day: "numeric", year: "numeric" })


    return (
        <div className="">
            <div className='relative'>
                <div className="">
                    <img className='-z-20 bg-black/20 absolute w-full h-screen   object-cover md:object-fill' src={bgImage} alt="" />
                    <div className="-z-10 absolute h-screen  w-full bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="container mx-auto md:p-10 text-slate-200  flex flex-col md:flex-row  justify-end items-center md:justify-between  md:items-end  h-screen">
                    <div className="md:basis-1/4 ">
                        <img src={image} className='h-72 border-4 border-white w-fit  shadow-lg' alt="" />
                    </div>
                    <div className="md:basis-3/4 p-10 space-y-1">
                        <div className="">
                            <h2 className='text-3xl font-medium'>{data?.title}</h2>
                            <p className='text-xs font-light'>{data?.tagline}</p>
                        </div>
                        <Separator />
                        <p className='text-sm flex gap-4'>
                            <span>Rating : {data?.vote_average.toFixed(1)}</span> |
                            <span>View: {data?.vote_count}</span> |
                            <span>Duration : {data?.runtime}</span>
                        </p>
                        <Separator />
                        <div className="">
                            <h3 className='text-xl'>Overview</h3>
                            <p className='text-sm font-light leading-tight'>{data?.overview}</p>
                        </div>
                        <Separator />
                        <div className="text-sm flex gap-4">
                            <span>Status: {data?.status}</span>|
                            <span>Release Date: {date}</span>|
                            <span>Revenue: {data?.revenue}</span>
                        </div>

                    </div>
                </div>
            </div>
            <SimilarMovies />
        </div>
    )
}

export default ShowDetail