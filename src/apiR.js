import axios from "axios";

const searchRandom = async () => {
  const resp = await axios.get("https://api.unsplash.com/photos/random", {
    headers: {
      Authorization: process.env.REACT_APP_UNSPLASH_KEY,
    },
    params: {
      content_filter: "low",
      count: 10,
    },
  });

  return resp.data;
};

export default searchRandom;
