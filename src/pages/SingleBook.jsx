import React, { useEffect, useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { getSingleBook } from "../services/allApi";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { baseUrl } from "../services/baseUrl";

const SingleBook = () => {
  const [bookData, setBookData] = useState({});
   const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    singleBook();
  }, []);

  const singleBook = async () => {
    try {
      let token = localStorage.getItem("token");

      let header = {
        Authorization: `Bearer ${token}`,
      };

      let apires = await getSingleBook(id,header);
      console.log(apires.data.SinglebookData);
      setBookData(apires.data.SinglebookData);
    } catch (error) {
      console.log(error);
    }
  };

  let { id } = useParams();
  console.log(id);
  return (
    <>
      <Header />
      {
        bookData&& <div className="border-gray-400 border shadow-2xl shadow-gray-500  h-[320px] mx-[100px] my-6 rounded-2xl">
           
        
         
 <div className="text-center grid grid-cols-2">
  <div>
       <h1 className="text-4xl mt-5 text-cyan-400">Title : {bookData.title}</h1>
            <h1 className="text-center mt-5"> Author :{bookData.author}</h1>
            <h1 className="mt-5"> pages:{bookData.noOfPage}</h1>
            <h1 className="mt-5">price: {bookData.price}</h1>
            <button className="border-2 rounded-2xl p-2 bg-blue-500 mt-5 text-white ">Purchase</button>


                        <button  onClick={() => setOpenModal(true)} className="border-2 rounded-2xl p-2 bg-green-500 mt-5 text-white ">more images</button>

            <Link to={'/books'} className="border-2 rounded-2xl p-2.5 bg-red-400 mt-5 text-white ">Go back</Link>

  </div>
   

            <div className="grid grid-cols-1">
              
                <img className="h-[280px] rounded-2xl p-2 mt-5" src={bookData.imgUrl} alt="" />

              
            </div>
             {/* <div className="grid grid-cols-4">
              
            <button className="border-2 rounded-2xl p-2 bg-blue-500 mt-5 text-white h-10">More Images</button>
              

              
            </div> */}
            

          
          </div>

          
          

        </div>

        
      }
       <Modal className="mx-60 " show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader className="bg-gray-500 text-3xl text-white p-2">Uploaded Images</ModalHeader>
        <ModalBody className="bg-gray-600">
          <div className="space-y-6 flex justify-around ">
           {
            bookData?.uploadedImages?.map((each)=>(
              <img className="h-52 mx-2 rounded-md" src={`${baseUrl}/uploads/${each}`} alt="" />
            ))
           }
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </ModalBody>
        <ModalFooter className="bg-gray-400">
          
          <Button className="mx-3 p-2 rounded-2xl bg-red-600 text-white text-2xl"  onClick={() => setOpenModal(false)}>
          Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SingleBook;
