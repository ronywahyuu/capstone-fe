import CONFIG from "./config";

const API_ENDPOINT = {
  // ==================== DONASI ====================
  ALL_DONASI: `${CONFIG.API_URL}/posts`,
  ALL_MY_DONASI: (id) => `${CONFIG.API_URL}/posts/?userId=${id}`,
  CREATE_DONASI: `${CONFIG.API_URL}/posts`,
  SINGLE_DONASI: (id) => `${CONFIG.API_URL}/${id}`, // <=== DETAIL, UPDATE, DELETE
  // COMMENT DONASI
  CREATE_COMMENT: `${CONFIG.API_URL}/comments`,
  GET_COMMENT_DONASI: (id) => `${CONFIG.API_URL}/comments/posts/${id}`,

  // ==================== USER ====================
  LOGIN: `${CONFIG.API_URL}/users/login`,
  REGISTER: `${CONFIG.API_URL}/auth/register`,
  LOGOUT: `${CONFIG.API_URL}/users/signout`,
  DETAIL_USER: (id) => `${CONFIG.API_URL}/users/${id}`,

  // ==================== BLOG ====================
  ALL_BLOG: `${CONFIG.API_URL}/blogs`,
  ALL_MY_BLOG: (id) => `${CONFIG.API_URL}/blogs/?userId=${id}`,
  SINGLE_BLOG: (id) => `${CONFIG.API_URL}/blogs/${id}`,
  CREATE_BLOG: `${CONFIG.API_URL}/blogs`,
};

export default API_ENDPOINT;
