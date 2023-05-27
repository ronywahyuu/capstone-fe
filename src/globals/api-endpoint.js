import CONFIG from "./config";

const API_ENDPOINT = {
  // DONASI
  ALL_DONASI: `${CONFIG.API_URL}/posts`,
  CREATE_DONASI: `${CONFIG.API_URL}/posts`,
  SINGLE_DONASI: (id) => `${CONFIG.API_URL}/${id}`, // <=== DETAIL, UPDATE, DELETE

  // AUTH
  LOGIN: `${CONFIG.API_URL}/auth/login`,
  REGISTER: `${CONFIG.API_URL}/auth/register`,
  LOGOUT: `${CONFIG.API_URL}/auth/logout`,

  // USER
  DETAIL_USER: `${CONFIG.API_URL}/users`,

  // COMMENT DONASI
  CREATE_COMMENT: `${CONFIG.API_URL}/comments`,
  GET_COMMENT_DONASI: (id) => `${CONFIG.API_URL}/comments/posts/${id}`,

  
};

export default API_ENDPOINT;
