import axios from "axios";

const getLiked = async (username) => {
    console.log(username);
  const resp = await axios.get(`https://api.unsplash.com/users/${username}/likes?client_id=4vRKElTAA3n1cP9JtmSm-RfMP58GlKzsBU55jn-soHM`, {
    headers: {
      Authorization: process.env.REACT_APP_UNSPLASH_KEY,
    },
    params: {
      content_filter: "low",
      count: 20,
     
    },
  });

  return resp.data;
};

export default getLiked;
 