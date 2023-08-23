import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getLikedImgs from "./likedapi";

import ImageShow from "../Components/ImageShow";
import "../Components/searchbarc.css";

const LikedPage = () => {
  const params = useParams();
  const username = params.username;
  const [userIDs, setUserIDs] = useState([]);

  const fetchUserIDs = async (username) => {
    try {
      const response = await axios.get(
        `https://astralgaze2.onrender.com/getIDs`,
        {
          params: { username: username },
        }
      );
      const ids = response.data.ids;
      setUserIDs(ids);
    } catch (error) {
      console.error("Error fetching IDs:", error);
    }
  };
  let fi = [];
  useEffect(() => {
    fetchUserIDs(username);
  }, [username]);
  const [likedImages, setLikedImages] = useState([]);
  useEffect(() => {
    const fetchAllLikedImages = async () => {
      const images = await Promise.all(userIDs.map((id) => getLikedImgs(id)));
      fi = images.flat(); // Flatten the array of arrays
      console.log(fi);
      setLikedImages(fi);
    };

    fetchAllLikedImages();
  }, [userIDs]);

  const rede = likedImages.map((fi) => {
    return (
      <div className="main">
        
          <ImageShow item={fi} like= {1} usn={username} />
       
      </div>
    );
  });



  return (
    <>
    <div className="LikedHeader"><h3 className="headerr">Images Liked by {username}</h3></div>
    <div className="main3">
      <div>{rede}</div>
    </div>
    </>
  );
};

export default LikedPage;
