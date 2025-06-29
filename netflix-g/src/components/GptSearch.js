import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
       <div className='absolute -z-10' >
             <img src={BACKGROUND_IMAGE} alt="Netflix Logo"  />
        </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GptSearch
