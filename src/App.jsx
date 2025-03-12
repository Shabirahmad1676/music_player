import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Liked from './pages/Liked'
import Playlist from './pages/Playlist'
import Search from './pages/Search'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/liked' element={<Liked/>} />
        <Route path='/playlist' element={<Playlist/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App