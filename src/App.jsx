import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import HomeScreen from './HomeScreen';
import Carousel from './Carousel';
import { MyProvider } from './context/MovieContext';
import Footer from './Footer';
import Account from './account/Account.jsx';
import Latest from './Latest';
import Movies from './Movies';
import Games from './Games';
import MyList from './MyList';
import Home from './Home';
import Shows from './Shows';
import BrowseByLanguage from './BrowseByLanguage';
import Membership from './account/Membership';
import Security from './account/Security';


function App() {

  return (
    <>

      <MyProvider>
        
        <Nav />
        <Routes>
          <Route path="/" element={

            <>
              <HomeScreen />
              <Carousel />
            </>

            } />
          <Route path="/account" element={<Account />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/games" element={<Games />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myList" element={<MyList />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/security" element={<Security />} />
          <Route path="/browseByLanguage" element={<BrowseByLanguage />} />
        </Routes>
        
        <Footer />
        
      </MyProvider>

    </>

  )
}

export default App