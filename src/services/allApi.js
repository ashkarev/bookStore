import axiosConfig from "./axiosConfig"
import { baseUrl } from "./baseUrl"


export  const registerUser=async(reqBody)=>{
    return await axiosConfig('post',`${baseUrl}/registerUser`,reqBody)
}

export const loginUser=async(reqBody)=>{
    return await axiosConfig('post',`${baseUrl}/loginUser`,reqBody)
}

export const googleLoginApi=async(reqBody)=>{
    return await axiosConfig('post',baseUrl+'/googleLogin',reqBody)
}