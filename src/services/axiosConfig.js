import axios from "axios";

  const axiosConfig=async(method,url,reqbody,reqHeader)=>{
    let configObj={
        method:method,
        url:url,
        data:reqbody,
      headers:reqHeader
    }

    return await axios(configObj).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export default axiosConfig