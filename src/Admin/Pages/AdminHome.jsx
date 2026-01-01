import React, { useEffect, useState } from "react";
import AdminNav from "../Components/AdminNav";
import AdminSideBar from "../Components/AdminSideBar";
import { getUserDetails, updateUserProfile } from "../../services/allApi";
import { toast } from "react-toastify";
import axios from "axios";

const AdminHome = () => {
  const [preview, setPreview] = useState(
    "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration-eps10_268834-1920.jpg?semt=ais_hybrid&w=740&q=80"
  );

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    proPic: "",
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      let token = localStorage.getItem("token");

      let header = {
        Authorization: `Bearer ${token}`,
      };
      let apires = await getUserDetails(header);
      // console.log(apires.data);
      setUserData(apires.data);
    } catch (error) {
      console.log(error);
    }
  };

  const imgChange = (e) => {
    // console.log(URL.createObjectURL(e.target.files[0]));
    // console.log(URL.createObjectURL(e.target.files[0]))
    setPreview(URL.createObjectURL(e.target.files[0]));
    setUserData({ ...userData, proPic: e.target.files[0] });
  };
  const onSubmitClick = async () => {
    try {
      if (
        userData.userName == "" ||
        userData.password == "" ||
        userData.confirmPassword == "" ||
        userData.proPic == ""
      ) {
        toast.error("pls fill the form");
      } else {
        if (userData.password == userData.confirmPassword) {
          let reqBody = new FormData();

          for (let key in userData) {
            reqBody.append(key, userData[key]);
            // important steps
            // application/json nrml it will tell by axios
            // if files then it smutlipart form data

          
          }
            let token = localStorage.getItem("token");
            let header = {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            };
            let apires=await updateUserProfile(userData._id,reqBody,header)
            console.log(apires)
           if(apires.status==200){
            toast.success('sucesfully updated')
           }else{
            toast.error(apires.response.data.message)
           }
        } else {
          toast.error("password and confirm passwrd must same");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

const onrestClick=()=>{
  setUserData({
     userName: "",
    password: "",
    confirmPassword: "",
    proPic: "",
  })
  setPreview('https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration-eps10_268834-1920.jpg?semt=ais_hybrid&w=740&q=80')

}

  return (
    <>
      <AdminNav />
      <div className="grid grid-cols-[3fr_9fr]">
        <AdminSideBar />
        <div>
          <h1 className="text-3xl text-center text-blue-500 font-bold my-10">
            Admin Settigs{" "}
          </h1>

          <div className="grid grid-cols-2 gap-6 text-center mx-20 ">
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis velit ducimus saepe similique nemo quis sunt facilis,
                deserunt eveniet, quibusdam voluptatem ut molestiae culpa
                pariatur assumenda nam molestias facere accusantium?
              </p>
              <p className="my-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat odit quam aliquam. Earum aspernatur delectus,
                cupiditate provident omnis obcaecati rerum in voluptatem, fuga
                magni velit error, praesentium natus? Nulla, error!
              </p>
            </div>

            <div className="border border-gray-300 shadow-2xl rounded-2xl bg-black flex flex-col gap-3 p-3">
              <label className="flex justify-center my-3" htmlFor="img1">
                <img className="h-60 rounded-2xl" src={preview} alt="" />
              </label>
              <input
                onChange={(e) => imgChange(e)}
                className="hidden"
                type="file"
                id="img1"
              />
              <div>
                <input
                  value={userData?.userName}
                  onChange={(e) => {
                    setUserData({ ...userData, userName: e.target.value });
                  }}
                  className="max-w-100 border p-2 text-white rounded-2xl"
                  type="text"
                  placeholder="admin name"
                />
              </div>
              <div>
                <input
                  value={userData?.password}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                  className="max-w-100 border p-2 text-white rounded-2xl"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                value={userData?.confirmPassword}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      confirmPassword: e.target.value,
                    });
                  }}
                  className="max-w-100 border p-2 text-white rounded-2xl"
                  type="text"
                  placeholder="confirm password"
                />
              </div>
              <div>
                <button
                 onClick={onrestClick} 
                  className="border-0  rounded-xl bg-red-600 p-3 text-white hover:bg-red-400 mx-10"
                >
                  Reset
                </button>
                <button onClick={onSubmitClick} className="border-0  rounded-xl bg-green-600 p-3 text-white hover:bg-green-400">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
