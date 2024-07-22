import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Home } from './components/Home'
import { Library } from './components/Library'
import { Header } from './components/Header'
import { About } from './components/About'
import { GetGnar } from './components/GetGnar'
import { SongDisplay } from './components/SongDisplay'
import { GetGnarUpdate } from './components/GetGnarUpdate'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route index path='/login' element={<Login />} />
        <Route path='/' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/request' element={<GetGnar />} />
        <Route path='/about' element={<About />} />
        <Route path='/library' element={<Library />} />
        <Route path='/library/:id' element={<SongDisplay />} />
        <Route path='/request/:id' element={<GetGnarUpdate />} />
      </Routes>
    </>
  )
}

export default App
