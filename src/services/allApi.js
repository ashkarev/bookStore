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
    return await axiosConfig('patch',`${baseUrl}/${id}/updateProfile`,reqBody,reqheader)
}

export const getAllUsers=async(reqHeader)=>{
    return await axiosConfig('get',`${baseUrl}/AllUsers`,'',reqHeader)
}

export const addJob=async(reqBody,reqHeader)=>{
    return await axiosConfig('post',`${baseUrl}/addJob`,reqBody,reqHeader)
}

export const getAllJobs=async()=>{
    return await axiosConfig('get',`${baseUrl}/getAllJobs`,'')
}

export const deleteJob=async(id,reqHeader)=>{
    return await axiosConfig('delete',`${baseUrl}/${id}/deleteJob`,{},reqHeader)
}

export const applyJob=async(reqBody,reqHeader)=>{
    return await axiosConfig('post',`${baseUrl}/applyJob`,reqBody,reqHeader)
}

export const getAllApplication=async(reqHeader)=>{
    return await axiosConfig('get',`${baseUrl}/getAllApplication`,"",reqHeader)
}