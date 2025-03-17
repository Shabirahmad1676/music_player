import React from 'react'
import Player from '../components/Player'
import { BsMusicNoteList } from 'react-icons/bs'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

const Liked = () => {
  let songs = useSelector(state=>state.liked)

  return (
    <div  className='relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center gap-6 pt-20'>
      <Player/>
      {!songs.length<1 ? <>  <div className='mt-12 w-full flex flex-col gap-4 items-center h-full overflow-auto'>
        {songs.map((song,index)=>(
          <Card key={index}  name={song.name} singer={song.singer} image={song.image} songsIndex={song.songsIndex} />
        ))}
      </div></>:
      <>
      <div className='flex items-center gap-3 text-3xl text-gray-400 mt-40'>
                <BsMusicNoteList/>
                <p>No Song Added</p>
              </div>
      </>
      }
    
    </div>
  )
}

export default Liked