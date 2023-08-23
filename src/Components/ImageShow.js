import React, { useEffect, useState } from "react";
import "./searchbarc.css";
import { gsap } from "gsap";
import axios from "axios";



function ImageShow({ item, quality, username,like}) {
  const [result, setresult] = useState();
  const [showOverlay, setShowOverlay] = useState(false);
  const [liked, setliked] = useState();
  const [likedp,setlikedpage]= useState(like);

  const handleImageClick = async () => {
    setShowOverlay(true);
    setresult(item);
    let id = item.id;
    
    
    
     if(like === 1) {  return null;}else{ 
      const  respp = await axios.get(
        "https://astralgaze2.onrender.com/checkLike",
        {
          params: { username: username, id: id },
        }
      );
      setliked(respp.data.liked);}
   
    

    // Show the overlay when an image is clicked
  };
const handleunLikeClick =async()=>{
  let id = item.id;
  const resp = await axios.post("https://astralgaze2.onrender.com/delete", {
    username: username,
    id: id,

  });
  console.log("successfully deleted id ");
}
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

    try {
      console.log(username);

      const resp = await axios.post("https://astralgaze2.onrender.com/putID", {
        username: username,
        id: id,
      });
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
          src={item.urls.small}
          onClick={handleImageClick}
          loading="lazy"
        />
      </div>
      {result && (
        <div className="popup-media">
          <span onClick={handlePopupClose}> &times;</span>
          <div className="like">
            <span>
          
            {like===1 ?<button onClick={handleunLikeClick}>unLike</button>:<button onClick={handleLikeClick}>Like</button>}
              {liked && <button>Unlike</button>}{" "}
            </span>
          </div>
          <img className="pmp" src={result.urls.raw} />
        </div>
      )}
    </div>
  );
}

export default ImageShow;
