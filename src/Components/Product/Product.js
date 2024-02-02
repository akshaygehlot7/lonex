import axios from "axios";
import React, { useEffect } from "react";

// const myArray = [
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     }, ,
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     },
//     {
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU",
//         title: "Title",
//         description: "Description"
//     }
// ];

// const imagesUrl = "https://cloudinary-fileupload.onrender.com/api/getImages"
// const imagesUrl = "https://gauravimages.onrender.com/api/getImages/"
const imagesUrl = "https://res.cloudinary.com/dr1gqb7u4/image/upload/";
// const imagesUrl = "https://gauravimages.onrender.com/api/getImages/"
// const BASEIMAGES_URL = "https://cloudinary-fileupload.onrender.com/api/upload-file";
const BASEIMAGES_URL =
  "https://cloudinary-fileupload.onrender.com/api/upload-file";
const Product = (curElem) => {
  const { id, title, images, description } = curElem;
  // console.log(`${BASEIMAGES_URL}/${images}`);
  // console.log(curElem);
//   const [data, setData] = useState([]);
  // console.log(data);

  function getData() {
    // axios.get(`${BASEIMAGES_URL}`).then((res) => {
    axios.post("https://cloudinary-fileupload.onrender.com/api/upload-file").then((res) => {
      console.log(res.data);
      // console.log(res.data);
    });
    // https://gauravimages.onrender.com/api/getImages/1704431133422-beauty.jpg
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex h-64 border border-slate-400 flex-col cursor-pointer bg-white justify-center py-3 px-5 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px]">
      <div className="rounded-lg" key={id}>
        <figure>
          {/* v1706765741/zaln8lz1am6bcjqjp6ei.jpg 
                    v1706784173/nbrquwu5f7qrb7p3x3a2.jpg*/}
           {/* <img src={`${BASEIMAGES_URL}`} alt={title} className="mb-4" /> */}
           <img src={"https://res.cloudinary.com/dr1gqb7u4/image/upload/v1706784173/nbrquwu5f7qrb7p3x3a2.jpg"} alt={title} className="mb-4" />
          {/* <figcaption className="caption">    {category}</figcaption> */}
        </figure>

        <div className="card-data">
          <div className="flex justify-between w-56">
            <h3 className=" ">{title}</h3>
            <h3 className="">{description}</h3>
            {/* <p className="card-data--price"></p> */}
          </div>
        </div>
        {/* data.map((ele) => ele.url.file_url) */}
        {/* <img src={ele.url.file_url} /> */}
      </div>
    </div>
  );
};

export default Product;
