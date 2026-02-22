import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Extract the id from the URL parameters
  const { id } = useParams();
  
  return (
    <div>
      <h2>Blog Post</h2>
      <p>Now displaying content for post ID: {id}</p>
    </div>
  );
};

export default BlogPost;