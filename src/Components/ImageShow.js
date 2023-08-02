import { useState } from "react";
import "./searchbarc.css";

function ImageShow({ item }) {
  const [result, setresult] = useState();

  const handleImageClick = () => {
    setresult(item);
  };

  const handlePopupClose = () => {
    setresult(null);
  };

  return (
    <div className="main">
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
          <img src={result.urls.raw} />
        </div>
      )}
    </div>
  );
}

export default ImageShow;
