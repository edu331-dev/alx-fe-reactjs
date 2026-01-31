const BASE_URL = 'https://api.github.com/search/users';

export async function searchGithubUsers({
  query,
  location,
  minRepos,
  page = 1,
  perPage = 10,
}) {
  let searchQuery = query;

  if (location) {
    searchQuery += ` location:${location}`;
  }

  if (minRepos) {
    searchQuery += ` repos:>=${minRepos}`;
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(
    searchQuery
  )}&page=${page}&per_page=${perPage}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub users');
  }

  const data = await response.json();
  return data;
}
