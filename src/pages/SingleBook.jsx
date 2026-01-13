import React, { useContext, useEffect, useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { buyBook, getSingleBook } from "../services/allApi";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { baseUrl } from "../services/baseUrl";
import { authContext } from "../context/AuthContext";


import {loadStripe} from '@stripe/stripe-js';
import { toast } from "react-toastify";

const SingleBook = () => {

  const {token}=useContext(authContext)
  const [bookData, setBookData] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    singleBook();
  }, []);

  

  //Stripe
  const onBuyClick=async()=>{
    try {

      const stripe=await loadStripe('pk_test_51SocgH5ryYIXAp2yuAR1M35zyDEaM33oEYa27gn1q2aeNa40jcaIFvR5vHC58P3K6oSmE95cLb46scKHvRJe8rAV0075ZZjDxL')

      let reqBody={
        bookId:bookData._id,
        bookName:bookData.title,
        bookDesc:bookData.abstract,
        bookImage:bookData.imgUrl,
        sellerMail:bookData.userMail,
        price:bookData.price,
        discountPrice:bookData.discountPrice

      }

      let header={
        Authorization:`Bearer ${token}`
      }

      let apires=await buyBook(reqBody,header)

      if(apires.status==200){
        let session=apires.data.session
        window.location.href=session.url
      }else{
        toast.error(apires.response.data.message)
      }
      console.log(apires)

      
    } catch (error) {
      console.log(error)
      toast.error('some weong in payment')
    }

  }

  const singleBook = async () => {
    try {
      // let token = localStorage.getItem("token");

      let header = {
        Authorization: `Bearer ${token}`,
      };

      let apires = await getSingleBook(id, header);
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
      {bookData && (
        <div className="border-gray-400 border shadow-2xl shadow-gray-500  h-[320px] mx-[100px] my-6 rounded-2xl">
          <div className="text-center grid grid-cols-2">
            <div>
              <h1 className="text-4xl mt-5 text-cyan-400">
                Title : {bookData.title}
              </h1>
              <h1 className="text-center mt-5"> Author :{bookData.author}</h1>
              <h1 className="mt-5"> pages:{bookData.noOfPage}</h1>
              <h1 className="mt-5">price: {bookData.price}</h1>
              <button onClick={onBuyClick} className="border-2 rounded-2xl p-2 bg-blue-500 mt-5 text-white ">
                Purchase
              </button>

              <button
                onClick={() => setOpenModal(true)}
                className="border-2 rounded-2xl p-2 bg-green-500 mt-5 text-white "
              >
                more images
              </button>

              <Link
                to={"/books"}
                className="border-2 rounded-2xl p-2.5 bg-red-400 mt-5 text-white "
              >
                Go back
              </Link>
            </div>

            <div className="grid grid-cols-1">
              <img
                className="h-[280px] rounded-2xl p-2 mt-5"
                src={bookData.imgUrl}
                alt=""
              />
            </div>
            {/* <div className="grid grid-cols-4">
              
            <button className="border-2 rounded-2xl p-2 bg-blue-500 mt-5 text-white h-10">More Images</button>
              

              
            </div> */}
          </div>
        </div>
      )}
      <Modal
        className="mx-60 "
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ModalHeader className="bg-gray-500 text-3xl text-white p-2">
          Uploaded Images
        </ModalHeader>
        <ModalBody className="bg-gray-600">
          <div className="space-y-6 flex justify-around ">
            {bookData?.uploadedImages?.map((each) => (
              <img
                className="h-52 mx-2 rounded-md"
                src={`${baseUrl}/uploads/${each}`}
                alt=""
              />
            ))}
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </ModalBody>
        <ModalFooter className="bg-gray-400">
          <Button
            className="mx-3 p-2 rounded-2xl bg-red-600 text-white text-2xl"
            onClick={() => setOpenModal(false)}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SingleBook;
