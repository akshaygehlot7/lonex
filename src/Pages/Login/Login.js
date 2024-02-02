import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/AuthApi";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // vishal028@gmail.com
  async function login(e) {
    e.preventDefault();
    let items = { email, password };
    console.log(items);
    try {
      let response = await fetch("https://gauravlonexloginsignup.onrender.com/api/login", {
        method: "POST",
        body: JSON.stringify(items),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        // body: JSON.stringify(items)
      })
      // result = await result.json();
      // localStorage.setItem("user-info",JSON.stringify(result))
      navigate("/home")
      if (!response.ok) {
        console.error("Login failed:", response.statusText);
      const errorResponse = await response.json(); // Try to get more information from the response
      console.error("Error response from the server:", errorResponse);
      return;
      }

      let result = await response.json();
      console.log("Server response:", result);

      // Assuming the server response has a property named 'token'
      if (result.data && result.data.token && result.data.name) {
        // Save the token to localStorage
        localStorage.setItem("user-token", result.data.token);
        // You can also store other user information if needed
        localStorage.setItem("user-info", JSON.stringify({
          token: result.data.token,
          name: result.data.name,
        }));
        setUserName(result.data.name);
        console.log("User token and info saved to localStorage.", result.data.token, result.data.name);

        // Navigate to the home page or perform other actions
        navigate("/home");
      } else {
        console.error("Login failed. Token not found in the server response.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error appropriately (e.g., show an error message to the user).
       // Log additional information about the error
      if (error.response) {
        console.error("Server response data:", error.response.data);
        console.error("Server response status:", error.response.status);
        console.error("Server response headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received. Request details:", error.request);
      } else {
        console.error("Error details:", error.message);
      }
    }
    const userToken = localStorage.getItem("user-token");
    const userName = localStorage.getItem("user-info") ? JSON.parse(localStorage.getItem("user-info")).name : null;
    if (userToken) {
      console.log("User token found:", userToken);
      console.log("User name found:", userName);
    } else {
      console.log("User token not found.");
    }
  }
  useEffect(()=>{
    const storedUserName = localStorage.getItem("user-info") ? JSON.parse(localStorage.getItem("user-info")).name : null;
    setUserName(storedUserName);
  }, []);

  return (<>
  {userName && (
    <div>
      <p>WelCome, {userName}</p>
    </div>
  )}
    <form>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              onClick={login}
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
  </>
  );
};

export default Login;
