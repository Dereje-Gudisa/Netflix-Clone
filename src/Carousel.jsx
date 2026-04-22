import React from 'react';
import movie1 from './assets/movie1.png';
import movie2 from './assets/movie2.png';
import movie3 from './assets/movie3.png';
import movie4 from './assets/movie4.png';
import movie5 from './assets/movie5.png';
import movie6 from './assets/movie6.png';
import movie7 from './assets/movie7.png';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


function Carousel() {

    return (
        <>  
            <div className='border-2 mt-5 w-full flex justify-end items-center pr-10 mb-2 '>
                <span className="w-4 h-0.5 bg-gray-500 border border-gray-500 ml-0.5" ></span>
                <span className="w-4 h-0.5 bg-gray-500 border border-gray-500 ml-0.5" ></span>
                <span className="w-4 h-0.5 bg-gray-500 border border-gray-500 ml-0.5" ></span>
                <span className="w-4 h-0.5 bg-gray-500 border border-gray-500 ml-0.5" ></span>
                <span className="w-4 h-0.5 bg-gray-500 border border-gray-500 ml-0.5" ></span>
                <span className="w-4 h-0.5 bg-gray-500 border border-gray-500 ml-0.5" ></span>
                <span className="w-4 h-0.5 bg-gray-500 border border-gray-500 ml-0.5" ></span> 
                <span className="w-4 h-0.5 bg-gray-500 border border-gray-500 ml-0.5" ></span>
                <span className="w-4 h-0.5 bg-gray-500 border border-gray-500 ml-0.5" ></span>
            </div>
            <div className='w-full bg-black/80 flex justify-center items-center'>
                <a className=' text-white p-2 ' href="#"><GrPrevious /></a> 
                <div className='flex justify-around items-center'>
                
                    <div className='border-2 border-black w-1/5 h-40 mx-auto flex justify-center items-center'>
                        <img className="w-full h-full object-cover" src={movie1} alt="Movie"/>
                    </div>
                    <div className='border-2 border-black w-1/5 h-40 mx-auto flex justify-center items-center'>
                        <img className="w-full h-full object-cover" src={movie2} alt="Movie"/>
                    </div>
                    <div className='border-2 border-black w-1/5 h-40 mx-auto flex justify-center items-center'>
                        <img className="w-full h-full object-cover" src={movie3} alt="Movie"/>
                    </div>
                    <div className='border-2 border-black w-1/5 h-40 mx-auto flex justify-center items-center'>
                        <img className="w-full h-full object-cover" src={movie4} alt="Movie"/>
                    </div>
                    <div className='border-2 border-black w-1/5 h-40 mx-auto flex justify-center items-center'>
                        <img className="w-full h-full object-cover" src={movie5} alt="Movie"/>
                    </div>
                    <div className='border-2 border-black w-1/5 h-40 mx-auto flex justify-center items-center'>
                        <img className="w-full h-full object-cover" src={movie6} alt="Movie"/>
                    </div>
                    <div className='border-2 border-black w-1/5 h-40 mx-auto flex justify-center items-center'>
                        <img className="w-full h-full object-cover" src={movie7} alt="Movie"/>
                    </div>
                </div>
                <a className='text-white p-2 ' href="#"><GrNext /></a>
            </div>
        </>
    )

};

export default Carousel
