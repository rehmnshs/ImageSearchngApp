import axios from "axios";

const getLikedImgs = async (id) => {
  
  
  const resp = await axios.get(`https://api.unsplash.com/photos/${id}`, {
    headers: {
      Authorization: process.env.REACT_APP_UNSPLASH_KEY,
    },
    params: {
     id:id
    },
  });
console.log(resp.data);
  return resp.data;
};

export default getLikedImgs;
