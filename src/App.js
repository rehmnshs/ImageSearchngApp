import React, { useState, useEffect } from "react";
import Searchbar from "./Components/SearchBar";
import searchImages from "./api";
import searchRandom from "./apiR";
import ImageList from "./Components/ImageList";
import "./App.css";
import { SecondPage } from "./SecondPage";
import { gsap } from "gsap";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";

import getLiked from "./apiL";

import axios from "axios";

const clerlPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const Welcome = () => {
  const { user } = useUser();
  const username = user.username;

  document.title = "AstralGaze";
  const [random, setran] = useState([]);

  /*  useEffect(() => {
   // handleRandom();
    
    }
  }, []);  */

  const putUserDB = async () => {
    const resp = await axios.post("http://localhost:5000/register", {
      username: username,
    });
    console.log("sent to the db", resp);
  };

  putUserDB();

  const handleRandom = async () => {
    const value = await searchRandom();
    setran(value);
    return gsap.fromTo(
      ".main2",
      { duration: 1.5, opacity: 0, y: 50 },
      { duration: 1.5, opacity: 1, y: -20 }
    );
  };

  const handleLiked = async () => {
    const value = await getLiked(username);

    setran(value);
    return gsap.fromTo(
      ".main2",
      { duration: 1.5, opacity: 0, y: 50 },
      { duration: 1.5, opacity: 1, y: -20 }
    );
  };

  return (
    <div className="mainn">
      <div className="Header">
        <h1 className="title">AstralGaze</h1>
        <ul className="options">
          <li onClick={handleRandom}>Random Images</li>

          <li onClick={handleLiked}>Liked</li>
          <li>{username}</li>
        </ul>{" "}
      </div>

      <Searchbar />

      <ImageList item={random} />
    </div>
  );
};
function App() {
  return (
    <ClerkProvider publishableKey={clerlPubKey}>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <Welcome />
      </SignedIn>
    </ClerkProvider>
  );
}
export default App;
