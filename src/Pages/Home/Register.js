import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthReg from "./AuthReg";
// import { useHistory } from 'react-router-dom';

// 7523601890
// vishal1234@gmail.com
const Register = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {http,setToken} = AuthReg();
    // try {
        // "https://newuser-mp6z.onrender.com/api/register",
        const submitForm = (e) =>{
          e.preventDefault();
          // api call
          http.post('/login',{email:email,password:password}).then((res)=>{
              setToken(res.data.user,res.data.access_token);
          })
      }
  return (
    <div className="grid">
      <h1>Signup</h1>
      <form className="grid">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button onClick={submitForm} className="bg-black text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
