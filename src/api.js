import axios from "axios";

const searchImages = async (term) => {
  
  
  const resp = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: process.env.REACT_APP_UNSPLASH_KEY,
    },
    params: {
      query: term,
    },
  });

  return resp.data.results;
};

export default searchImages;
