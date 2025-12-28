import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import AdminSideBar from "./AdminSideBar";
import { toast } from "react-toastify";
import { getAllBooks, getAllUsers } from "../../services/allApi";
import { baseUrl } from "../../services/baseUrl";
const AdminBooks = () => {
  const [showBook, setShowBook] = useState(true);
  const [showUser, setShowUser] = useState(false);
  const [bookData,setBookData] =useState([])

  const[userData,setUserData]=useState([])

  useEffect(()=>{
getBookData()
getAllUserData()
  },[])

  const getBookData = async () => {
    try {
      let token = localStorage.getItem("token");

      let header = {
        Authorization: `Bearer ${token}`,
      };

      let apires = await getAllBooks(header, "");
      if(apires.status==200){
        setBookData(apires.data.BookData)
        console.log(apires.data.BookData)
      }else{
        toast.error(apires.response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to fetch book data");
    }
  };


  const getAllUserData=async()=>{
    try {

        let token=localStorage.getItem('token')
        let header={
            Authorization:`Bearer ${token}`
        }
        let apires=await getAllUsers(header)
        if(apires.status==200){
            setUserData(apires.data.allUsers)
            console.log(apires.data.allUsers)
        }else{
            toast.error(apires.response.data.message)
        }

        
    } catch (error) {
        console.log(error);
      toast.error("failed to fetch book data");
    }
  }

  return (
    <>
      <AdminNav />
      <div className="grid grid-cols-[3fr_9fr]">
        <AdminSideBar />
        <div>
          <div className="text-center mt-20">
            <button
              onClick={() => {
                setShowBook(true);
                setShowUser(false);
              }}
              className="border-0 rounded-xl p-2 bg-blue-500 text-white me-10 hover:bg-blue-300"
            >
              books
            </button>
            <button
              onClick={() => {
                setShowBook(false);
                setShowUser(true);
              }}
              className="border-0 rounded-xl p-2 bg-green-500 text-white hover:bg-green-300 "
            >
              {" "}
              Users
            </button>
          </div>

          {showBook &&
          
          
          
          
          
          <div>
            
{
    bookData?.length>0? <div className="my-10 grid grid-cols-3">

        {
            bookData?.map((eachBook,index)=>(
                <div
                    key={index}
                    className="rounded overflow-hidden  text-center mx-20 "
                  >
                    <img
                      className="w-100 h-60 object-cover"
                      src={eachBook.imgUrl}
                      alt="Book Cover"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {eachBook.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        {eachBook.author}
                      </p>

                      {/* <Link to={`/view/${eachBook._id}/book`} className="text-blue-500">View More</Link> */}
                    </div>
                  </div>
            ))
        }
    </div>: <h1>No books added</h1>

}

          </div>
          
          
          }
          {showUser
          
          && <div>
            {
                userData?.length>0?
                <div className="grid grid-cols-3 gap-6 mx-20 my-10">
                    {
                        userData?.map((eachuser,index)=>(
                           
                          
                            <div className="border border-gray-400 bg-blue-500 p-5 text-white  rounded-2xl"   key={index}>
                                 <div>
                                    <img className="w-52 rounded-2xl" src={`${baseUrl}/uploads/${eachuser.proPic}`} alt="" />
                                
                            </div>
                                <h1>Name:{eachuser.userName}</h1>
                                <h1>email:{eachuser.email}</h1>
                                <h1>Bio:{eachuser.bio}</h1>



                            </div>
                        ))
                    }
                </div> 
                :<h1>
                    no users found
                </h1>
            }
            
            </div>}
        </div>
      </div>
    </>
  );
};

export default AdminBooks;
