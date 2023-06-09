import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const DONASI_API = {
  getAllDonasiFn: async () => {
    try {
      const res = await axios.get(API_ENDPOINT.ALL_DONASI, {
        withCredentials: true,
      });

      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  },

  getSingleDonasiFn: async (id) => {
    await axios
      .get(API_ENDPOINT.SINGLE_DONASI(id), {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  },

  getMyDonasiFn: async (id) => {
    try {
      const res = await axios.get(API_ENDPOINT.ALL_MY_DONASI(id), {
        withCredentials: true,
      });

      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  },
};

export default DONASI_API;
