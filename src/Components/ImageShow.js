import React, { useEffect, useState } from "react";
import "./searchbarc.css";
import { gsap } from "gsap";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
const User =() =>{
  const {user} = useUser();
}
function ImageShow({ item, quality }) {
  const [result, setresult] = useState();
  const [showOverlay, setShowOverlay] = useState(false);
 
 

  const handleImageClick = () => {
    setresult(item);

    console.log(item);
    setShowOverlay(true); // Show the overlay when an image is clicked
  };

  const handlePopupClose = () => {
    setresult(null);
    setShowOverlay(false); // Hide the overlay when the popup is closed
  };
  useEffect(() => {
    gsap.fromTo(
      ".main2",
      { duration: 1, opacity: 0, y: 50 },
      { duration: 3, opacity: 1, y: -20, stagger: 0.0 }
    );
  }, []);
  const handleLikeClick = async () => {
    const id = result.id;
   const usernamee =  <User />;
   const username = usernamee.username;

    try {
      const resp = await axios.post("https://astralgaze2.onrender.com/putID", { username:username , id: id });
      console.log("id and username  is sent to db");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main">
      {showOverlay && (
        <div className="overlay" onClick={handlePopupClose}></div>
      )}
      <div>
        <img
          className="main2"
          src={item.urls.regular}
          onClick={handleImageClick}
        />
      </div>
      {result && (
        <div className="popup-media">
          <span onClick={handlePopupClose}> &times;</span>
          <div className="like">
            <span><button onClick={handleLikeClick}>Like</button></span>
          </div>
          <img className="pmp" src={result.urls.raw} />
        </div>
      )}
    </div>
  );
}

export default ImageShow;
