import { faHome } from '@fortawesome/free-regular-svg-icons'
import { faBook, faBriefcase, faDashboard, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <>
    <div style={{minHeight:'98vh'}} className='bg-sky-300'>
        <h1 className='mt-10 text-3xl font-bold text-white text-center'>Admin Dashboard <FontAwesomeIcon icon={faDashboard} /> </h1>
<div className='border rounded-2xl shadow-2xs border-gray-100 mt-10 text-center p-10'>
     <div>
           <Link to={'/admin'} className='text-white text-2xl font-bold' >
        Admin Home page  <FontAwesomeIcon icon={faHome} />
        </Link>
     </div>
      <div className='mt-10'>
           <Link to={'/admin-books'} className='text-white text-2xl font-bold' >
        Admin Book/User  <FontAwesomeIcon icon={faBook} />
        </Link>
     </div>
      <div className='mt-10'>
           <Link to={'/admin-careers'} className='text-white text-2xl font-bold' >
        Admin careers  <FontAwesomeIcon icon={faBriefcase} />
        </Link>
     </div>
      <div className='mt-10'>
           <Link to={'/admin-settings'} className='text-white text-2xl font-bold' >
        Admin Settings  <FontAwesomeIcon icon={faGear} />
        </Link>
     </div>
        
    </div>
    

    </div>



      
    </>
  )
}

export default AdminSideBar
