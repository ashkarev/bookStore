import React from 'react'
import AdminNav from './AdminNav'
import AdminSideBar from './AdminSideBar'
import { Card } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBook } from 'react-icons/fa';

const AdminSettings = () => {
  
  return (
    <>

    <AdminNav />
    <div className='grid grid-cols-[3fr_9fr]'>
    <AdminSideBar />
    <div className='grid grid-cols-3 gap-5 m-20'>
      <div className=''>
         <Card href="#" className="max-w-sm bg-sky-50 rounded-2xl shadow-lg shadow-sky-500 hover:scale-105 duration-120">
      <h5 className="text-2xl font-bold text-blue-500 text-center">
      TOTAL BOOKS
      </h5>
      <p className="font-normal text-white text-center">
        <div className='flex justify-center text-white'>
        <FaBook className='text-2xl '/>

        </div>
        
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
      </div>
      <div className=''>
         <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
      </div>
      <div className=''>
         <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
      </div>
      <div className=''>
         <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
      </div>
      


    
    </div>

    </div>
      </>
  )
}

export default AdminSettings
