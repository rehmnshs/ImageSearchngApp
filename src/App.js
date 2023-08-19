import React, { useState, useEffect } from "react";
import Searchbar from "./Components/SearchBar";
import searchImages from "./api";
import searchRandom from "./apiR";
import ImageList from "./Components/ImageList";
import "./App.css";
import { SecondPage } from "./SecondPage";
import { gsap } from "gsap";
import { ClerkProvider, RedirectToSignIn, SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

const clerlPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
 
  document.title = "ImageSearch";
  const [random, setran] = useState([]);

  useEffect(() => {
    handleRandom();
  }, []);
  const handleRandom = async () => {
    const value = await searchRandom();
    setran(value);
    return gsap.fromTo(
      ".main2",
      { duration: 1, opacity: 0, y: 50 },
      { duration: 2, opacity: 1, y: -20 }
    );
  };
  return (
    <ClerkProvider publishableKey={clerlPubKey}>
   
  
   
   <SignedIn>
    
    <div className="mainn">
      <div className="Header">
        <h1 className="title">AstralGaze</h1>
        <ul className="options">
          <li onClick={handleRandom}>Random Images</li>
          <li>Favs</li>
        </ul>{" "}
      </div>
      <Searchbar />

      <ImageList item={random} />
    </div>
    </SignedIn>
    <SignedOut><RedirectToSignIn /></SignedOut>
    </ClerkProvider>
  );
}
export default App;
