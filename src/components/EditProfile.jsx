import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { FaEdit } from "react-icons/fa";

const EditProfile = () => {
const [openModal, setOpenModal] = useState(false);

const [preview,setPreview]=useState("https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80")

const onImageChange=(e)=>{
console.log(e.target.files[0])  //image stord in here

//img uploading


let url= URL.createObjectURL(e.target.files[0])
console.log(url)
setPreview(url)
}

  return (
    <>

     <button onClick={() => setOpenModal(true)} className="text-blue-500 border rounded-xl border-blue-500 p-3 flex text-lg">
              {" "}
              <FaEdit className="m-1" /> Edit
            </button>

       <Modal className="mx-60 " show={openModal} onClose={() => setOpenModal(false)}>
             <ModalHeader className="bg-gray-500 text-3xl text-white p-2 ">Uploaded Images</ModalHeader>
             <ModalBody className="bg-gray-600">
               <div className="space-y-6 flex flex-col items-center  ">

                <label htmlFor="imp">
                    <input onChange={(e)=>onImageChange(e)} type="file" name='' id='imp' />
                    <img className='w-50' src={preview} alt="" />
                </label>
               
                <input className="border p-2 bg-white w-100 " type="text" placeholder="enter name " />
                <input  className="border p-2 bg-white w-100 " type="text" placeholder="enter passwrod" />
                <input className="border p-2 bg-white w-100  " type="text" placeholder="confirm password" />
                <textarea className="border p-2 bg-white w-100 " name="" id="one" placeholder="bio"> </textarea>
               </div>
             </ModalBody>
             <ModalFooter className="bg-gray-400">
               
               <Button className="mx-3 p-2 rounded-2xl bg-red-600 text-white text-2xl"  onClick={() => setOpenModal(false)}>
               Close
               </Button>
             </ModalFooter>
           </Modal>
      
    </>
  )
}

export default EditProfile
