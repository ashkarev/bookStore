import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import AdminSideBar from "./AdminSideBar";
import { faL } from "@fortawesome/free-solid-svg-icons";


import {
  Button,
  Card,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { toast } from "react-toastify";
import { addJob, deleteJob, getAllJobs } from "../../services/allApi";

const AdminCareers = () => {
  const [showjobs, setShowjobs] = useState(true);
  const [showapp, setShowApp] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [jobData, setJobData] = useState([]);

  const [jobInputData, setJobInputData] = useState({
    jobId: "",
    jobRole: "",
    jobDesc: "",
    jobDate: "",
    lastDate: "",
    salary: "",
    experience: "",
  });

  useEffect(() => {
    onAllJobs();
  }, []);

  const onAddJob = async () => {
    try {
      let token = localStorage.getItem("token");
      let header = {
        Authorization: `Bearer ${token}`,
      };
      // console.log(header)
      let apires = await addJob(jobInputData, header);
      if (apires.status == 201) {
        toast.success("successfully added");
        onAllJobs()
      } else {
        toast.error(apires.response.data.message);
      }
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      toast.error("some wrong while add");
    }
  };

  const onAllJobs = async () => {
    try {
      let apires = await getAllJobs();
      console.log(apires.data.allJobs);
      if (apires.status == 200) {
        setJobData(apires.data.allJobs);
      } else {
        toast.error("error occured");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong getting job datas");
    }
  };



  const onDeleteJob=async(id)=>{
    try {

      let token=localStorage.getItem('token')

      let header={
        Authorization:`Bearer ${token}`
      }

      let apires=await deleteJob(id,header)

      if(apires.status==200
      ){
        toast.success('successfully deleted')
        onAllJobs()
      }
      else{
        toast.error(apires.response.data.message)
      }
    } catch (error) {
         console.log(error);
      toast.error("something went wrong when deleting");
      
    }
  }

  return (
    <>
      <AdminNav />
      <div className="grid grid-cols-[3fr_9fr]">
        <AdminSideBar />
        <div>
          <h1 className="text-center text-blue-500 text-3xl mt-6">
            Admin careers
          </h1>

          <div className="text-center mt-10">
            <button
              onClick={() => {
                setShowjobs(true);
                setShowApp(false);
              }}
              className="border-0  rounded-xl bg-green-600 p-3 text-white hover:bg-green-400 mx-10"
            >
              View Jobs
            </button>

            <button
              onClick={() => {
                setShowApp(true);
                setShowjobs(false);
              }}
              className="border-0  rounded-xl bg-blue-600 p-3 text-white hover:bg-blue-400 mx-10"
            >
              Viw Applications
            </button>
          </div>
          <div>
            {showjobs && (
              <div>
                <h1 className="text-center text-green-800 text-2xl mt-6">
                  {" "}
                  ALL Jobs
                </h1>
                <button
                  onClick={() => setOpenModal(true)}
                  className="border-0  rounded-xl bg-green-800 p-3 text-white hover:bg-green-400 mx-10"
                >
                  Add New Job
                </button>

                {jobData?.length > 0 ? (
                  jobData.map((eachjob, index) => (
                    <div className="">
                      <Card href="#" className="max-w-sm">
                      <h5 className="   ">
                      Job Id:  {eachjob._id}  |
                      job Role : {eachjob.jobRole}  |
                      Salary :{eachjob.salary} |
                      experience:{eachjob.experience} |
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                      {eachjob.jobDesc}

                      <br />
                      {eachjob.jobDate}
                      {eachjob.lastDate}

                      </p>

                      <button onClick={()=>{onDeleteJob(eachjob._id)}} className="border-0  rounded-xl bg-red-600 p-3 text-white hover:bg-red-400 mx-10" >delete Job</button>
                    </Card>
                    </div>
                  ))
                ) : (
                  <h1>no jobs added</h1>
                )}

                <Modal
                  className=" mx-120 "
                  show={openModal}
                  onClose={() => setOpenModal(false)}
                >
                  <ModalHeader className="bg-blue-400 text-white text-2xl ">
                    Add Job
                  </ModalHeader>
                  <ModalBody className="bg-gray-500">
                    <div className="space-y-6 flex justify-between  ">
                      <div>
                        <input
                          onChange={(e) =>
                            setJobInputData({
                              ...jobInputData,
                              jobId: e.target.value,
                            })
                          }
                          placeholder="enter jobid"
                          type="text"
                          className="bg-white  p-3 text-black rounded-2xl my-2"
                        />
                        <input
                          onChange={(e) =>
                            setJobInputData({
                              ...jobInputData,
                              jobRole: e.target.value,
                            })
                          }
                          placeholder="enter jobname"
                          type="text"
                          className="bg-white  p-3 text-black rounded-2xl my-2"
                        />
                        <input
                          onChange={(e) =>
                            setJobInputData({
                              ...jobInputData,
                              jobDesc: e.target.value,
                            })
                          }
                          placeholder="enter desc"
                          type="text"
                          className="bg-white  p-3 text-black rounded-2xl"
                        />
                      </div>
                      <div>
                        <input
                          onChange={(e) =>
                            setJobInputData({
                              ...jobInputData,
                              jobDate: e.target.value,
                            })
                          }
                          placeholder="enter date"
                          type="text"
                          className="bg-white  p-3 text-black rounded-2xl my-2 "
                        />
                        <input
                          onChange={(e) =>
                            setJobInputData({
                              ...jobInputData,
                              lastDate: e.target.value,
                            })
                          }
                          placeholder="enter last date"
                          type="text"
                          className="bg-white  p-3 text-black rounded-2xl my-2"
                        />

                        <input
                          onChange={(e) =>
                            setJobInputData({
                              ...jobInputData,
                              salary: e.target.value,
                            })
                          }
                          placeholder="enter salary"
                          type="text"
                          className="bg-white  p-3 text-black rounded-2xl my-2"
                        />

                        <input
                          onChange={(e) =>
                            setJobInputData({
                              ...jobInputData,
                              experience: e.target.value,
                            })
                          }
                          placeholder="enter experience"
                          type="text"
                          className="bg-white  p-3 text-black rounded-2xl"
                        />
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="border-0  rounded-xl bg-blue-600 p-3 text-white hover:bg-blue-400 mx-10"
                      onClick={onAddJob}
                    >
                      Save
                    </Button>
                    <Button
                      className=" border-0  rounded-xl bg-red-600 p-3 text-white hover:bg-red-400 mx-10"
                      onClick={() => setOpenModal(false)}
                    >
                      Decline
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            )}

            {showapp && <div>app details</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCareers;
