import axios from "axios";
// import img from "../assets/img.webp";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://mxpertztestapi.onrender.com/api/sciencefiction"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     <h1 className=" text-3xl mt-10 text-blue-500 font-bold">Science Fiction Stories</h1>
    <div className=" flex justify-between flex-wrap">
      {data ? (
        data.map((data,index) => (
          <div
            key={index}
            className=" m-10 w-48 h-60 border-none rounded-md bg-gray-800 "
          >
            <img
              className=" border-none rounded-xl p-2 h-44"
              src={` https://ik.imagekit.io/dev24/${data?.Image[0]}`}
              alt="logo"
            />
            <h1 className=" font-bold ">{data?.Title}</h1>
            <Link to={`/story/${data?._id}`}> <button className=" border  rounded-lg bg-white text-blue-700 font-bold w-32 mt-2">
             {data?.Status}
            </button></Link>
           
          </div>
        ))
      ) : (
        <h1>No Data Fetch</h1>
      )
      }
      </div>
    </>
  );
};

export default Card;
