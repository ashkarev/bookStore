import React, { useContext, useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import AdminSideBar from './AdminSideBar'
import { Card } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBook } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { getAllApplication, getAllBooks, getAllJobs, getAllUsers } from '../../services/allApi';
import { authContext } from '../../context/AuthContext';

const AdminSettings = () => {

  useEffect(()=>{
allBook()
allUsers()
allJobs()
allApp()
  },[])

  const {token}=useContext(authContext)

  const[bookData,setBookData]=useState({})
  const[userData,setUserData]=useState({})
  const[totalOpenings,setTotalOpenings]=useState({})
  const[totalApplication,setTotalApplication]=useState({})

    const [searchKey, setsearchKey] = useState("");
  

  const allBook=async()=>{
    try {
      let header={
        Authorization:`Bearer ${token}`
      }
      let apires=await getAllBooks(header,searchKey)
      // console.log(apires)
      if(apires.status==200){
        setBookData(apires.data.BookData)
        // console.log(apires.data.BookData)
        
      }
     
      
    } catch (error) {
      console.log(error)
      toast.error('failed')
    }
  }

  const allUsers=async()=>{
    try {
      let header={
        Authorization:`Bearer ${token}`
      }

      let apires=await getAllUsers(header)
      // console.log(apires.data)
      if(apires.status==200){
        setUserData(apires.data.allUsers)
      }
      
    } catch (error) {
            console.log(error)
      toast.error('failed')
    }
  }


  const allJobs=async()=>{
    try {

      let apires=await getAllJobs()
      console.log(apires)
      setTotalOpenings(apires.data.allJobs)
      
      
    } catch (error) {
            console.log(error)
      toast.error('failed')
    }
  }


  const allApp=async()=>{
      try {
      let header={
        Authorization:`Bearer ${token}`
      }

      let apires=await getAllApplication(header)
      // console.log(apires.data)
      if(apires.status==200){
        console.log(apires.data)
        setTotalApplication(apires.data)
      }
      
    } catch (error) {
            console.log(error)
      toast.error('failed')
    }

  }
  
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
      <p className="font-normal text-white text-center ">
        
        {/* <FaBook className='text-2xl '/> */}

       
        
        <div className='text-5xl'>
          {
            bookData.length
          }
        </div>
      
      </p>
    </Card>
      </div>
      <div className=''>
         <Card href="#" className="max-w-sm bg-sky-50 rounded-2xl shadow-lg shadow-sky-500 hover:scale-105 duration-120">
      <h5  className="text-2xl font-bold text-blue-500 text-center">
      TOTAL USERS
      </h5>
      <p className="font-bold text-5xl text-center text-white">
        <div>
          {
            userData.length
          }
        </div>
      </p>
    </Card>
      </div>
      <div className=''>
         <Card href="#" className="max-w-sm bg-sky-50 rounded-2xl shadow-lg shadow-sky-500 hover:scale-105 duration-120">
      <h5 className="text-2xl font-bold text-blue-500 text-center">
       TOTAL OPENINGS
      </h5>
      <p className="font-bold text-5xl text-center text-white">
        {
          totalOpenings.length
      }
      </p>
    </Card>
      </div>
      <div className=''>
         <Card href="#" className="max-w-sm bg-sky-50 rounded-2xl shadow-lg shadow-sky-500 hover:scale-105 duration-120">
      <h5 className="text-2xl font-bold text-blue-500 text-center">
      TOTAL APPLICATION
      </h5>
      <p className="font-bold text-5xl text-center text-white">
{
totalApplication.length}
      </p>
    </Card>
      </div>
      


    
    </div>

    </div>
      </>
  )
}

export default AdminSettings
