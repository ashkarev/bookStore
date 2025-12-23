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

export const getAllBooks=async(reqHeader,searchKey)=>{
    return await axiosConfig('get',`${baseUrl}/getAllBooks/?search=${searchKey}`,'',reqHeader)
}

export const getSingleBook=async(id,reqHeader)=>{
    return await axiosConfig('get',`${baseUrl}/getSingleBook/${id}`,'',reqHeader)
}

export const getUserDetails=async(reqHeader)=>{
    return await axiosConfig('get',`${baseUrl}/userdetails`,'',reqHeader)


}
export const updateUserProfile=async(id,reqBody,reqheader)=>{
    return await('patch',`${baseUrl}/${id}/updateProfile`,reqBody,reqheader)
}