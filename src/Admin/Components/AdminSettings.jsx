import React from 'react'
import AdminNav from './AdminNav'
import AdminSideBar from './AdminSideBar'

const AdminSettings = () => {
  
  return (
    <>

    <AdminNav />
    <div className='grid grid-cols-[3fr_9fr]'>
    <AdminSideBar />
    <div>
      Setting 
    </div>

    </div>
      </>
  )
}

export default AdminSettings
