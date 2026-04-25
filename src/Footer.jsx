import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";



const Footer = () => {

  return (
    <>
        <div className='bg-[#141414] text-gray-400 h-20 flex text-center justify-center items-center flex-col pt-30'>

            <div className='text-2xl text-white flex my-3 mx-auto justify-start items-center w-1/2 gap-5'>
                <FaFacebookF />
                <IoLogoInstagram />
                <FiYoutube />                
            </div>

            <div className='mt-2 mb-2 grid grid-cols-4 gap-4 place-items-start w-1/2 mx-auto'>
                <div className='text-sm'>Audio description</div>
                <div className='text-sm '>Audio description</div>
                <div className='text-sm'>Audio description</div>

                <div className='text-sm'>Social media</div>
                <div className='text-sm'>Social media</div>
                <div className='text-sm'>Social media</div>

                <div className='text-sm'>Social media</div>
                <div className='text-sm'>Social media</div>
                <div className='text-sm'>Social media</div>

                <div className='text-sm'>Social media</div>
                <div className='text-sm'>Social media</div>
                <div className='text-sm'>Social media</div>
                <p className='text-xs w-full grid col-span-3 place-items-start my-3'>&copy; 2024 Netflix Clone. All rights reserved.</p>
            </div>
        </div><br />
        {/* <p className='text-white text-center p-5    '>&copy; 2024 Netflix Clone. All rights reserved.</p> */}
    </>
  );
};

export default Footer;
