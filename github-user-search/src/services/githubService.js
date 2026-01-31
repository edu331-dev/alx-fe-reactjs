import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch GitHub user data by username
 * @param {string} username
 * @returns {Promise<Object>}
 */
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};
