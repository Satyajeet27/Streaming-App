import { useGetMovieGenreListQuery, useGetTvShowGenreQuery } from '@/redux/api/api'
import { Genre } from '@/types/types'

type Props = {
    genre_ids: number[];
    textSize?: "sm" | "xs" | "lg" | "xl";
    position?: "center" | "start" | "end"
}

const GenreComponent = ({ genre_ids, textSize = "sm", position = "center" }: Props) => {
    const genres: Genre[] = []
    const { data: movie } = useGetMovieGenreListQuery("")
    const { data: tv } = useGetTvShowGenreQuery("")

    let genreList: Genre[] = []

    if (movie && tv) {
        genreList = [...movie.genres, ...tv.genres]
        genreList.forEach(genre => {
            if (genre_ids?.includes(genre.id)) {
                if (genres.every(genresA => genresA.id !== genre.id)) {

                    genres.push(genre)
                }

            }
        })
    }


    return (
        <div className={`flex space-x-1 justify-${position} items-center flex-wrap leading-tight font-extralight`}>
            {
                genres.map((genre, index) => (
                    <div key={index}>
                        <span className={`text-${textSize}`} key={genre.id}>{genre.name}</span>
                        {
                            genres.length - 1 > index && <span className='text-xs' >|</span>
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default GenreComponent