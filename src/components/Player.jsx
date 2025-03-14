import React, { useContext } from "react";
import { songsData } from "../song";
import { IoPlay } from "react-icons/io5";
import { userData } from "../context/UserContext";
import { CiPause1 } from "react-icons/ci";

const Player = () => {
  const{playing, pause, play, index, setindex} = useContext(userData)
  return (
    <div className="w-full bg-white p-2 h-[100px] md:hidden  fixed bottom-[80px] md:bottom-0 rounded-t-[20px] ">
      <div className=" flex items-center justify-between h-[100%] w-[100%]  gap-5 md:p-3 p-4">
        <div className="flex gap-4 items-center justify-start rounded-md mb-4">
          <img
            src={songsData[index].image}
            className="rounded-md w-[80px] max-h-[80px] md:w-[90px] md:max-h-[90px]"
            alt=""
          />
          <div className="flex flex-col ">
            <h2 className="font-bold text-center text-[19px] md:text-[15px]">
              {songsData[index].singer}
            </h2>
            <h2 className="font-bold text-center text-[15px] md:text-[15px]">
              {songsData[index].name}
            </h2>
          </div>
        </div>
        <div className="mb-4">
        {!play ? (
                    <button className="bg-gray-500 rounded-xl p-1" onClick={() => playing()}>
                      <IoPlay className="text-4xl" />
                    </button>
                  ) : (
                    <button className="bg-gray-500 rounded-xl p-1" onClick={() => pause()}>
                      <CiPause1 className="text-4xl" />
                    </button>
                  )}
        </div>
      </div>
    </div>
  );
};

export default Player;
