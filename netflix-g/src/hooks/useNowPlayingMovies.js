import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie?.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
      const response = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
     
      const json = await response.json();
      dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
   !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;