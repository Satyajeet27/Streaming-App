import BackgroundImage from '@/components/bgImage/BackgroundImage'
import { SkeletonCarouselLoader } from '@/components/Loader/Skeleton'
import SimilarMovies from '@/components/streams/similar/SimilarMovies'
import { Separator } from '@/components/ui/separator'
import { useGetMovieByIdQuery, useGetMovieCreditsByIdQuery } from '@/redux/api/api'
import { Person } from '@/types/types'

import { useParams } from 'react-router-dom'

const MovieDetail = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetMovieByIdQuery(Number(id))
    const { data: movieCreditData, isLoading: movieCreditLoading } = useGetMovieCreditsByIdQuery(Number(id))

    const baseImgUrl = import.meta.env.VITE_TMDB_IMAGE_URL

    const bgImage = baseImgUrl + data?.backdrop_path

    const image = baseImgUrl + data?.poster_path;
    if (isLoading || !data || !movieCreditData || movieCreditLoading) {
        return <SkeletonCarouselLoader />
    }

    const date = new Date(data?.release_date).toLocaleDateString("en-us", { month: "short", day: "numeric", year: "numeric" })
    const director: Person = movieCreditData?.crew.find((i: Person) => i.department === "Directing") as Person
    const writer: Person = movieCreditData?.crew.find((i: Person) => i.department === "Writing") as Person
    const streamUrl = `https://vidsrc.me/embed/movie?tmdb=${id}/`
    return (
        <div className="">

            <div className=''>
                {/* <div className="">
                    <img className='-z-20 absolute w-full h-screen   object-cover md:object-fill' src={bgImage} alt="" />
                    <div className="-z-10 absolute h-screen w-full bg-gradient-to-t from-black to-transparent"></div>
                </div> */}

                <BackgroundImage image={bgImage} />
                <div className="container mx-auto py-4 md:p-10 text-slate-200">

                    <div className="flex flex-col md:flex-row items-center md:items-start mt-20 md:mt-40">
                        <div className="md:basis-1/4">
                            <img src={image} className='h-72 w-full border-2 border-white  shadow-white shadow-sm' alt="" />


                        </div>
                        <div className="md:basis-3/4 p-10 space-y-4 leading-tight text-slate-300">
                            <div className="">
                                <h2 className='text-3xl text-white font-medium'>{data?.title}</h2>
                                <p className='text-xs font-light'>{data?.tagline}</p>
                            </div>
                            <Separator className='h-[1px] bg-slate-500' />
                            <p className='text-xs flex gap-4'>
                                <span>Rating : {data?.vote_average.toFixed(1)}</span> |
                                <span>View: {data?.vote_count}</span> |
                                <span>Duration : {data?.runtime} min</span>
                            </p>
                            <Separator className='h-[1px] bg-slate-500' />
                            <div className="">
                                <h3 className='font-medium text-white'>Overview</h3>
                                <p className='text-xs  font-light'>{data?.overview}</p>
                            </div>
                            <Separator className='h-[1px] bg-slate-500' />
                            <div className="text-xs flex gap-4 ">
                                <span>Status: {data?.status}</span>|
                                <span>Release Date: {date}</span>|
                                <span>Revenue: {data?.revenue}</span>
                            </div>
                            <Separator className='h-[1px] bg-slate-500' />
                            <div className="text-xs">
                                <span>Director : {director.name}</span>

                            </div>
                            <Separator className='h-[1px] bg-slate-500' />
                            <div className="text-xs ">
                                <span>Writer : {writer.name}</span>
                            </div>
                            {/* <div className="text-sm">
                                <p>Cast:</p>
                                <div className="flex flex-wrap gap-4 md:gap-6 my-2">
                                    {
                                        movieCreditData.cast.map(cast => (
                                            <div key={cast.id} className="w-16 md:w-20 text-center place-items-center space-y-1">
                                                <Avatar className=' md:w-20 md:h-20'>
                                                    <AvatarImage src={baseImgUrl + cast.profile_path} />
                                                    <AvatarFallback className='bg-slate-700 '>Not Available</AvatarFallback>
                                                </Avatar>
                                                <p className='text-xs text-wrap'>{cast.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <iframe
                    className="w-full h-screen"
                    src={streamUrl}
                    referrerPolicy="origin"
                    allowFullScreen
                ></iframe>

            </div>
            <SimilarMovies />
        </div>
    )
}

export default MovieDetail