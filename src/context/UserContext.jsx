import React, { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../song';
export const userData = createContext();


const UserContext = ({children}) => {
  const audioRef = useRef(new Audio())
  const [index, setIndex] = useState(0)
  const [play, setPlay] = useState(false)

  function playing(){
    setPlay(true)
    audioRef.current.play()
  }

  function pause(){
    setPlay(false)
    audioRef.current.pause()
  }


  useEffect(()=>{
  audioRef.current.src = songsData[index].song
  audioRef.current.load()
  },[index])


  const data = {
    audioRef,playing,pause,play,setPlay
  }

  return (
    <div>
      <userData.Provider value={data}>
      {children}
      </userData.Provider>
    </div>
  )
}

export default UserContext