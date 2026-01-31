import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    setPage(1);
    setUsers([]);
    await fetchUsers(1);
  };

  const fetchUsers = async (pageNumber) => {
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(username, location, minRepos, pageNumber);
      setUsers((prev) => [...prev, ...data.items]);
      setPage(pageNumber);
      setTotalCount(data.total_count);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <form
        onSubmit={handleSearch}
        className="bg-white p-6 rounded shadow space-y-4"
      >
        <input
          type="text"
          placeholder="GitHub username"
          className="w-full border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          className="w-full border p-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}

      {error && (
        <p className="mt-4 text-red-600">
          Looks like we can't find the user
        </p>
      )}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 border rounded bg-white"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <p>Type: {user.type}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && users.length < totalCount && !loading && (
        <button
          onClick={() => fetchUsers(page + 1)}
          className="mt-6 w-full bg-gray-200 p-2 rounded hover:bg-gray-300"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
