import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "About",
    path: "/about",
  },

  {
    display: "Contact",
    path: "/contact",
  },
];
// inder222@gmail.com

const Navbar = () => {
  const [userName, setUserName] = useState(" ");
  let user = JSON.parse(localStorage.getItem('user-info'))
  // console.log(user)

  function logout(){
    localStorage.clear();
  }

  useEffect(() => {
    const storedUserName = localStorage.getItem("user-info")
      ? JSON.parse(localStorage.getItem("user-info")).name
      : null;
    setUserName(storedUserName);
  }, []);

  return (
    <div className="flex w-full h-20 bg-white shadow-lg items-center">
      {/* <div className="flex justify-between "> */}
      <div className="flex w-11/12 justify-between ml-12">
        <div className="flex">
          <h5 className="text-orange-500 text-2xl">Lonex</h5>
        </div>

        {/* ======= menu ======= */}
        {userName && (
          <div>
            <p>WelCome, {userName}</p>
          </div>
        )}
        <div className="flex">
          <div className="flex align-items-center gap-5 text-xl">
            {nav__links.map((item, index) => (
              <NavLink to={item.path} key={index}>
                {item.display}
              </NavLink>
            ))}
          </div>
          <>
            {localStorage.getItem('user-info')?
              <div className="flex align-items-center gap-4 ml-4">
              <span className="bg-yellow-300  text-center rounded-lg" style={{"width" : "70px"}}>
                <Link onClick={logout}>
                  <h3 className="text-xl">Logout</h3>
                </Link>
              </span>
            </div>
            :
            <div className="flex align-items-center gap-4 ml-4">
              <span className="bg-yellow-300 w-14 text-center rounded-lg">
                <Link to="/login">
                  <h3 className="text-xl">Login</h3>
                </Link>
              </span>
            </div>
            }
          </>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
