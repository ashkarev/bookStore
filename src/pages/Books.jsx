import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const Books = () => {
const [isloggedIn,setIsLoggedIn]=useState(false)


useEffect(()=>{
  let token=localStorage.getItem('token')

  if(token){
    setIsLoggedIn(true)
  }

},[])

  return (
    <>
      <Header />
      <h1 className="text-center text-4xl">Collections</h1>

      <div className="flex justify-center p-6">
        <input
          type="text"
          placeholder="Search By Title"
          className="border p-2 w-100"
        />
        <button className="text-amber-50 bg-blue-900 p-2 border-gray-950 border-2">
          search
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4 mt-5">
        <div className="col-span-1 ms-10">
          <h1 className="text-3xl mb-5">Filters </h1>
          <label className="">
            <input className="me-3" type="radio" />
            Literary Fiction
          </label>
        </div>
        <div className="col-span-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
            <img
              className="w-full"
              src="https://imgs.search.brave.com/VBkBMeKKexfbPWJFYs0V0hpoahBbnLKOOcCtzsuorC0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucGVuZ3VpbnJh/bmRvbWhvdXNlLmNv/bS9jYXRlZ29yeS1p/bWFnZXMvdHJpYWQt/aHVtb3IucG5n"
              alt="Book Cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Worst Case Senario</div>
              <p className="text-gray-700 text-base">pocket guide</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
