import React, { useState, useEffect } from "react";
import Searchbar from "./Components/SearchBar";
import searchImages from "./api";
import searchRandom from "./apiR";
import ImageList from "./Components/ImageList";
import "./App.css";
import { SecondPage } from "./SecondPage";

function App() {
  document.title = "ImageSearch";
  const [random,setran] = useState([]);

  useEffect(() => {
    handleRandom();
  }, []);
  const handleRandom = async () => {
    const value = await searchRandom();
  
    return setran(value);
    

  };
  return (
    <div className="mainn">
      <div className="Header">
        <h1 className="title">SearchBar</h1>
        <ul className="options">
          <li onClick={handleRandom}>Random Images</li>
          <li>Favs</li>
        </ul>{" "}
      </div>
      <Searchbar />
      
      <ImageList item={random} />
     
    </div>
  );
}
export default App;
