import React, { useEffect, useState } from "react";
import "./searchbarc.css";
import { gsap } from "gsap";

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
      { duration: 1, opacity: 0, y: 50,  },
      { duration: 3, opacity: 1, y: -20,stagger:0.0}
    );
  }, []);

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
          <img className="pmp" src={result.urls.raw} />
        </div>
      )}
    </div>
  );
}

export default ImageShow;
