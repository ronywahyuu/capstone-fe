import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";
const USER_API = {
  getUserFn : async (id) => {
    try {
      const res = await axios.get(API_ENDPOINT.DETAIL_USER(id), {
        withCredentials: true,
      });

      // console.log(res);
      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  },
  loginFn: async (data) => {
    try {
      const res = await axios.post(API_ENDPOINT.LOGIN, data, {
        withCredentials: true,
      });

      console.log(res);
      return res;
    } catch (err) {
      return err.response.data;
      // console.log(err.response.data);
    }
  },

  registerFn: async (data) => {
    try {
      const res = await axios.post(API_ENDPOINT.REGISTER, data, {
        withCredentials: true,
      });
      console.log(res);

      return res;
    } catch (err) {
      return err.response.data;
    }
  },

  logoutFn: async () => {
    try {
      const res = await axios.get(API_ENDPOINT.LOGOUT, {
        withCredentials: true,
      });

      // remove cookies

      console.log(res);
      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  },
};

export default USER_API;
