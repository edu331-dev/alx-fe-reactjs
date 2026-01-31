import { useState } from 'react';
import { searchGithubUsers } from '../services/githubService';

export default function Search() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPage(1);

    try {
      const data = await searchGithubUsers({
        query,
        location,
        minRepos,
        page: 1,
      });
      setUsers(data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await searchGithubUsers({
        query,
        location,
        minRepos,
        page: nextPage,
      });
      setUsers((prev) => [...prev, ...(data.items || [])]);
      setPage(nextPage);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="bg-white dark:bg-gray-900 shadow rounded-lg p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Advanced GitHub User Search
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Username or keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
          />

          <input
            type="text"
            placeholder="Location (e.g. Kenya)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
          />

          <input
            type="number"
            placeholder="Min repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {error && (
        <p className="text-red-500 mt-4 text-center">{error}</p>
      )}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded"
          >
            <div className="flex items-center gap-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {user.login}
                </p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}
