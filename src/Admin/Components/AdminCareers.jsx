import React from 'react'
import AdminNav from './AdminNav'
import AdminSideBar from './AdminSideBar'
const AdminCareers = () => {
  return (
   <>

    <AdminNav />
    <div className='grid grid-cols-[3fr_9fr]'>
    <AdminSideBar />
    <div>
     careers
    </div>

    </div>
      </>
  )
}

export default AdminCareers
