import React from 'react';
import { useMovies } from './context/MovieContext';

const MyList = () => {
  const { myList } = useMovies();

  return (
    <>
      <div className="pt-32 px-10 bg-black min-h-screen text-white">
            <h1 className="text-2xl mb-8">My List</h1>
            {myList.length > 0 ? (
                <div className="grid grid-cols-5 gap-4">
                    {myList.map(movie => (
                        <div key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="rounded-md" />
                            <p className="mt-2 text-sm">{movie.title}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">You haven't added any titles to your list yet.</p>
            )}
        </div>
    </>
  )
}

export default MyList