import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Navbar from "../Components/Navbar/Navbar";
import Logout from "../Pages/Logout/Logout";
import Footer from "../Components/Footer/Footer";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routers;
