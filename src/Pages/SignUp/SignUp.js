import React, { useState } from "react";
import { registerUser } from "../../api/AuthApi";
import { useNavigate } from "react-router-dom";
// import {useHistory} from "react-router-dom";
// import { NavLink, Navigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import AuthUser from "../../FatchIntence/AuthUser";
// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const navigate = useNavigate()

  async function signUp(e) {
    // console.log(name, lastName, email, phone,password, confirmpassword)
    e.preventDefault();
    let items = { name, lastName, email, mobile, password, confirmpassword };
    console.log(items);
    // try {
    let result = await fetch(
      "https://gauravlonexloginsignup.onrender.com/api/register",
      {
        method: "POST",
        body: JSON.stringify(items),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    console.log("result", result);
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate("/login");
    
    // if (result.success) {
    //   if (result) {
    //     // Navigate to the login page
    //     Navigate("/login");
    //   } else {
    //     console.error("Registration failed. Server response:", result);
    //     // window.alert("Registration failed. Server response:", result);
    //   }
    // } catch (error) {
    //   console.error("Error during form submission:", error);
    //   // window.alert("Error during form submission:", error);
    // }
  }
  // vishal369@gmail.com
  // async function signUp(e) {
  //   e.preventDefault();
  //   let items = { name, lastName, email, phone, password, confirmpassword };

  //   try {
  //     let result = await registerUser(items);
  //     console.log("result", result);

  //     // Handle the result as needed
  //   } catch (error) {
  //     console.error("Error during form submission:", error);
  //     window.alert("Error during form submission:", error);
  //   }
  // }
  return (
    <div className=" flex justify-center mt-14">
      <div className="bg-indigo-800 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
        <div className="">
          <h3 className="text-xl font-semibold text-white pt-2 mt-4">
            Sign Up{" "}
          </h3>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <form>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
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
              onClick={signUp}
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

            {/* <label className="w-64">
            Title
              <input
                type="text"
                name="name"
                className="text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Title"
                required
                value={title}
                onChange={handleImage}
              ></input>
            </label>
            <label className="w-64">
            Description
              <input
                type="text"
                name="description"
                className="text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="description"
                required
                value={description}
                onChange={handleImage}
              ></input>
            </label> */}