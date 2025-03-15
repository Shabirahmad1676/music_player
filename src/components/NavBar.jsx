import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'
import { RiPlayListLine } from 'react-icons/ri'
import { TiHome } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-full h-[100px] fixed md:top-0 z-30 bottom-0 flex items-center justify-around md:justify-center p-12 gap-15 bg-black text-white rounded-t-[20px]'>
      <Link to="/"><TiHome className='h-[25px] w-[25px]'/></Link>
      <Link to="/search"><IoSearch className='h-[25px] w-[25px]'/></Link>
      <Link to="/playlist"><RiPlayListLine className='h-[25px] w-[25px]'/></Link>
      <Link to="/liked"><BsHeartFill className='h-[25px] w-[25px]'/></Link>
    </div>
  )
}

export default NavBar