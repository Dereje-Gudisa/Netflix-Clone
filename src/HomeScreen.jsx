import React, {useContext} from 'react';
import { Button } from "@/components/ui/button"

import ScreenBackgroundImg from './assets/screen-background-img.png';
import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { IoReloadCircleOutline } from "react-icons/io5";
//import Carousel from './Carousel';
import { MovieContext, useMovies } from './context/MovieContext';

function HomeScreen() {

    const { movies } = useMovies();

    const randomIndex = Math.floor(Math.random() * movies.length);
    console.log(randomIndex);

    const firstMovie = movies.length > 0 ? movies[randomIndex] : null;
    const title = firstMovie ? firstMovie.title : 'Loading...';
    const overView = firstMovie ? firstMovie.overview : 'Loading...';
    console.log(movies);
  return (
    <>
        <div className='bg-gray-900 text-white h-200 flex bg-cover bg-center' 
        style={{ 
            backgroundImage: firstMovie ? `url(https://image.tmdb.org/t/p/original${firstMovie.poster_path})` 
            :`url(${ScreenBackgroundImg})` }}>

            
            <div className='ml-10 pl-10 w-full'>

                <h1 className='h-1/2 mt-30 border-2 w-1/5 h-1/2 flex justify-start items-center'>{title}</h1><br />

                <p className='w-1/3'>
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
    </>
  )
}

export default HomeScreen