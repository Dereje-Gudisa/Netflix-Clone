import React from 'react';
import ScreenBackgroundImg from './assets/screen-background-img.png';
import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

function HomeScreen() {

  return (
    <>
        <div className='bg-gray-900 text-white h-200 flex bg-cover bg-center' 
        style={{ backgroundImage: `url(${ScreenBackgroundImg})` }}>
            <div className='border-2 border-white m-10 p-10 w-1/2'>

                <h1 className='h-1/2 mt-10'>Title of The Movie</h1><br />

                <p>descriptions of the movie Lorem ipsum dolor 
                    sit s in ipsam error modi hic alias.
                    Distinctio nemo, ssitatibus mollitia commodi saepe provident at eveniet omnis quos ab sed laborum. Vitae, soluta.
                </p><br />

                <div className='flex'>
                    <button className='text-black bg-white flex justify-center items-center border-2 border-white m-2 p-2 w-30 rounded-sm'><FaPlay className='mx-2'/>Play</button>
                    <button className='text-white bg-gray-950 flex justify-around items-center border-2 border-white m-2 p-2 w-30 rounded-sm'><FiInfo />More Info</button>
                </div>
            </div>
        </div>
    </> 
  )
}

export default HomeScreen