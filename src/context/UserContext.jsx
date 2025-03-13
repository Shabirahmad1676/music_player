import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../song";
export const userData = createContext();

const UserContext = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    audioRef.current.src = songsData[index].song;
    audioRef.current.load();
    if (play) {
      playing();
    }
  }, [index]);

  function playing() {
    setPlay(true);
    audioRef.current.play();
  }

  function pause() {
    setPlay(false);
    audioRef.current.pause();
  }

  function nextPlay() {
    setIndex((prev) => (prev + 1) % songsData.length);
    setTimeout(() => {
      playing(); // Play the updated song
    }, 100);
  }

  function prevPlay() {
    setIndex((prev) => {
      const newIndex = prev === 0 ? songsData.length - 1 : prev - 1;
      return newIndex;
    });
    setTimeout(() => {
      playing(); // Play the updated song
    }, 100);
  }

  const Shuffle = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songsData.length);
    } while (randomIndex === index); // Ensure a different song plays
    console.log(randomIndex);
    setIndex(randomIndex);
    playing();
  };

  const data = {
    audioRef,
    playing,
    pause,
    play,
    setPlay,
    nextPlay,
    prevPlay,
    index,
    setIndex,
    Shuffle,
  };

  return (
    <div>
      <userData.Provider value={data}>{children}</userData.Provider>
    </div>
  );
};

export default UserContext;
