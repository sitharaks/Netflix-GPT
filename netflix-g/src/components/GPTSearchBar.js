import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
       
        <form className=' w-1/2 bg-black grid grid-cols-12 gap-4 mx-auto rounded-lg shadow-lg'>
            <input type='text' placeholder='Search for movies, actors, or genres...' className='p-4 m-4 col-span-9' />
            <button type='submit' className='px-4 py-2 col-span-3 m-4 bg-red-700 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar
