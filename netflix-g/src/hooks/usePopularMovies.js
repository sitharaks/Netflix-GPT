import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, POPULAR_MOVIES_API } from '../utils/constant';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
      const response = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
     
      const json = await response.json();
      dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;