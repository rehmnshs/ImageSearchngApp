import React, { useState,useEffect } from "react";
import Searchbar from "./Components/SearchBar";
import searchImages from "./api";
import ImageList from "./Components/ImageList";
import "./App.css";

function App() {
  const [real, setreal] = useState([]);
  const handleSubmit = async (term) => {
    const value = await searchImages(term);

    return setreal(value);
  };
  useEffect( () =>{
    handleSubmit('random images');
        },[]);

  return (
    <div className="mainn">
    
      <Searchbar onSubmit={handleSubmit} />
      <ImageList item={real} />
    </div>
  );
}
export default App;
