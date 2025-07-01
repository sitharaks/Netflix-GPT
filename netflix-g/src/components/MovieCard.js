import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-36 pr-4 h-80 m-2 p-2'>
      <img alt = "Movie Card"src ={IMG_CDN_URL + poster_path} />
    </div>
  )
}

export default MovieCard
