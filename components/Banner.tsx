import { EyeIcon, HeartIcon, MenuIcon, StarIcon } from "@heroicons/react/solid"
import Image from "next/legacy/image"
import { useState, useEffect } from 'react'
import { baseUrl } from "../constants/movie"
import { Movie } from "../typings"

interface Props {
  netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {

  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [])

  return (
    <div className="flex flex-col space-y-2 pb-5 pt-[7rem] lg:pb-0 md:space-y-4">
        <div className="absolute top-0 left-0 -z-10 h-[65vh] md:h-[85vh] lg:h-[120vh] w-screen">
            <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            layout="fill"
            objectFit="cover"
            /> 
        </div>

        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-base md:max-w-xl md:text-lg 
        lg:max-w-2xl lg:text-xl">{movie?.overview}
        </p>

        <div className="flex space-x-3">
          <button className="banner_button"><EyeIcon className="
          h-10 w-10 md:h-12 md:w-12"/>Watched</button>
          <button className="banner_button"><MenuIcon className="
          h-10 w-10 md:h-12 md:w-12"/>Review</button>
          <button className="banner_button"><StarIcon className="
          h-10 w-10 md:h-12 md:w-12"/>Rate</button>
        </div>
    </div>
  )
}

export default Banner