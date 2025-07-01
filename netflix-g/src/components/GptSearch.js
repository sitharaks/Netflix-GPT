import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10' >
             <img className="object-cover md:h-auto h-screen"src={BACKGROUND_IMAGE} alt="Netflix Logo"  />
        </div>
      <div className=''>
       
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
    </>
  )
}

export default GptSearch
