import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
      const response = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
     
      const json = await response.json();
      dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;