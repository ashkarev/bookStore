import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import Pnf from './pages/Pnf'
import { useState } from 'react'
import Loader from './components/Loader'

function App() {

  const [showLoad,setShowLoad]=useState(false)

  setTimeout(()=>{
    setShowLoad(true)
  },3000)

  return (
    <>
    
    <Routes>
      <Route path='/' element={showLoad? <Home /> : <Loader />} />
      <Route path='/books' element={<Books />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth  insideRegister={true} />} />
      <Route path='/*' element={<Pnf />} />
    </Routes>


      
    </>
  )
}

export default App
