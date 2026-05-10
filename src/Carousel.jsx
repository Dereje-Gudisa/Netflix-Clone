import React, { useState, useEffect, useContext, useMemo } from 'react';

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useMovies } from './context/MovieContext';
import { FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";

const Carousel = () => {
    const { movies, handleMyList, myList } = useMovies();
    const groupSize = 6; // Number of movies to display at a time
    const [currentIndex, setCurrentIndex] = useState(0);
    //const [movies, setMovies] = useState([]);


    const moviePerPage = Math.ceil(movies.length / groupSize);
    /* console.log(moviePerPage); */


// update the visible movies whenever the movies or currentIndex changes

    const visibleMovies = useMemo(() => {    
        return movies.slice(
        currentIndex * groupSize,
        currentIndex * groupSize + groupSize
    );
    }, [movies, currentIndex], groupSize);


    const handlePrevious = () => {
        //moviesData();
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? moviePerPage -1 : prevIndex - 1);
    };

    const handleNext = () => {
        //moviesData();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % moviePerPage);
    };

    
    // Show loading state if movies are not available

    if (!movies || movies.length === 0) {
    return <div className='text-white'>Loading...</div>; 
  }

    return (
        <>  
            <div className='mt-5 w-full flex justify-end items-center pr-10 mb-2 '>
                {Array.from({ length: moviePerPage }, (_, index) => (
                    <span 
                        key={index}
                        className = {`w-4 h-0.5 bg-gray-500 border-white ml-0.5 ${currentIndex === index ? 'bg-white' : 'bg-gray-500 border-gray-500'}`}
                        id={index + 1}
                    ></span>
                ))  
                }

            </div>

            <div className='w-full bg-black/80 flex justify-center items-center'>
            
                <button className=' text-white p-2 ' onClick={() => handlePrevious(currentIndex)} ><GrPrevious /></button> 

                <div className='flex justify-around items-center'>
                    {visibleMovies.map((movie) => {
                        const isAdded = myList.some(item => item.id === movie.id);

                        return (
                        
                        <div 
                            key={movie.id} 
                            className='relative w-[16%] h-[15%] transition-all duration-300 ease-in-out hover:scale-125 hover:z-50 group cursor-pointer' >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title} className="rounded-sm shadow-md group-hover:opacity-0 object-fit"/>
                                
                        {/* 2. The Expanded Info Card (Visible only on hover) */}
                            <div className='absolute top-0 left-0 w-full bg-[#181818] rounded-md shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto'>
                                
                                {/* Mini Backdrop for the hover card */}
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path} || movie.poster_path}`}
                                    alt={movie.title}
                                    className='w-full h-full object-cover rounded-t-md'
                                />

                                <div className='p-3 flex flex-col gap-2'>
                                    {/* Action Row */}
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-white text-black rounded-full p-2 flex items-center justify-center hover:bg-gray-200'>
                                            <FaPlay size={10} />
                                        </div>
                                        <div onClick={() => handleMyList(movie)} className={`border-2 rounded-full p-1.5 flex items-center justify-center cursor-pointer transition-colors
                                        ${isAdded ? 'border-green-500 text-green-500' : 'border-gray-500 text-white hover:border-white'}`}>

                                            {isAdded ? <FiCheck size={14} /> : <FiPlus size={14} />}

                                        </div>
                                    </div>

                                    {/* Metadata Tags */}
                                    <div className='flex items-center gap-2'>
                                        <span className='text-green-400 font-bold text-[10px]'>97% Match</span>
                                        <span className='text-white border border-gray-600 px-1 text-[8px]'>13+</span>
                                        <span className='text-white text-[10px]'>1h 45m</span>
                                        <span className='text-white border border-gray-600 px-0.5 rounded-sm text-[8px]'>HD</span>
                                    </div>

                                    {/* Genre List */}
                                    <div className='flex flex-wrap gap-1'>
                                        <span className='text-white text-[9px]'>Gritty</span>
                                        <span className='text-gray-500 text-[9px]'>•</span>
                                        <span className='text-white text-[9px]'>Thriller</span>
                                        <span className='text-gray-500 text-[9px]'>•</span>
                                        <span className='text-white text-[9px]'>Action</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        );
                        })}
                </div>  

                <button className='text-white p-2 ' onClick={() => handleNext(currentIndex)}><GrNext /></button>
            </div>
        </>
    )

};

export default Carousel
