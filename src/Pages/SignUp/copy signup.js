import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/AuthApi";
// import {useHistory} from "react-router-dom";
// import { NavLink, Navigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import AuthUser from "../../FatchIntence/AuthUser";
// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const SignUp = () => {

  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        cpassword: '',
        Type: '1',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const result = await signUp(formData);
          localStorage.setItem('user-info', JSON.stringify(result));
          console.log('Registration successful:', result);
          // Navigate to the home page after successful registration
          navigate('/login');
        } catch (error) {
          console.error(error.message);
            window.alert(error.message);
        }
      };

  return (
    <div className=" flex justify-center mt-14">
      <div className="bg-indigo-800 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
        <div className="">
          <h3 className="text-xl font-semibold text-white pt-2 mt-4">
            Sign Up{" "}
          </h3>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center mt-2">
            <label className="w-64">
              First Name
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] text-black border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="First Name"
                required
                value={formData.name}
                onChange={handleChange}
              ></input>
            </label>
            <label className="w-64">
              Last Name
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] text-black border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
              ></input>
            </label>
            <label className="w-64">
              Email
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] text-black border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              ></input>
            </label>
            <label className="w-64">
              Number
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] text-black border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Number"
                required
                value={formData.mobile}
                onChange={handleChange}
              ></input>
            </label>
            <label className="w-64">
              Password
              <input
                type="password"
                id="password"
                name="password"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] text-black border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              ></input>
            </label>
            <label className="w-64">
              Re-enter Password
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] text-black border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Re-enter Password"
                required
                value={formData.cpassword}
                onChange={handleChange}
              ></input>
            </label>
            {/* I agree to the terms and conditions */}
            <div class="flex items-center mt-1">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="link-checkbox"
                class="ms-2 text-sm font-medium text-white dark:text-gray-300"
              >
                I agree with the terms and conditions.
              </label>
            </div>
            <button
              className="rounded-2xl m-4 text-white bg-blue-500 w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <p className="text-white mt-4 text-sm">Already have an account?</p>
        <a href="/login">
          <p className="text-white mb-4 text-sm font-medium cursor-pointer">
            Sign In to your Account?
          </p>
        </a>
      </div>
    </div>
  );
};

export default SignUp;
