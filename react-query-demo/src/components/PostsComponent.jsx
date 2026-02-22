import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts', 
    fetchPosts,
    {
      // How long the data remains in the cache after being unused (5 minutes)
      cacheTime: 300000,
      // Refetch data every time the window regains focus
      refetchOnWindowFocus: true,
      // Prevents the UI from flickering by keeping old data while fetching new data
      keepPreviousData: true,
      // Data is considered fresh for 1 minute
      staleTime: 60000,
    }
  );

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: '20px' }}>
        Refetch Posts
      </button>
      
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;