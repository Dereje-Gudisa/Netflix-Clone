import React, { useState, useEffect, useContext, useMemo } from 'react';

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useMovies } from './context/MovieContext';

const Carousel = () => {

    const groupSize = 6; // Number of movies to display at a time
    const [currentIndex, setCurrentIndex] = useState(0);
    //const [movies, setMovies] = useState([]);

    const { movies } = useMovies();

    const moviePerPage = Math.ceil(movies.length / groupSize);
    console.log(moviePerPage);


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
            <div className='border-2 mt-5 w-full flex justify-end items-center pr-10 mb-2 '>
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
                    {visibleMovies.map((movie) => (
                        <div key={movie.id} className='w-1/5'>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}/>
                            {/* <div className='text-white'>{movie.title}</div> */}
                        </div>
                    ))}

                    {/* movies.map((movie   , index) => (
                        <div 
                            key={index}
                            className={'border-2 border-black w-1/5 h-40 mx-auto flex justify-center items-center'}
                            id={index + 1}>

                                {movies.map(movie => (
                                    <div key={movie.id}>
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                    </div>
                                ))}
                                
                        </div>
                    )) */}
                </div>

                <button className='text-white p-2 ' onClick={() => handleNext(currentIndex)}><GrNext /></button>
            </div>
        </>
    )

};

export default Carousel
