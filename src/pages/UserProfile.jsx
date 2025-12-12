import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { addBook } from "../services/allApi";

const UserProfile = () => {

  const[sellBookFlag,setSellBookFlag]=useState(true)
  const[bookStatusFlag,setBookStatusFlag]=useState(false)
  const [purchaseFlag,setPurchaseFlag]=useState(false)


  const[preview,setPreview]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_ri9E8XxXRafeIMA4QGosabTMk_wP7pTDQ&s')


  const[previwImages,setPreviewImages]=useState([])

  const onImageClick=(e)=>{
    console.log(e.target.files[0])


    setBookData({...bookData,uploadedImages:[...bookData.uploadedImages,e.target.files[0]]})

    let imgUrl=URL.createObjectURL(e.target.files[0])
    console.log(imgUrl)

    setPreview(imgUrl)
    setPreviewImages([...previwImages,imgUrl])
  }


  const [bookData,setBookData]=useState({
    title:'',
     author:"",
      noOfPage:0,
      imgUrl:'',
      price:0,
      discountPrice:0,
      abstract:'',
      publisher:'',
      language:'',
      ISBN:'',
      category:'',
      uploadedImages:[],
      
  })

  const onAddClick= async()=>{
    try {
      let token=localStorage.getItem('token')

      let headers={

        //multipart formdata used for file
        'Content-Type':'multipart/form-data',
        Authorization:`Bearer ${token}`
      }

      //form data is used to encode the file Uploading if the req files uploading we must  pass the req body as Form Data

      let reqBody=new FormData()

      for (const key in bookData) {
        
        if(key!='uploadedImages'){
          reqBody.append(key,bookData[key])
        }else{
          bookData.uploadedImages.forEach((eachFile)=>{
            reqBody.append('uploadedImages',eachFile)
          })
        }
        
      }
      let apires=await addBook(reqBody,headers)
      console.log(apires)
      
    } catch (error) {
      console.log(error)
      toast.error('something hapeened')
    }
  }



  return (
    <div>
      <Header />
      <div className="relative ">
        <div className="h-40 bg-indigo-950"></div>
        <div className="absolute left-20 top-15 border-white border-15 rounded-full w-50 h-50">
          <img
            className="rounded-full"
            src="https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-default-avatar-profile-icon-gray-placeholder-vector-png-image_16213764.png"
            alt=""
          />
        </div>
        <div className="p-20">
          <div className="pt-20 pb-10 flex justify-between">
            <h1 className="text-3xl flex">
              Jam <FaCheckCircle className="m-1 text-xl my-3 text-blue-500" />
            </h1>
            <button className="text-blue-500 border rounded-xl border-blue-500 p-3 flex text-lg">
              {" "}
              <FaEdit className="m-1" /> Edit
            </button>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis nesciunt nostrum temporibus vero ex repudiandae officiis
            inventore a. Itaque expedita placeat delectus esse quisquam
            repellendus ut et illo nisi consequuntur?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Odit sapiente repellat sunt odio
            accusamus maiores veniam necessitatibus, eaque tenetur omnis. Cum,
            praesentium recusandae? Officiis odit, laboriosam eligendi placeat
            ad enim.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button onClick={()=>{
          setSellBookFlag(true)
          setBookStatusFlag(false)
          setPurchaseFlag(false)
        }} className="border p-2 m-1 rounded-2xl cursor-pointer">
          {" "}
          Sell book
        </button>
        <button onClick={()=>{
          setSellBookFlag(false)
          setBookStatusFlag(true)
          setPurchaseFlag(false)
        }} className="border p-2 m-1 rounded-2xl cursor-pointer">
          Book Status
        </button>
        <button onClick={()=>{
          setSellBookFlag(false)
          setBookStatusFlag(false)
          setPurchaseFlag(true)
        }} className="border p-2 m-1 rounded-2xl cursor-pointer">
          Purchase History
        </button>
      </div>

      {
        sellBookFlag &&
        <div className="mx-45 bg-gray-400 p-1">
 <h1 className="text-2xl text-center">Book Details</h1>
 <div className="flex gap-30 px-30 mt-10"> 
  <div className="flex flex-col gap-4">
    <input onChange={(e)=>setBookData({...bookData,title:e.target.value})} type="text" placeholder="title" className="w-100 text-black bg-white rounded-2xl p-1" />
    <input onChange={(e)=>setBookData({...bookData,author:e.target.value})} type="text" placeholder="author" className="w-100 text-black bg-white rounded-2xl p-1" />
    <input onChange={(e)=>setBookData({...bookData,noOfPage:e.target.value})} type="number" placeholder="no of pages" className="w-100 text-black bg-white rounded-2xl p-1" />

    <input onChange={(e)=>setBookData({...bookData,imgUrl:e.target.value})} type="text" placeholder="imageUrl" className="w-100 text-black bg-white rounded-2xl p-1" />

    <input onChange={(e)=>setBookData({...bookData,price:e.target.value})} type="price" placeholder="number" className="w-100 text-black bg-white rounded-2xl p-1" />
    <input onChange={(e)=>setBookData({...bookData,discountPrice:e.target.value})} type="number" placeholder="discount price" className="w-100 text-black bg-white rounded-2xl p-1" />
    <textarea onChange={(e)=>setBookData({...bookData,abstract:e.target.value})} type="text" placeholder="abstract" className="w-100 text-black bg-white rounded-2xl p-1" />




  </div>
  <div className="flex flex-col gap-4">
    <input onChange={(e)=>setBookData({...bookData,publisher:e.target.value})} type="text" placeholder="publisher" className="w-100 text-black bg-white rounded-2xl p-1" />
    <input onChange={(e)=>setBookData({...bookData,language:e.target.value})} type="text" placeholder="language" className="w-100 text-black bg-white rounded-2xl p-1" />
    <input onChange={(e)=>setBookData({...bookData,ISBN:e.target.value})} type="text" placeholder="ISBN" className="w-100 text-black bg-white rounded-2xl p-1" />

    <input onChange={(e)=>setBookData({...bookData,category:e.target.value})} type="text" placeholder="category" className="w-100 text-black bg-white rounded-2xl p-1" />


<label htmlFor="imgUpload">
    <input onChange={(e)=>{onImageClick(e)}} className="hidden" type="file" id="imgUpload" />
    <img className="w-50 " src={preview} alt="" />

</label>

  {
    previwImages.length>0&& <div className="flex gap-10">

      {
        previwImages.map((each)=>(
        <img className="w-25" src={each} alt="" />
          
        ))
      }
      {
        previwImages.length<=2 &&
        <label htmlFor="plus">

    <input onChange={(e)=>{onImageClick(e)}} className="hidden" type="file" id="plus" />
    <img className="w-10 rounded-full " src="https://media.istockphoto.com/id/1365197728/vector/add-plus-medical-cross-round-button-3d-vector-icon-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=A-7oq1uyF-3viWoEdb4wF3JgWX-EXzDl7UHa6ZK_EzI=" alt="" />
  </label>

    
      }
   

    </div>
  }


 <button onClick={onAddClick} className="bg-blue-500"> add</button>
  </div>
 </div>


        </div>
      }
       {
        bookStatusFlag &&
        <div>status</div>
      }
       {
        purchaseFlag &&
        <div>purch</div>
      }
      {/* <Footer /> */}
    </div>
  );
};

export default UserProfile;
