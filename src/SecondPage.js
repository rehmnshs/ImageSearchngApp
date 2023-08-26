import React, { useEffect, useState } from "react";
import ImageList from "./Components/ImageList";
import Searchbar from "./Components/SearchBar";
import searchImages from "./api";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import "./sp.css";

export const SecondPage = () => {
  const param = useParams();
  const [real, setreal] = useState([]);
  const [page, setpage] = useState(2);
  const username = param.username;

  const handleSubmit = async () => {
    const value = await searchImages(param.id);
    console.log(value);
    return setreal(value);
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  const handleClick = async () => {
    const orderby = "relevant";
    const value = await searchImages(param.id, orderby);
    setreal(value);

    return gsap.fromTo(
      ".main2",
      { duration: 1, opacity: 0, y: 50 },
      { duration: 2, opacity: 1, y: -20 }
    );
  };
  const handleClick1 = async () => {
    const orderby = "latest";
    const value = await searchImages(param.id, orderby);
    setreal(value);
    return gsap.fromTo(
      ".main2",
      { duration: 1.5, opacity: 0, y: 50 },
      { duration: 1.5, opacity: 1, y: -20 }
    );
  };
  const handleClick2 = async () => {
    setpage((prevPage) => prevPage + 1);
    console.log(page);
    const orderby = "";
    const value = await searchImages(param.id, orderby, page);
    setreal(value);
    return gsap.fromTo(
      ".main2",
      { duration: 1.5, opacity: 0, y: 50 },
      { duration: 1.5, opacity: 1, y: -20 }
    );
  };
  const handleClick3 = async () => {
    setpage(1);
    const orderby = "";
    const value = await searchImages(param.id, page, orderby);
    setreal(value);
    return gsap.fromTo(
      ".main2",
      { duration: 1.5, opacity: 0, y: 50 },
      { duration: 1.5, opacity: 1, y: -20 }
    );
  };

  return (
    <>
    <div>
      <div className="headerSP">
       
          <h3 onClick={handleClick}>sort by relevant </h3>
       
     
          <h3 onClick={handleClick1}>sort by latest </h3>
       
      </div>
      <ImageList item={real} username={username} />

   
    </div>
    <div className="footerSP">
        <button onClick={handleClick3} className="btSP"><svg className="svgSP"  xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z"/></svg></button>
        <button onClick={handleClick2} className="btSP"><svg className="svgSP" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z"/></svg></button>
      </div>
      </>
  );
};
