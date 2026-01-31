import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch GitHub users based on advanced search
 * @param {string} username - GitHub username or keyword
 * @param {string} location - Filter by location
 * @param {number} minRepos - Minimum number of repositories
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>}
 */
export const fetchUserData = async (username, location, minRepos, page = 1) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: {
      q: query,
      page,
      per_page: 10,
    },
  });

  return response.data; // returns { total_count, items: [...] }
};
