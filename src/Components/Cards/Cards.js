import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards() {
  const [employee, setEmployee] = useState({
    title: "",
    description: "",
    category_id: "",
    images: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate()

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/auth/category")
  //     .then((result) => {
  //       if (result.data.Status) {
  //         setCategory(result.data.Result);
  //       } else {
  //         alert(result.data.Error);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', employee.title);
    formData.append('description', employee.description);
    formData.append('images', employee.images);
    // formData.append('category_id', employee.category_id);

    axios.post('https://gauravimages.onrender.com/api/insertData', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('home')
        } else {
            // alert(result.data.Error)
            console.log(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="flex justify-center items-center mt-3">
      <div className="p-3 rounded w-50 border w-96">
        <h3 className="text-center text-xl">Card</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label mr-4">
              Title-:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputTitle"
              placeholder="Enter Title"
              onChange={(e) =>
                setEmployee({ ...employee, title: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label mr-4">
            Description-:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputDescription"
              placeholder="Enter Description"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, description: e.target.value })
              }
            />
          </div>
          <div className="col-12 mb-3 mt-3">
            <label className="" for="inputGroupFile01">
              Select Image-:
            </label>
            <input
              type="file"
              className="mt-3 rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) => setEmployee({...employee, images: e.target.files[0]})}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cards;
