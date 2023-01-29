import Image from "next/legacy/image"
import { Movie } from "../typings"

interface Props {
  movie: Movie
}

function Thumbnail({movie}: Props) {
  return (
    <div className="relative h-32 min-w-[220px] cursor-pointer 
    transition duration-200 ease-out md:h-36 md:min-w-[260px] 
    lg:h-44 lg:min-w-[300px] hover:scale-95">
      <Image 
        src={`https://image.tmdb.org/t/p/w500${
        movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail