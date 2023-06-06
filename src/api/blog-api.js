import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const BLOG_API = {
  getAllBlogFn: async () => {
    try {
      const res = await axios.get(API_ENDPOINT.ALL_BLOG, {
        withCredentials: true,
      });

      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  },

  getMyBlogFn: async (id) => {
    try {
      const res = await axios.get(API_ENDPOINT.ALL_MY_BLOG(id), {
        withCredentials: true,
      });

      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  },
};

export default BLOG_API;
