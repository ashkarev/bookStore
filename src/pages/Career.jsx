import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { applyJob, getAllJobs } from "../services/allApi";
import Header from "../components/Header";
import { Card } from "flowbite-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";

const Career = () => {
  const [alljobData, setAllJobData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [applyData, setApplyData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobId: "",
    jobTitle: "",
    resume: "",
  });

  useEffect(() => {
    allJob();
  }, []);

  const allJob = async () => {
    try {
      let apires = await getAllJobs();
      console.log(apires);
      if (apires.status == 200) {
        setAllJobData(apires.data.allJobs);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  const onApplyClick = async () => {
    console.log("object")
    try {
      let header = {
        "Content-Type": "multipart/form-data",
      };


      //convert json for uploading files
      let reqBody=new FormData()

      for (let key in applyData) {
        console.log(applyData[key])
      reqBody.append(key,applyData[key])
     
        
      }

      console.log(reqBody)

      let apires=await applyJob(reqBody,header)
      console.log(apires)

      if(apires.status==201){
        toast.success('applied')

      }else{
        toast.error(apires.response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("some wrong while applyong");
    }
  };
  return (
    <>
      <Header />

      <h1 className="text-center text-5xl text-blue-500 font-bold">
        Career Page
      </h1>
      <div className="grid grid-cols-2 gap-6 mx-10 my-10 ">
        {alljobData?.length > 0 ? (
          alljobData.map((eachjob, index) => (
            <Card href="#" className="bg-sky-700 text-white rounded-2xl">
              <h5 className="   ">
                Job Id: {eachjob._id} | job Role : {eachjob.jobRole} | Salary :
                {eachjob.salary} | experience:{eachjob.experience} |
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {eachjob.jobDesc}
                <br />
                date: {eachjob.jobDate} // last date: {eachjob.lastDate}
              </p>
              <button
                onClick={() => {
                  setApplyData({
                    ...applyData,
                    jobId: eachjob._id,
                    jobTitle: eachjob.jobRole,
                  });
                  setOpenModal(true);
                  
                }}
                className="border-0  rounded-xl bg-blue-600 p-3 text-white hover:bg-red-400 mx-10"
              >
                Apply Now
              </button>
            </Card>
          ))
        ) : (
          <h1>no jobs added</h1>
        )}
      </div>

      <Modal
        className="mx-62 rounded-2xl"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ModalHeader className="text-center bg-sky-400">
          Terms of Service
        </ModalHeader>
        <ModalBody className="bg-sky-200">
          <div className=" flex flex-col gap-6 ">
            <input
              onChange={(e) =>
                setApplyData({ ...applyData, fullName: e.target.value })
              }
              // value={applyData.fullName}
              className="w-100 bg-white p-2 rounded-xl border-gray-400  shadow-2xl text-black"
              type="text"
              placeholder="full Name"
            />
            <input
              onChange={(e) =>
                setApplyData({ ...applyData, email: e.target.value })
              }
              // value={applyData.email}
              className="w-100 bg-white p-2 rounded-xl border-gray-400  shadow-2xl text-black"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) =>
                setApplyData({ ...applyData, phone: e.target.value })
              }
              // value={applyData.phone}
              className="w-100 bg-white p-2 rounded-xl border-gray-400  shadow-2xl text-black"
              type="text"
              placeholder="phone"
            />
          </div>
          <div>
            <label className="" htmlFor="resume">
              {" "}
              Resume - only Pdf <br />
              <input
                onChange={(e) =>
                  setApplyData({ ...applyData, resume : e.target.files[0] })
                }
                type="file"
                id="resume"
              />
            </label>
          </div>
        </ModalBody>
        <ModalFooter className="bg-sky-600">
          <Button

            className="border-0  rounded-xl bg-blue-600 p-3 text-white hover:bg-blue-500 mx-10"
            onClick={onApplyClick}
          >
            Apply
          </Button>
          <Button
            className="border-0  rounded-xl bg-blue-600 p-3 text-white hover:bg-red-400 mx-10"
            onClick={() => setOpenModal(false)}
          >
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Career;
