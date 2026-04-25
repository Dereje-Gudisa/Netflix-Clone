import React from 'react';
import Nav from './Nav';
import HomeScreen from './HomeScreen';
import Carousel from './Carousel';
import { MyProvider } from './context/MovieContext';
import Footer from './Footer';

function App() {

  return (
    <>
      <MyProvider>
        
          <Nav />
          <HomeScreen />
          <Carousel />
          <Footer />
        
      </MyProvider>
    </>
  )
}

export default App