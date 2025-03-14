import React, { useContext } from "react";
import { songsData } from "../song";
// import { BsHeartFill } from 'react-icons/bs'
import { CgPlayListAdd } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { userData } from "../context/UserContext";

const Card = ({ name, singer, image ,songsIndex }) => {
  const{playing,index,setIndex} = useContext(userData)
  return (
    <div className="hover:bg-gray-800 cursor-pointer bg-gray-500 w-[90%]   h-[100px] rounded-md ml-3 flex">
      <div className=" flex items-center justify-start h-[100%] w-[80%]  gap-5 md:p-3 p-2" onClick={()=>{
      setIndex(songsIndex),
        playing()}}>
        <div className="flex gap-4 items-center justify-start ">
          <img
            src={image}
            className="rounded-md w-[60px] max-h-[60px] md:w-[90px] md:max-h-[90px]"
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="text-white md:font-bold text-center text-[8px] md:text-[15px]">
              {singer}
            </h2>
            <h2 className="text-white  text-center text-[10px]">
              {name}
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[30%] h-[100%] flex items-center justify-center gap-8">
        <button>
          <CgPlayListAdd className="md:text-2xl text-white" />
        </button>
        <button>
          <GoHeart className="text-white md:text-2xl" />
        </button>
      </div>
      
    </div>
  );
};

export default Card;
