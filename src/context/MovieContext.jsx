import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MyProvider = ({ children }) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
  
      const moviesData = async () => {
          const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=778c5f609503599d053813c80e5596f3&language=en-US&page=1');
  
          const fetchedData = await response.json();
          //console.log(fetchedData);
          
          setMovies(fetchedData.results);
          //movies.push(...fetchedData.results);
  
          //console.log(movies);
          console.log(movies.length);
          console.log(fetchedData.results[0].title);
  
      };
    moviesData();
  }, []);

  //console.log(movies);
  
  return (
    <MovieContext.Provider value={{
        movies
    }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);