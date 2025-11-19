import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Auth = () => {
  return (
    <>
    <div className="auth">
       <h1 className='text-center text-4xl '>BOOK MANIA</h1>
    <div className='flex  justify-center my-20'>
    
      <div className='h-[500px] w-[450px] bg-blue-950 rounded-2xl   '>
        <h1 className='text-center p-2 text-white'>LOGIN</h1>
        <div className='text-center text-white text-4xl'>
           <FontAwesomeIcon icon={faUser} />
        </div>
       
        <div className='mx-15'>
           <input className='w-75 my-5 p-3 rounded-2xl  bg-gray-100 text-black' type="text" placeholder='Email id' />
        <input className='w-75 my-5 p-3 rounded-2xl bg-gray-100 text-black' type="text" placeholder='password' />
        </div>
       
        <div className='flex justify-evenly'>
           <p className='text-yellow-300 text-sm'>*Never share your password with orthers</p>
        <p className='text-white'>Forget Password</p>
        </div>
        <button className='border-0 bg-green-700 w-75 p-2 rounded-xl text-white mx-15 mt-10'>Login</button>
        <p className='text-white mx-15'>-----------------------------or--------------------------</p>
       <div>

        <h1 className='text-center text-white'>ARE YOU NEW USER ?</h1>
        <p  className='text-center text-white'>Register</p>
       </div>


      </div>
    </div>
    </div>
     
      
    </>
  )
}

export default Auth
