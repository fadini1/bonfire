import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import { useRef, useState } from "react"
import { Movie } from "../typings"
import Thumbnail from "./Thumbnail"

interface Props {
    title: string
    movies: Movie[]
}

function Row({ title, movies }: Props) {

   const rowRef = useRef<HTMLDivElement>(null)
   const [isMoved, setIsMoved] = useState(false)

   const handleClick = (direction: string) => {
      setIsMoved(true)

      if(rowRef.current) {
         const { scrollLeft, clientWidth } = rowRef.current

         const scrollTo = 
            direction === "left"
               ? scrollLeft - clientWidth
               : scrollLeft + clientWidth
            
            rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth"})

      }

   }


   return (
      <div className="h-48 md:h-52 lg:h-60">
         <h1 className="w-56 mb-3 lg:my-3 cursor-pointer text-xl md:text-2xl
         lg:text-3xl text-[#d2d2d2] transition duration-500 hover:text-white"
            >{title}
         </h1>
         <div className="group relative">
            <ChevronLeftIcon 
               className= {`
               absolute top-11 md:top-14 bottom-0 left-2 z-40 h-12 w-12 md:h-14
               md:w-14 lg:h-20 lg:w-20 opacity-0 cursor-pointer transition 
               duration-300 hover:scale-125 group-hover:opacity-100 
               ${!isMoved && "hidden"}
               `}
               onClick={() => handleClick("left")}
            />

            <div ref={rowRef} className="flex overflow-x-scroll items-center 
            space-x-1 md:space-x-2 md:p-2 scrollbar-hide">
                {movies.map((movie) => (
                    <Thumbnail key={movie.id} movie={movie}/>
                ))}             
            </div>

            <ChevronRightIcon 
               className="absolute top-11 md:top-14 bottom-0 right-2 z-40 
               h-12 w-12 md:h-14 md:w-14 lg:h-20 lg:w-20 opacity-0 cursor-pointer transition 
               duration-300 hover:scale-125 group-hover:opacity-100"
               onClick={() => handleClick("right")}/>
         </div>
      </div>
   )
}

export default Row