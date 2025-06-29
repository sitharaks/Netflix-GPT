import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGPTSearchView = useSelector((state) => state.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGPTSearchView ? <GptSearch /> : 
      <>
      <MainContainer />
      <SecondaryContainer />
      </>}
     
    </div>
  )
}

export default Browse
