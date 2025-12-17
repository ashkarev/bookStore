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

export const addBook=async(reqBody,reqHeader)=>{
    return await axiosConfig('post',`${baseUrl}/addBook`,reqBody,reqHeader)
}


export const getBook=async()=>{
    return await axiosConfig('get',baseUrl+'/getSixBooks','')
}

export const getAllBooks=async(reqHeader)=>{
    return await axiosConfig('get',baseUrl+'/getAllBooks','',reqHeader)
}