import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { API_OPTIONS, POPULAR_MOVIES_API } from '../utils/constant';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movie?.popularMovies);
  const getPopularMovies = async () => {
      const response = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
     
      const json = await response.json();
      dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;