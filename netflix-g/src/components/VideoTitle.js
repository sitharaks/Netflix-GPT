import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black to-transparent'>
      <h1 className="text-6xl px-12 font-bold mb-4">{title}</h1>
      <p className="py-6 px-12 text-lg w-1/4 ">{overview}</p>
      <div className=" flex px-12">
        <button className='bg-gray-500 bg-white text-black py-4 px-16 flex justify-center items-center  text-lg w-2 hover:bg-opacity-80 rounded-lg'> ▶️Play</button>
        <button className='bg-gray-500 mx-2 text-white py-4 px-20 text-lg flex justify-center items-center w-2 bg-opacity-50 rounded-lg'>Moreℹ️</button>
      </div>
    </div>
  )
}

export default VideoTitle
