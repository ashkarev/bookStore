import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { googleLoginApi, loginUser, registerUser } from "../services/allApi";
import { Flip, toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { authContext } from "../context/AuthContext";

const Auth = ({ insideRegister }) => {

  const {saveToken}=useContext(authContext)


  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const registerClick = async () => {
    try {
      if (
        userData.userName == "" ||
        userData.email == "" ||
        userData.password == ""
      ) {
        toast.error("pls fill the form");
      } else {
        let apiresponce = await registerUser(userData);
        if (apiresponce.status == 201) {
          toast.success("good boy");

          navigate("/login");

          console.log(apiresponce);
        } else {
          console.log(apiresponce);
          toast.error(apiresponce.response.data.message);
        }
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const onLoginClick = async () => {
    try {
      let reqBody = {
        email: userData.email,
        password: userData.password,
      };

      let apires = await loginUser(reqBody);

      if (apires.status == 200) {
        toast.success("Login Success");
        // localStorage.setItem("token", apires.data.token);
        saveToken(apires.data.token)
        console.log(apires);

        //check is user admin ocuured redirect
        if (apires.data.existingUser.userType == "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }

       
      } else {
        toast.error(apires.response.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };

  const decodefn = async (credentials) => {
    console.log(credentials);

    let decodedata = jwtDecode(credentials.credential);
    console.log(decodedata);

    let payload = {
      userName: decodedata.name,
      email: decodedata.email,
      proPic: decodedata.picture,
    };
    let apires = await googleLoginApi(payload);
    console.log(apires);

    if (apires.status == 200 || apires.status == 201) {
      toast.success(apires.data.message);
      // localStorage.setItem("token", apires.data.token);
        saveToken(apires.data.token)

      navigate("/");
    } else {
      toast.error(apires.response.data.message);
    }
  };

  return (
    <>
      <div className="auth ">
        <h1 className="text-center text-4xl ">BOOK MANIA</h1>
        <div className="flex  justify-center my-20 ">
          <div className="min-h-[400px] w-[450px] bg-blue-950 rounded-2xl   ">
            <h1 className="text-center p-2 text-white text-4xl">
              {insideRegister ? "Register" : "login"}
            </h1>
            <div className="text-center text-white text-4xl">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="mx-15">
              {insideRegister && (
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, userName: e.target.value })
                  }
                  className="w-75 my-2 p-3 rounded-2xl  bg-gray-100 text-black"
                  type="text"
                  placeholder="User Name"
                />
              )}
              <input
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="w-75 my-2 p-3 rounded-2xl  bg-gray-100 text-black"
                type="text"
                placeholder="Email id"
              />
              <input
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                className="w-75 my-2 p-3 rounded-2xl bg-gray-100 text-black"
                type="password"
                placeholder="password"
              />
            </div>
            <div className="flex justify-evenly">
              <p className="text-yellow-300 text-sm">
                *Never share your password with orthers
              </p>
              <p className="text-white">Forget Password</p>
            </div>
            {insideRegister ? (
              <button
                onClick={registerClick}
                className="border-0 bg-green-700 w-75 p-2 rounded-xl text-white mx-15 mt-7"
              >
                register
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="border-0 bg-green-700 w-75 p-2 rounded-xl text-white mx-15 mt-7"
              >
                Login
              </button>
            )}
            <p className="text-white mx-15">
              -----------------------------or--------------------------
            </p>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                decodefn(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            ;
            {insideRegister ? (
              <div>
                <h1 className="text-center text-white">
                  Already an Existing User
                </h1>
                <Link to={"/login"}>
                  <p className="text-center text-white">Login</p>
                </Link>
              </div>
            ) : (
              <div>
                <h1 className="text-center text-white">ARE YOU NEW USER ?</h1>
                <Link to={"/register"}>
                  <p className="text-center text-white">Register</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
