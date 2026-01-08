import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, DropdownItem } from "flowbite-react";
import { authContext } from '../context/AuthContext';


const Header = () => {

  const {removeToken}=useContext(authContext)

  const[isLoggedIn,setIsLoggedIn]=useState(false)
  const navigate=useNavigate()

useEffect(()=>{
  let token=localStorage.getItem('token')
  if(token){
      setIsLoggedIn(true)
  }
},[])


const onLoggedOut=()=>{
  // localStorage.clear()
  removeToken()
  navigate('/')
  
}

  return (
    <>
     <div className='flex justify-between items-center my-4'>
        <img className='w-[50px]' src=" https://static.vecteezy.com/system/resources/previews/002/219/582/original/illustration-of-book-icon-free-vector.jpg" alt="" />
        
        <h1 className='text-3xl font-bold'>Book mania</h1>

        <div className='flex items-center gap-3'>
            <span > {<FontAwesomeIcon icon={faInstagram} />}   </span>
            <span> {<FontAwesomeIcon icon={faTwitter} />}   </span>

            <span> {<FontAwesomeIcon icon={faFacebook} />}   </span>

            {
              
              isLoggedIn? <Dropdown className='text-black ' label={
                <div>
                  <img className='w-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s" alt="" />
                </div>
              } dismissOnClick={false}>
      <Link to={'/profile'} className='p-2'>profile</Link>
     
      <button onClick={onLoggedOut} className='p-2'>Log out</button>
    </Dropdown>
              :
                <Link to={'/login'}>
              
                  <button  className='border-0 rounded-3xl  p-2 hover:bg-emerald-400  hover:text-white'>Login</button>

</Link>
            }

      

        </div>
     </div>

     <div className="bg-blue-950 w-full h-[7vh]  text-white  ">
     <div className='flex  justify-center gap-10 '>

      <Link to={'/'}>  <h1 className='m-2' >Home</h1> </Link>
      <Link to={'/books'}><h1  className='m-2'>Book</h1> </Link>
     <Link to={'/career'}><h1  className='m-2'>Career</h1> </Link>
     <Link to={'/contact'}><h1  className='m-2'>Contact</h1> </Link>
     
     </div>
      
      
     

     </div>
    </>
  )
}

export default Header
