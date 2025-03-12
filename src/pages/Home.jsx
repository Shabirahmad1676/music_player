import React, { useContext, useState } from "react";
import { songsData } from "../song";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { IoPlay } from "react-icons/io5";
import { userData } from "../context/UserContext";
import { CiPause1 } from "react-icons/ci";

const Home = () => {
  const { audioRef, playing, pause, play, setPlay } = useContext(userData);
  console.log(audioRef);

  return (
    <div className="bg-black h-screen w-full flex">
      <div className="w-full gap-20 md:gap-4 md:w-[50%] h-full flex items-center justify-center md:justify-start  flex-col pt-6 md:pt-[120px]">
        <h2 className="text-white  font-semibold">Now Playing</h2>
        <div className="relative h-[200px] w-[200px] rounded-md object-cover overflow-hidden">
          <img src={songsData[5].image} alt="" />
          <div className="flex items-center justify-center absolute w-full h-full bg-black opacity-[0.4] top-0">
            <img className="h-20 w-20" src="/public/musicanim.webp" alt="" />
          </div>
        </div>
        <div>
          <div className="text-white font-bold text-center text-[30px]">
            {songsData[5].singer}
          </div>
          <div className="text-gray-400  text-center text-[18px]">
            {songsData[5].name}
          </div>
        </div>
        <div className="w-full  flex items-center justify-center">
          <input
            id="range"
            type="range"
            className="appearance-none w-[40%] h-[7px] bg-gray-400 rounded-md"
          />
        </div>
        <div className="text-white flex items-center gap-4 justify-center">
          <CgPlayTrackPrev className="text-3xl" />
          {!play ? (
            <button onClick={() => playing()}>
              <IoPlay className="text-5xl" />
            </button>
          ) : (
            <button onClick={() => pause()}>
              <CiPause1 className="text-5xl" />
            </button>
          )}
          <CgPlayTrackNext className="text-3xl" />
        </div>
      </div>

      <div className="w-[50%] h-full bg-gray-500 hidden md:flex">
        <h2 className="text-white">Now Playing</h2>
      </div>
    </div>
  );
};

export default Home;
