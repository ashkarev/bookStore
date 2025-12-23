import React from 'react'

const AdminNav = () => {
  return (
    <>
    <div className='flex justify-between h-[60px] bg-blue-800 '>
 <div>
    <img className='w-[50px] rounded-3xl' src="https://media.istockphoto.com/id/1034157536/vector/vector-design-element-for-book-store.jpg?s=612x612&w=0&k=20&c=NEoyiXWj5JqcgLB2B_A08dJyw5RpsNnmi8sIVlCiqZE=" alt=""  />
   
   
   
 </div>
 <h1 className='text-3xl my-4 text-blue-300 hover:text-red-400'>Welcome Admin</h1>
    <button className='border p-2 h-10 mx-10 bg-blue-400 my-2 text-white rounded-md hover:bg-red-600'>LogOut</button>


    </div>
      
    </>
  )
}

export default AdminNav
