import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const POST_ACTION_API = {
  // ==================== Comment Action ====================
  // ========================================================
  // createCommentFn: async (data) => {},

  // ==================== Like Action ====================
  // ========================================================
  // createLikeFn: async (data) => {},

  // ==================== Bookmark Action ====================
  // ========================================================
  createBookmarkFn: async ({userId, postId}) => {
    try {
      const res = await axios.post(
        API_ENDPOINT.CREATE_BOOKMARK_DONASI,
        {
          userId,
          postId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(res);
      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  },
};

export default POST_ACTION_API;
