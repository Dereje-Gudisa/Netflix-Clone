import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import HomeScreen from './HomeScreen';
import Carousel from './Carousel';
import { MyProvider } from './context/MovieContext';
import Footer from './Footer';
import Account from './Account';
import Latest from './Latest';
import Movies from './Movies';
import Games from './Games';
import MyList from './MyList';
import Home from './Home';
import Shows from './Shows';
import BrowseByLanguage from './BrowseByLanguage';




function App() {

  return (
    <>
      <MyProvider>
        
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <HomeScreen />
              <Carousel/>
            </>
            } />
          <Route path="/account" element={<Account />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/games" element={<Games />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myList" element={<MyList />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/browseByLanguage" element={<BrowseByLanguage />} />
        </Routes>
        
        <Footer />
        
      </MyProvider>
    </>
  )
}

export default App