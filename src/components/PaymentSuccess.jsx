import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from './Header'

const PaymentSuccess = () => {
  useEffect(()=>{
showSuccess
  },[])

  const showSuccess=()=>{
    toast.success('successfully Paid')
  }
  return (
    <>
    <Header />
   <h1 className='text-center text-5xl text-green-500 font-bold'> you are succesfully Paid</h1>
  <div className=' '>
    <div className='flex justify-center'>
      <img src="https://i.pinimg.com/originals/ba/6c/41/ba6c414b0405b83c4784a05ec261b0e3.gif" alt="" />
    </div>
      

    {/* <Link className='text-blue-400 mx-30 border p-3 shadow-2xl rounded-2xl' to={'/'}>return to home</Link> */}
  </div>
 
      
    </>
  )
}

export default PaymentSuccess
