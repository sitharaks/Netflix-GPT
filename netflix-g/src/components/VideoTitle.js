import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 absolute text-white bg-gradient-to-r from-black to-transparent'>
      <h1 className="text-2xl md:text-6xl px-12 font-bold mb-4">{title}</h1>
      <p className="hidden md:inline-block py-6 px-12 text-lg w-1/4 ">{overview}</p>
      <div className=" my-2 md:my-0 flex px-12">
        <button className='bg-gray-500 bg-white text-black py-2 md:py-4 px-3 flex justify-center items-center  text-lg w-1/4 md:w-1/6 hover:bg-opacity-80 rounded-lg'> ▶️Play</button>
        <button className='hidden md:inline-block bg-gray-500 mx-2 text-white py-4 px-20 text-lg flex justify-center items-center md:w-1/6 w-1/4 bg-opacity-50 rounded-lg'>Moreℹ️</button>
      </div>
    </div>
  )
}

export default VideoTitle
