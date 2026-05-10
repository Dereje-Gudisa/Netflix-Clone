import React, {useContext} from 'react';
import { Button } from "@/components/ui/button"

import ScreenBackgroundImg from './assets/screen-background-img.png';
import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { IoReloadCircleOutline } from "react-icons/io5";
//import Carousel from './Carousel';
import { MovieContext, useMovies } from './context/MovieContext';

function HomeScreen() {

    const { movies, filteredMovies, searchQuery } = useMovies();

    const randomIndex = Math.floor(Math.random() * movies.length);
    /* console.log(randomIndex); */

    const firstMovie = movies.length > 0 ? movies[randomIndex] : null;
    const title = firstMovie ? firstMovie.title : 'Loading...';
    const overView = firstMovie ? firstMovie.overview : 'Loading...';
    /* console.log(movies); */

    const exploreSuggestions = movies.slice(0, 3);
  return (
    <>{/* 2. Ternary Operator: If searching, show Results, otherwise show Hero */}
        {searchQuery.length > 0 ? (
            <div className="pt-30 px-10 bg-black min-h-screen">
                {filteredMovies.length > 0 ? (
                    <>
                        <div className='flex items-center gap-4 mb-4'>
                            <h2 className="text-gray-400 text-sm">Explore titles related to:</h2>
                            <div className='flex gap-2'>
                                {exploreSuggestions.map((movie) => (
                                    <a 
                                        key={movie.id} 
                                        href="#" 
                                        className="text-white text-sm border-r border-gray-600 pr-3 hover:text-red-400 last:border-none"
                                    >
                                        {movie.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <h2 className="text-white text-2xl mb-4">Search Results for "{searchQuery}"</h2>

                        <div className="grid grid-cols-5 gap-4">
                            {filteredMovies.map(movie => (
                                <div key={movie.id} className="text-white">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-md" />
                                    <p className="mt-2 text-sm">{movie.title}</p>
                                </div>
                            ))}
                        </div>
                    </>
                    ) : (
                        
                /* Case 2: Nothing Found */
                <div className="flex flex-col items-center justify-center mt-20">
                    <p className="text-xl text-white ">Your search for "{searchQuery}" did not have any matches.</p>
                    <ul className="text-gray-500 text-sm mt-4 list-disc">
                        <p className="text-xl  text-white my-5 p-0 flex-start">Suggetions:</p>
                        <li className='mx-10'>Try different keywords</li>
                        <li className='mx-10'>Looking for a movie or TV show?</li>
                        <li className='mx-10'>Try using a movie, TV show title, an actor or director</li>
                        <li className='mx-10'>Try using a genre, like comedy, romance, sports, or drama</li>
                    </ul>
                </div>
                )}
            </div>
            
        ) : (

        <div className='bg-gray-900 text-white h-200 flex bg-cover bg-center' 
        style={{ 
            backgroundImage: firstMovie ? `url(https://image.tmdb.org/t/p/original${firstMovie.poster_path})` 
            :`url(${ScreenBackgroundImg})` }}>
            
            <div className='ml-10 pl-10 w-full'>

                <h1 className=' text-2xl h-1/2 mt-30 w-1/5 h-1/2 flex justify-start items-center '>{title}</h1><br />
                <p className='w-1/3   '>
                    {overView}
                </p><br />

                <div className='flex'>
                    <button className='text-black bg-white flex justify-center items-center m-2 p-2 w-30 rounded-sm hover:bg-[#fff]/80'><FaPlay className='mx-2'/>Play</button>

                    <button className='text-white bg-gray-700/50 flex justify-around items-center  m-2 p-2 w-30 rounded-sm hover:bg-gray-800/50 focus:outline-2 focus:outline-offset-2 focus:outline-white-500 active:bg-gray-700'><FiInfo />More Info</button>
                </div>

                <div className='flex items-center justify-end'>

                    <div className='text-3xl h-7 p-0 mx-3  flex justify-center items-center'><IoReloadCircleOutline />
                    </div>

                    <div className= 'w-25 border-l-3 border-white bg-[#000] opacity'>
                        <div className=''><p className='text-white'>13+</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        )}
    </>
  );
}

export default HomeScreen