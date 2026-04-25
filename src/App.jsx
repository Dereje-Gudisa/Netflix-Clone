import React from 'react';
import Nav from './Nav';
import HomeScreen from './HomeScreen';
import Carousel from './Carousel';
import { MyProvider } from './context/MovieContext';

function App() {

  return (
    <>
      <MyProvider>
        
          <Nav />
          <HomeScreen />
          <Carousel />
        
      </MyProvider>
    </>
  )
}

export default App