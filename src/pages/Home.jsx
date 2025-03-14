import React, { useContext, useEffect, useState } from "react";
import { songsData } from "../song";
import {
  CgPlayListAdd,
  CgPlayTrackNext,
  CgPlayTrackPrev,
} from "react-icons/cg";
import { IoPlay } from "react-icons/io5";
import { userData } from "../context/UserContext";
import { CiPause1 } from "react-icons/ci";
import { BiShuffle } from "react-icons/bi";
import Card from "../components/Card";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Player from "../components/Player";

const Home = () => {
  const {
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
  } = useContext(userData);
  // console.log(audioRef);

  const [progress, setProgress] = useState(0);
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    let updateprogress = () => {
      let duration = audioRef.current.duration || 0;
      let currentTime = audioRef.current.currentTime || 0;
      let percentage = (currentTime / duration) * 100 || 0;
      setProgress(percentage);
    };
    audioRef.current.addEventListener("timeupdate", updateprogress);
  });

  const handleRange = (e) => {
    const newRange = e.target.value;
    // console.log("new range", newRange);
    setProgress(newRange);
    let duration = audioRef.current.duration || 0;
    audioRef.current.currentTime = (duration * newRange) / 100;
    // console.log(audioRef.current.currentTime);
    // console.log("duration", duration);    
  };
  return (
    <div className="bg-black h-screen w-full flex relative overflow-hidden">
      {!arrow ? (
        <MdKeyboardArrowDown
          onClick={() => setArrow((prev) => !prev)}
          className="absolute  text-white text-4xl top-[80px] left-[6%] md:hidden lg:hidden"
        />
      ) : (
        <MdKeyboardArrowUp
          onClick={() => setArrow((prev) => !prev)}
          className="absolute  text-white text-4xl top-[80px] left-[6%] md:hidden lg:hidden"
        />
      )}

      {!arrow ? (
        <>
          {" "}
          <div className=" w-full gap-20 md:gap-4 md:w-[50%] h-full flex items-center justify-center md:justify-start  flex-col pt-6 md:pt-[120px]">
            <h2 className="text-white  font-semibold">Now Playing</h2>
            <div className="relative max-w-[250px] h-[200px] w-[200px] rounded-md object-cover overflow-hidden ring-gray-800 inset-2">
              <img
                src={songsData[index].image}
                alt=""
                className="w-[100%] h-[100%]"
              />
              {play ? (
                <div className="flex items-center justify-center absolute w-full h-full bg-black opacity-[0.4] top-0">
                  <img
                    className="h-20 w-20"
                    src="/public/musicanim.webp"
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="text-white font-bold text-center text-[30px]">
                {songsData[index].singer}
              </div>
              <div className="text-gray-400  text-center text-[18px]">
                {songsData[index].name}
              </div>
            </div>
            <div className="w-full  flex items-center justify-center">
              <input
                onChange={handleRange}
                value={progress}
                id="range"
                type="range"
                className="appearance-none w-[40%] h-[7px] bg-gray-400 rounded-md"
              />
            </div>
            <div className="text-white flex items-center gap-4 justify-center">
              <button>
                {" "}
                <CgPlayListAdd className="text-xl cursor-pointer" />
              </button>
              <button onClick={() => prevPlay()}>
                <CgPlayTrackPrev className="text-3xl cursor-pointer" />
              </button>
              {!play ? (
                <button onClick={() => playing()}>
                  <IoPlay className="text-5xl cursor-pointer" />
                </button>
              ) : (
                <button onClick={() => pause()}>
                  <CiPause1 className="text-5xl cursor-pointer" />
                </button>
              )}
              <button onClick={() => nextPlay()}>
                {" "}
                <CgPlayTrackNext className="text-3xl cursor-pointer" />
              </button>
              <button onClick={() => Shuffle()}>
                {" "}
                <BiShuffle className="text-xl cursor-pointer" />
              </button>
            </div>
          </div>
          <div className="w-[100%] md:w-[50%] h-full hidden md:flex flex-col gap-3 overflow-auto pt-[120px] pb-4">
            {songsData.map((songs,index) => (
              <Card 
              key={index}
                name={songs.name}
                singer={songs.singer}
                image={songs.image}
                songsIndex={songs.id - 1}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="w-[100%] md:w-[50%] h-full  flex items-center flex-col  gap-3  overflow-auto mt-[120px] pb-[120px]">
          <Player/>
          {songsData.map((songs,index) => (
            <Card key={index}
              name={songs.name}
              singer={songs.singer}
              image={songs.image}
              songsIndex={songs.id - 1}
            />
          ))}
        </div> 
      )}
    </div>
  );
};

export default Home;
