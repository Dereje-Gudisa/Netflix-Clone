import React, { useState } from 'react';
import movie1 from './assets/movie1.png';
import movie2 from './assets/movie2.png';
import movie3 from './assets/movie3.png';
import movie4 from './assets/movie4.png';
import movie5 from './assets/movie5.png';
import movie6 from './assets/movie6.png';
import movie7 from './assets/movie7.png';
import movie8 from './assets/movie8.png';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


const Carousel = () => {
    const allMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8];
    const groupSize = 4; // Number of movies to display at a time

    const [currentIndex, setCurrentIndex] = useState(0);
    const [movies, setMovies] = useState(allMovies.slice(0, groupSize));

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? Math.floor(allMovies.length / groupSize) - 1 : prevIndex - 1;

            setMovies(allMovies.slice(newIndex * groupSize, newIndex * groupSize + groupSize));

            console.log(newIndex);
            return newIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % Math.ceil(allMovies.length / groupSize);
            setMovies(allMovies.slice(newIndex * groupSize, newIndex * groupSize + groupSize));
            console.log(newIndex);
            return newIndex;
        });
    };

    return (
        <>
            <div className='border-2 mt-5 w-full flex justify-end items-center pr-10 mb-2 '>
                {Array.from({ length: Math.ceil(allMovies.length / groupSize) }).map((_, index) => (
                    <span 
                        key={index}
                        className={`w-4 h-0.5 bg-gray-500 border-white ml-0.5 ${currentIndex === index ? 'bg-white' : 'bg-gray-500 border-gray-500'}`}
                        id={index + 1}
                    ></span>
                ))} 
            </div>

            <div className='w-full bg-black/80 flex justify-center items-center'>
                <button className=' text-white p-2 ' onClick={handlePrevious}><GrPrevious /></button> 

                <div className='flex justify-around items-center'>
                    {movies.map((movie, index) => (
                        <div 
                            key={index}
                            className={'border-2 border-black w-1/5 h-40 mx-auto flex justify-center items-center'}
                            id={index + 1}>
                            <img className="w-full h-full object-cover" src={movie} alt="Movie"/>
                        </div>
                    ))}
                </div>

                <button className='text-white p-2 ' onClick={handleNext}><GrNext /></button>
            </div>
        </>
    );
};

export default Carousel;
