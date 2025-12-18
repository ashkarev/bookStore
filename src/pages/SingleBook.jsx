import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

const SingleBook = () => {


  const singleBook=()=>{
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

    let {id}=useParams()
    console.log(id)
  return (
    <>
  <Header />
    <h1>Single Book</h1>
      
    </>
  )
}

export default SingleBook
