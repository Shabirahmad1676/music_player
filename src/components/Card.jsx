import React, { useContext } from "react";
import { songsData } from "../song";
// import { BsHeartFill } from 'react-icons/bs'
import { CgPlayListAdd } from "react-icons/cg";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { userData } from "../context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addSong, RemoveSong } from "../redux/PlaylistSlice";
import { MdPlaylistRemove } from 'react-icons/md'
import { likedSong, unlikeSong } from "../redux/LikedSlice";
import { LiaKeySolid } from "react-icons/lia";


const Card = ({ name, singer, image ,songsIndex }) => {
  const{playing,index,setIndex} = useContext(userData)
  const dispatch = useDispatch()
  let ganna = useSelector(state=>state.playlist)
  const ganaExist = ganna.some((song)=>song.songsIndex==songsIndex)

  let liked = useSelector(state=>state.liked)
  const likedorNot = liked.some((song)=>song.songsIndex==songsIndex)


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
        {!ganaExist && (
          <button onClick={()=>dispatch(addSong({name:name,songsIndex:songsIndex,singer:singer,image:image}))}>
          <CgPlayListAdd className="md:text-2xl text-white" />
        </button>
        )}

        {ganaExist && (
          <button onClick={()=>dispatch(RemoveSong(songsIndex))}>
          <MdPlaylistRemove className="md:text-2xl text-white" />
        </button>
        )}

{!likedorNot && (
          <button onClick={()=>dispatch(likedSong({name:name,songsIndex:songsIndex,singer:singer,image:image}))}>
          <GoHeart className="md:text-2xl text-white" />
        </button>
        )}

        {likedorNot && (
          <button onClick={()=>dispatch(unlikeSong(songsIndex))}>
          < GoHeartFill className="md:text-2xl text-white" />
        </button>
        )}
        
        
      </div>
      
    </div>
  );
};

export default Card;
