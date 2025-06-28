import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideo } from '../utils/movieSlice';


const useMovieTrailer = (movieId) => {
        const dispatch = useDispatch();

     const getMovieVideo = async (movieId) => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const data = await response.json();
            const filterData = data.results.filter(video => video.type === 'Trailer' );
            const trailer = filterData.length ? filterData[0]: data.results[0];
            dispatch(addTrailerVideo(trailer));
        }
        useEffect(() => {
           getMovieVideo(movieId)
        }, [ ]);
  return (
    <div>
      
    </div>
  )
}

export default useMovieTrailer
