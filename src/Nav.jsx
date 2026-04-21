import React from 'react'
import logo from './assets/netflix-logo.png'
import './Nav.css'

function Nav() {

  return (
    <>
        <nav className='nav'>
            <img className='netflix-home-logo' src={logo} alt="Netflix" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shows</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Latest</a></li>
                <li><a href="#">My List</a></li>
                <li><a href="#">Browse by Language</a></li>
            </ul>
            <ul>
                <li><a href="#">Kids</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
            
      </nav>

    </>
  )
}

export default Nav