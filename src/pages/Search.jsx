import React, { useContext, useEffect, useState } from 'react'
import Player from '../components/Player'
import { BiMusic, BiSearch } from 'react-icons/bi'
import { songsData } from "../song";
import Card from '../components/Card';

const Search = () => {
  const [inputValue, setInputValue] = useState("")
  const [newList, setNewlist] = useState([])

  useEffect(() => {
    let searched = songsData.filter((song) =>
      song.name.toLowerCase().includes(inputValue) || song.singer.toLowerCase().includes(inputValue) ||   song.name.includes(inputValue) || song.singer.includes(inputValue) ||     song.name.toUpperCase().includes(inputValue) || song.singer.toUpperCase().includes(inputValue)
    )
    setNewlist(searched)
  }, [inputValue])

  const handleForm = (e) => {
    e.preventDefault()
    setInputValue("")
  }

  return (
    <div className='relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center gap-6 pt-20'>
      <Player />
      {/* Search Bar */}
      <form onSubmit={handleForm} className='absolute top-[100px] w-[80%] md:w-[50%] flex items-center bg-gray-900 backdrop-blur-3xl rounded-full px-4 py-2 shadow-md'>
        <input
          type="text"
          placeholder='Search for a song...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='w-full bg-transparent text-white placeholder-gray-400 p-2 outline-none'
        />
        <button type='submit' className='text-white hover:text-gray-300 text-xl transition-all'>
          <BiSearch />
        </button>
      </form>

      {/* Search Results */}
      {inputValue ? (
        <div className='w-full md:w-[80%] flex flex-col items-center gap-3 lg:mt-18 mt-22 max-h-[70vh] overflow-auto p-2'>
          {newList.length > 0 ? (
            newList.map((songs, index) => (
              <Card
                key={index}
                name={songs.name}
                singer={songs.singer}
                image={songs.image}
                songsIndex={songs.id - 1}
              />
            ))
          ) : (
            <div className='text-gray-400 text-lg mt-5'>No results found</div>
          )}
        </div>
      ) : (
        <div className='flex items-center gap-3 text-3xl text-gray-400 mt-40'>
          <BiMusic />
          <p>Search for a song</p>
        </div>
      )}

    </div>
  )
}

export default Search
