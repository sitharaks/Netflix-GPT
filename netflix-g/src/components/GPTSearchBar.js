import React, { useRef } from 'react'
import openAI from '../utils/openAI';

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const handleGPTSearchClick = async () => {
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + "Only give me names of 5 movies, comma separated like the example movies given ahead. Example movies: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
    const response = await openAI.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: gptQuery,
        },
      ],
    });
    console.log(response.choices);
  }
  return (
    <div className='md:pt-[10%] pt-[35%] flex justify-center'>
       
        <form className=' w-full md:w-1/2 bg-black grid grid-cols-12 gap-4 mx-auto rounded-lg shadow-lg'
            onSubmit={(e) => {
                e.preventDefault();
            }}>
            <input ref={searchText} type='text' placeholder='Search for movies, actors, or genres...' className='p-4 m-4 col-span-9' />
            <button type='submit' className='px-2 md:px-4 py-2 col-span-3 m-4 bg-red-700 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            onClick={handleGPTSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar
