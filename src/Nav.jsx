import React from 'react';
import logo from './assets/netflix-logo.png';
import profile from './assets/profile.png';
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import './Nav.css'

function Nav() {

  return (
    <>
        <nav className='bg-black/70 px-10 flex justify-between fixed top-0 left-0 w-full'>
            <img className='w-30 h-auto' src={logo}alt="Netflix" />
            <div className='text-white w-full flex justify-between'>
                <ul className='flex justify-around items-center w-140'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shows</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Latest</a></li>
                    <li><a href="#">My List</a></li>
                    <li><a href="#">Browse by Language</a></li>
                </ul>
                <ul className='text-white flex justify-around items-center w-80'>
                    <button><IoSearch /></button>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#"><IoMdNotificationsOutline /></a></li>
                    <li><img className='w-8 h-auto' src={profile} alt="profile" /></li>
                </ul>
            </div>
      </nav>

    </>
  )
}

export default Nav