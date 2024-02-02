import React, { useEffect, useState } from "react";
import Slider from "../../Components/Slider/Slider";
import CardContainer from "../../Components/Cards/CardContainer";
import axios from "axios";
import Cards from "../../Components/Cards/Cards";
// import { useNavigate } from "react-router-dom";
import Products from "../../Components/Product/Products";
import Search from "../../Components/Search/Search";

// const BASE_URL = "https://gauravimages.onrender.com/api";
// const BASEIMAGES_URL = "https://gauravimages.onrender.com/api/getImages";

const Home = () => {
  // const insertData = 'https://gauravimages.onrender.com/api/insertData';
  //  https://cloudinary-fileupload.onrender.com/api/files

  return (
    <>
      <Slider />
      <Search />
      <CardContainer />
      <Cards />
      <h1>Home</h1>
      <div className="section w-11/12">
        <div className="container grid grid-three-column">
          <Products />
        </div>
      </div>

      {/* <div> */}
        {/* <img src={`${BASEIMAGES_URL.file_url}`} alt={title} className="mb-4" /> */}
      {/* </div> */}
      {/* {data.map((ele)=>
  (`https://cloudinary-fileupload.onrender.com/api/upload-file.https://res.cloudinary.com/dr1gqb7u4/image/upload/v1706784173/nbrquwu5f7qrb7p3x3a2.jpg`))} */}
    </>
  );
};

export default Home;
