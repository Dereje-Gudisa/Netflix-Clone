import React, { useState, useEffect } from 'react';
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

    const groupSize = 6; // Number of movies to display at a time
    const [currentIndex, setCurrentIndex] = useState(0);
    const [movies, setMovies] = useState([]);

    const moviePerPage = Math.ceil(movies.length / groupSize);
    console.log(moviePerPage);



    const visibleMovies = movies.slice(
        currentIndex * groupSize,
        currentIndex * groupSize + groupSize
    );

    async function moviesData(){
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=778c5f609503599d053813c80e5596f3&language=en-US&page=1');

        const data = await response.json();
        //console.log(data);
        
        setMovies(data.results);
        //movies.push(...data.results);

        //console.log(movies);
        console.log(movies.length);

    }
        //call the function here when the component mounts
    
    useEffect(() => {
        moviesData();
    }, []);

    const handlePrevious = () => {
        moviesData();
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? Math.floor(movies.length / groupSize) - 1 : prevIndex - 1;
            
            setMovies(movies.slice(newIndex * groupSize, newIndex * groupSize + groupSize));
            return newIndex;
        });


    };

    const handleNext = () => {
        moviesData();
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % Math.ceil(movies.length / groupSize);
            setMovies(movies.slice(newIndex * groupSize, newIndex * groupSize + groupSize));
            return newIndex;
        });
    };
    
    

    return (
        <>  
            <div className='border-2 mt-45 w-full flex justify-end items-center pr-10 mb-2 '>
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
                            <div className='text-white'>{movie.title}</div>
                        </div>
                    ))}

                    {/* movies.map((movie, index) => (
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
