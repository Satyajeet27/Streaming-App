import BackgroundImage from '@/components/bgImage/BackgroundImage'
import { SkeletonCarouselLoader } from '@/components/Loader/Skeleton'
import TvShows from '@/components/streams/similar/SimilarTvShows'

import { Separator } from '@/components/ui/separator'
import { useGetTvSeriesByIdQuery } from '@/redux/api/api'


import { useParams } from 'react-router-dom'

const TvSeriesDetail = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetTvSeriesByIdQuery(Number(id))

    const baseImgUrl = import.meta.env.VITE_TMDB_IMAGE_URL

    const bgImage = baseImgUrl + data?.backdrop_path

    const image = baseImgUrl + data?.poster_path;
    if (isLoading || !data) {
        return <SkeletonCarouselLoader />
    }

    // const date = new Date(data?.release_date).toLocaleDateString("en-us", { month: "short", day: "numeric", year: "numeric" })

    return (
        <div className="">
            <div className=''>
                <BackgroundImage image={bgImage} />
                <div className="container mx-auto p-10 text-slate-200">
                    <div className="flex flex-col md:flex-row items-center md:items-start mt-20 md:mt-40">
                        <div className="md:basis-1/4  ">
                            <img src={image} className='h-72 border-2 border-white w-fit shadow-white shadow-sm' alt="" />
                        </div>
                        <div className="md:basis-3/4 p-10 space-y-4 leading-tight text-slate-300">
                            <div className="">
                                <h2 className='text-3xl text-white font-medium'>{data.name}</h2>
                                <p className='text-xs font-light'><span>Rating : {data?.vote_average.toFixed(1)}</span></p>
                            </div>
                            <Separator className='h-[1px] bg-slate-500' />
                            <p className='text-xs sm:text-sm flex gap-4'>
                                <span>{new Date(data.first_air_date).getFullYear()}</span>|
                                <span>{data.number_of_seasons} {data.number_of_seasons > 1 ? "Seasons" : "Season"}</span>|<span>{data.languages.length} {data.languages.length > 1 ? "Languages" : "Language"}  </span>


                            </p>
                            <Separator className='h-[1px] bg-slate-500' />
                            <div className="">
                                <h3 className='font-medium text-white'>Overview</h3>
                                <p className='text-xs  font-light'>{data?.overview}</p>
                            </div>
                            <Separator className='h-[1px] bg-slate-500' />
                            <div className="text-xs flex gap-4 ">
                                <span className='flex gap-4'>{
                                    data.genres.map((genre, index) => <>
                                        <span key={index}>{genre.name}</span>
                                        {data.genres.length - 1 > index && <span>|</span>}
                                    </>)
                                }
                                </span>
                            </div>
                            <Separator className='h-[1px] bg-slate-500' />
                            <div className="text-xs flex gap-2 text-nowrap">
                                <span>Created By : </span>
                                <span className='flex gap-4 '>{
                                    data.created_by.map((createdBy, index) =>
                                        <>
                                            <span key={createdBy.id}>{createdBy.name}</span>
                                            {data.created_by.length - 1 > index && <span>|</span>}
                                        </>
                                    )
                                }</span>

                            </div>
                            <Separator className='h-[1px] bg-slate-500' />
                            {/* <div>
                                {
                                    data.seasons.map((season, index) => (
                                        <div key={index}>
                                            <div className="">{season.name}</div>

                                        </ div>
                                    ))
                                }
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
            <TvShows />
        </div>
    )
}

export default TvSeriesDetail