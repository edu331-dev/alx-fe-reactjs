import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  
  return (
    <div>
      <h3>Viewing Blog Post ID: {postId}</h3>
      <p>This content is dynamically loaded based on the URL parameter.</p>
    </div>
  );
};

export default BlogPost;