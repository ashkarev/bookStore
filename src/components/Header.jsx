import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
     <div className='flex justify-between items-center my-4'>
        <img className='w-[50px]' src=" https://static.vecteezy.com/system/resources/previews/002/219/582/original/illustration-of-book-icon-free-vector.jpg" alt="" />
        
        <h1 className='text-3xl font-bold'>Book mania</h1>

        <div className=''>
            <span> {<FontAwesomeIcon icon={faInstagram} />}   </span>
            <span> {<FontAwesomeIcon icon={faTwitter} />}   </span>

            <span> {<FontAwesomeIcon icon={faFacebook} />}   </span>
<Link to={'/login'}>
            <button className='border-0 rounded-3xl  p-2 hover:bg-emerald-400  hover:text-white'>Login</button>

</Link>

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
