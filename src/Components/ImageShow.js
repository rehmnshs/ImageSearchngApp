import React, { useState } from "react";
import "./searchbarc.css";

function ImageShow({ item, quality }) {
  const [result, setresult] = useState();
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageClick = () => {
    setresult(item);
    setShowOverlay(true); // Show the overlay when an image is clicked
  };

  const handlePopupClose = () => {
    setresult(null);
    setShowOverlay(false); // Hide the overlay when the popup is closed
  };

  return (
    <div className="main">
      {showOverlay && <div className="overlay" onClick={handlePopupClose}></div>}
      <div>
        <img className="main2" src={item.urls.regular} onClick={handleImageClick} />
      </div>
      {result && (
        <div className="popup-media">
          <span onClick={handlePopupClose}> &times;</span>
          <img src={result.urls.raw} />
        </div>
      )}
    </div>
  );
}

export default ImageShow;
