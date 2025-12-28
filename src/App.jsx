import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import Pnf from "./pages/Pnf";
import { useState } from "react";
import Loader from "./components/Loader";
import { Flip, ToastContainer } from "react-toastify";
import UserProfile from "./pages/UserProfile";
import SingleBook from "./pages/SingleBook";
import AdminHome from "./Admin/Pages/AdminHome";
import AdminCareers from "./Admin/Components/AdminCareers";
import AdminBooks from "./Admin/Components/AdminBooks";
import AdminSettings from "./Admin/Components/AdminSettings";

function App() {
  const [showLoad, setShowLoad] = useState(false);

  setTimeout(() => {
    setShowLoad(true);
  }, 3000);

  return (
    <>
      <Routes>
        <Route path="/" element={showLoad ? <Home /> : <Loader />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth insideRegister={true} />} />

        <Route path="/profile" element={<UserProfile />} />

        <Route path="/view/:id/book" element={<SingleBook />} />

        <Route path="/admin"  element={<AdminHome />}/>
        <Route path="/admin-careers" element={<AdminCareers />} />
        <Route path="/admin-books" element={<AdminBooks />} />
        <Route path="/admin-settings" element={<AdminSettings />} />

        <Route path="/*" element={<Pnf />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </>
  );
}

export default App;
