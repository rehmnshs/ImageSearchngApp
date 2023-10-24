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
       
          <h3 onClick={handleClick} className="relevant">sort by relevant </h3>
       
     
          <h3 onClick={handleClick1} className="latest">sort by latest </h3>
       
      </div>
      <ImageList item={real} username={username} />

   
    </div>
    <div className="footerSP">
        <a onClick={handleClick3} ><p className="prev"> prev </p></a>
        <a onClick={handleClick2} ><p className="next"> next </p></a>
      </div>
      </>
  );
};
