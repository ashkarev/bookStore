import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { getAllBooks } from "../services/allApi";
import Footer from "../components/Footer";

const Books = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [bookData, setBookData] = useState([]);

const[duplicateBookData,setDuplicateBookData]=useState([])

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      getAllBookData();
    }
  }, []);

  const getAllBookData = async () => {
    try {
      let token = localStorage.getItem("token");

      let header = {
        Authorization: `Bearer ${token}`,
      };

      let apires = await getAllBooks(header);
      console.log(apires);

      let book = apires.data.BookData;
      setBookData(apires.data.BookData);
      setDuplicateBookData(apires.data.BookData)

      let category = [];

      book.forEach((data) => {
        if (!category.includes(data.category)) {
          category.push(data.category);
        }
      });

      setCategories(category);
    } catch (error) {
      console.log(error);
    }
  };

  const filterCategory=(category)=>{

    let filteredData=duplicateBookData.filter((data)=>data.category==category)
    setBookData(filteredData)
    
  }

  return (
    <>
      <Header />

      {isloggedIn ? (
        <>
          <h1 className="text-center text-4xl mt-6">Collections</h1>

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

          {/* MAIN GRID */}
          <div className="grid grid-cols-6 gap-6 mt-5 px-6">
            
            {/* FILTER SECTION */}
            <div  className="col-span-1">
              <h1 className="text-3xl mb-5">Filters</h1>

              {categories.length > 0 &&
                categories.map((cat, index) => (
                  <div onClick={()=>filterCategory(cat)}>
                  <label
                    key={index}
                    htmlFor={index}
                    className="flex items-center mb-3"
                  >
                    <input
                      id={index}
                      name="category"
                      className="me-3"
                      type="radio"

                    />
                    {cat}
                  </label></div>
                ))}
            </div>

            {/* BOOKS SECTION */}
            <div className="col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {bookData.length > 0 ? (
                bookData.map((eachBook, index) => (
                  <div
                    key={index}
                    className="rounded overflow-hidden shadow-lg"
                  >
                    <img
                      className="w-full h-60 object-cover"
                      src={eachBook.imgUrl}
                      alt="Book Cover"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {eachBook.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        {eachBook.author}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <h1>No Book Found</h1>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <img
            className="h-[350px]"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Please_log_in_image.png"
            alt=""
          />
          <Link className="text-4xl text-blue-500 my-10" to={"/register"}>
            Please logIn
          </Link>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Books;
