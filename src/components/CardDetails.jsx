import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const CardDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(
          `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStory();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className=" flex  mt-16 bg-gray-500 justify-between">
        <div className=" m-10  w-72  h-80 border-none rounded-md bg-gray-800 ">
          <img
            className=" border-none rounded-xl p-2 h-44"
            src={` https://ik.imagekit.io/dev24/${data?.Image[0]}`}
            alt="logo"
          />
          <h1>{data?.Title}</h1>
        </div>
        {/* all stories chapters */}
        <div className=" flex justify-between flex-wrap">
          {data?.Wordexplore && data?.Wordexplore.length > 0 ? (
            <div  className=" m-10 w-48 h-60 border-none rounded-md bg-gray-800 "
            >
              <h2>Chapters</h2>
              <ul>
                {data.Wordexplore.map((data, index) => (
                  <li key={index}>
                     <img
                      className=" border-none rounded-xl p-2 h-44"
                      src={` https://ik.imagekit.io/dev24/${data?.Image[0]}`}
                      alt="logo"
                    />
                    <h3>{data?.Storytitle}</h3>
                    <p>{data?.Storyttext}</p>
                    <p>{data?.Synonyms}</p>
                    <p>{data?.Antonyms}</p>
                    <p>{data?.Noun}</p>
                   
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No chapters available for this story.</p>
          )}
         
        </div>
      </div>
    </>
  );
};

export default CardDetails;
