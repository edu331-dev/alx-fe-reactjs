import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username, location = "", minRepos = 0, page = 1) => {
  let query = username;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `${GITHUB_API_URL}${query}&page=${page}&per_page=10`;

  const response = await axios.get(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  return response.data;
};
