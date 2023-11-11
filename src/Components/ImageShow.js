import React, { useEffect, useState } from "react";
import "./searchbarc.css";
import { gsap } from "gsap";
import axios from "axios";




function ImageShow({ item, quality, username ,like,usn}) {
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
  
  const handleUnlikeClick = async () => {
    let id = item.id;
   
    
    try {
      const resp = await axios.delete("https://astralgaze2.onrender.com/delete", {
        data: {
          username: usn,
          id: id,
        },
      });
      console.log(usn);
      console.log(resp.data);
    } catch (error) {
      console.error("Error:", error);
    }
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
    
    const id = item.id;

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
      
      <div className="likedimg">
      <div className="img-wrapper">
        <img
          className="main2"
          src={item.urls.small}
          onClick={handleImageClick}
          loading="lazy"
        /><button className="like-button" onClick={handleLikeClick}>like</button>
        {like===1 && <span><button className="like-button" onClick={handleUnlikeClick}>unLike</button> </span>}
      </div>
      </div>
      {result && (
        <div className="popup-media">
          <span onClick={handlePopupClose}> &times;</span>
          <div className="like">
          
            <span>
          
            
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
