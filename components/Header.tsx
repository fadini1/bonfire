import {BellIcon, SearchIcon, UserIcon} from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect, useState } from "react"

function Header() {

   const [isScrolled, setIsScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setIsScrolled(true)
         } else {
            setIsScrolled(false)
         }
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
         window.removeEventListener("scroll", handleScroll)
      }

   },[])

   
   return (
      <header className={`transition ease-in duration-500 
      ${isScrolled && "bg-[#0f0f0f]"}`}>
         <div className="flex items-center space-x-4 md:space-x-10">

            <div className="text-[2.2rem] tracking-[.8rem] text-[#6c9ff0]">
               BONFIRE
            </div>
            <ul className="hidden space-x-4 md:flex">
               <li className="header_section">Home</li>
               <li className="header_section">Films</li>
               <li className="header_section">Games</li>
               <li className="header_section">TV Series</li>
               <li className="header_section">Anime</li>
               <li className="header_section">My Watchlist</li>
            </ul>
         </div>
         
         <div className="flex items-center space-x-3 tracking-wide">
            <SearchIcon className="hidden h-8 w-8 sm:inline"/>
            <p className="hidden lg:inline"></p>
            <BellIcon className="h-8 w-8"/>
            <Link href="/account">
               <UserIcon className="h-8 w-8 cursor-pointer"/>
            </Link>

         </div>
      </header>
   )
}

export default Header