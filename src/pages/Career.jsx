import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getAllJobs } from '../services/allApi'
import Header from '../components/Header'
import { Card } from 'flowbite-react'


const Career = () => {

    const [alljobData,setAllJobData]=useState([])

    useEffect(()=>{
allJob()
    },[])

    const allJob=async()=>{
        try {

            let apires=await getAllJobs()
            console.log(apires)
            if(apires.status==200){
                setAllJobData(apires.data.allJobs)
            }
            
        } catch (error) {
           console.log(error)
           toast.error('something went wrong') 
        }
    }
  return (
    <>
    <Header />

    <h1 className='text-center text-5xl text-blue-500 font-bold'>Career Page</h1>
<div className="grid grid-cols-2 gap-6 mx-10 my-10 ">
      {alljobData?.length > 0 ? (
                     alljobData.map((eachjob, index) => (
                       
                         <Card href="#" className="bg-sky-700 text-white rounded-2xl">
                         <h5 className="   ">
                         Job Id:  {eachjob._id}  |
                         job Role : {eachjob.jobRole}  |
                         Salary :{eachjob.salary} |
                         experience:{eachjob.experience} |
                         </h5>
                         <p className="font-normal text-gray-700 dark:text-gray-400">
                         {eachjob.jobDesc}

                         <br />
                        date:   {eachjob.jobDate} //
                 last date:     {eachjob.lastDate}
                         </p>
   
                       </Card>
                       
                     ))
                   ) : (
                     <h1>no jobs added</h1>
                   )}
                   </div>
   

        
      
    </>
  )
}

export default Career
