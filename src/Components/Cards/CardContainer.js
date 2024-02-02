import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";
import { Col, Container, Row } from "reactstrap";

const BASE_URL = "https://gauravimages.onrender.com/api/";

// const imagesUrl = "https://gauravimages.onrender.com/api/getImages"
// const BASEIMAGES_URL = "https://gauravimages.onrender.com/api/getImages";
// const insertData = 'https://gauravimages.onrender.com/api/insertData';

const CardContainer = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  function getData() {
    axios.get(`${BASE_URL}getAllData`).then((res) => {
      setData(res.data);
      // console.log(res.data);
    });
    // https://gauravimages.onrender.com/api/getImages/1704431133422-beauty.jpg
  }
  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //     fetch(`${BASE_URL}/getAllData`)
  //         .then(response => response.json())
  //         // .then(data => setRecords(data))
  //         .then(data => {
  //             console.log(data);  // Log the entire data array
  //             setRecords(data);
  //         })
  //         .catch(err => console.log(err))
  // }, [])
  return (
    <div>
      {/* <div> */}
        {/* <div> */}
          <div className="mx-auto flex flex-wrap justify-center gap-2 ">
            {data.map((curElem) => (
              <div className="w-80">
                <Product key={curElem.id} {...curElem} />
              </div>
            ))}
          </div>
        {/* </div> */}
      {/* </div> */}

      {/* {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img src={`${imagesUrl}${item.images}`} alt={item.title} />
        </div>
      ))} */}
    </div>
  );
};

export default CardContainer;
