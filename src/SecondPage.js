import React, { useEffect, useState } from "react";
import ImageList from "./Components/ImageList";
import Searchbar from "./Components/SearchBar";
import searchImages from "./api";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";

export const SecondPage = () => {
  const param = useParams();
  const [real, setreal] = useState([]);
  const [page, setpage] = useState(2);

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
    <div>
      <button onClick={handleClick}>sort by relevant </button>
      <button onClick={handleClick1}>sort by latest </button>
     
        <ImageList item={real} /> 
     
      <div>
        <button onClick={handleClick2}>next Page</button>
        <button onClick={handleClick3}>previous Page</button>
      </div>
    </div>
  );
};
