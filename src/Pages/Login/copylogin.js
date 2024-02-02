import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../api/AuthApi";


const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  // https://lonex.onrender.com/user/login
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const result = await logIn(formData);
          localStorage.setItem('user-info', JSON.stringify(result));
          console.log('Registration successful:', result);
    
          // Navigate to the home page after successful registration
          navigate("/home");
        } catch (error) {
          console.error(error.message);
            window.alert(error.message);
        }
      };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center mt-32">
        <div className="bg-indigo-800 text-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
          {/* <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div> */}
          <h3 className="mt-4 mb-4 text-xl font-semibold text-blue-400 pt-2">
            Login In
          </h3>
          {/* Inputs */}
          <div className="flex flex-col items-center justify-center">
            <label className="w-64">
              Email
              <input
                type="email"
                id="email"
                name="email"
                className="text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Email"
                required
                ref={loginNameRef}
                value={formData.email}
                onChange={handleChange}
              ></input>
            </label>
            <label className="w-64">
              Password
              <input
                type="password"
                id="password"
                name="password"
                className="text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Password"
                required
                ref={loginPasswordRef}
                value={formData.password}
                onChange={handleChange}
              ></input>
            </label>
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
             type="submit"
              className="rounded-2xl m-4 text-white bg-blue-500 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in"
            >
              Sign In
            </button>
          </div>
          <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <p className="text-white mt-4 text-sm">Don't have an account?</p>
          <a href="/signup">
            <p className="text-white mb-4 text-sm font-medium cursor-pointer">
              Create a New Account?
            </p>
          </a>
        </div>
      </div>
    </form>
  );
};

export default Login;
