import axios from "axios";

const searchImages = async (term,orderby,page) => {
  
  
  const resp = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: process.env.REACT_APP_UNSPLASH_KEY,
    },
    params: {
      query: term,
      order_by:orderby,
      content_filter:"low",
      per_page:20,
      page:page,
    },
  });

  return resp.data.results;
};

export default searchImages;
