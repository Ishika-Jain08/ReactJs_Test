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
          `${import.meta.env.VITE_APP_URL}/${id}`
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
      <div className=" bg-gray-600 w-full h-40">
        {data?.Storyadventure ? (
          data?.Storyadventure.map((data, index) => (
            <div key={index}>
              <h1 className="font-semibold flex justify-center pt-16 text-3xl">
                {data?.Storytitle}
              </h1>
              <p></p>
            </div>
          ))
        ) : (
          <p className=" font-semibold flex justify-center pt-16 text-3xl">
            API NOT WORKING
          </p>
        )}
      </div>
      <div className=" flex  mt-6 bg-gray-600 ">
        <div className=" m-3  w-1/3  h-80 border-none rounded-md bg-gray-800 ">
          <img
            className=" border-none rounded-xl p-2 h-44"
            src={` https://ik.imagekit.io/dev24/${data?.Image[0]}`}
            alt="logo"
          />
          <h1>{data?.Title}</h1>
        </div>
        {/* all stories chapters */}
        <div className=" bg-gray-700 w-full m-3 border-none rounded-md">
          <div className=" flex justify-between flex-wrap">
            {data?.Wordexplore && data?.Wordexplore.length > 0 ? (
              <div className=" m-10 w-48 h-60 border-none rounded-md bg-gray-800 ">
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
              <p className=" font-semibold  p-10 text-3xl">No chapters available for this story.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
