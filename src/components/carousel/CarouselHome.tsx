import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { SkeletonCarouselLoader } from '../Loader/Skeleton'
import BackgroundImage from '../bgImage/BackgroundImage'
import { StreamResults } from '@/types/types'
import GenreComponent from '../genre/GenreComponent'
import { Button } from '../ui/button'
import { Info } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const baseUrl = import.meta.env.VITE_TMDB_IMAGE_URL

const CarouselHome = ({ data, isLoading }: { isLoading: boolean; data: StreamResults }) => {
  const navigate = useNavigate()
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true }))
  const handleNavigate = (id: number, media_type: "movie" | "tv") => {
    navigate(media_type === "movie" ? `/movie/${id}` : `/tv/${id}`)
  }
  return (
    <>
      {
        isLoading ?
          <SkeletonCarouselLoader /> :
          <Carousel className='relative' plugins={[]} onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}>
            <CarouselContent className='flex gap-0'>
              {
                data?.results && data.results.map(result => {
                  const image = baseUrl + result.backdrop_path
                  return (
                    <CarouselItem key={result.id} className=' '>

                      <div className={`relative flex justify-center items-center h-screen`}>
                        {/* <div> */}
                        {/* <img
                            className="z-10 w-full h-full rounded-none object-cover md:object-fill shadow-2xl"
                            src={image}
                            alt="Displayed Image"
                          />
                          <div
                            className="absolute inset-0 bottom-0 bg-gradient-to-t from-black to-transparent"
                            style={{ zIndex: 20 }}
                          ></div> */}

                        {/* </div> */}
                        <BackgroundImage image={image} />

                        <div className="absolute z-20 md:left-20  space-y-2  text-white  top-2/3 md:top-1/2 w-[90%] md:w-1/3 "

                        >
                          <p className='text-3xl font-semibold md:text-4xl line-clamp-2'>{result.name || result.title}</p>

                          <p className='text-sm font-extralight line-clamp-4'>{result.overview}</p>
                          <GenreComponent position='start' genre_ids={result.genre_ids} />
                          <p className='flex h-4 gap-2 font-extralight text-sm'>
                            <span>Rating: {result.vote_average?.toFixed(1)}</span>

                            {/* <span>View: {result.vote_count}</span> */}
                          </p>
                          <Button size={"sm"} onClick={() => handleNavigate(result.id, result.media_type,)} variant={'secondary'}>More Info...<Info /></Button>
                        </div>
                      </div>

                    </CarouselItem>
                  )
                })
              }
            </CarouselContent>
            <CarouselPrevious
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all"
            />


            <CarouselNext
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all"
            />
          </Carousel>
      }
    </>

  )
}

export default CarouselHome