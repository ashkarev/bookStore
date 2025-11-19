import React from 'react'
import loadImage from '../assets/load2.gif'

const Loader = () => {
  return (
    <div className='flex justify-center  '>
      <img className='rounded-xl  w-full h-[100vh] shadow-2xl shadow-gray-400'  src={loadImage} alt="" />
    </div>
  )
}

export default Loader
