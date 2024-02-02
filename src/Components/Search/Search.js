import React, { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  function fetchData(value) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      //   .then(json => console.log(json))
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        // console.log(results)
        setResults(results);
      });
  }
  const handleChange = (value) => {
    setSearchQuery(value);
    fetchData(value);
  };
  return (
    <div className="grid justify-center mt-5">
      <div className="flex justify-center w-full">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleChange(e.target.value)}
          style={{width: "26rem"}}
          className="px-5  border border-gray-400 p-2 rounded-l-full"
        />
        <button
          className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
          onClick={() => {}}
        >
          🔍
        </button>
      </div>
      <div className=" w-11/12 cursor-pointer rounded-2xl p-2 bg-white flex flex-col mt-4 max-h-80 overflow-y-scroll">
        {results.map((item, id)=>{
            return<div 
            className="p-2 hover:bg-slate-200"
            onClick={(e)=>alert(`You Clicked on ${item.name}`)}
            key={id}>{item.name}</div>
        })}
      </div>
    </div>
  );
};

export default Search;
