import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Blog Post Viewer</h2>
      <p>Displaying content for post ID: <strong>{id}</strong></p>
    </div>
  );
};

export default BlogPost;