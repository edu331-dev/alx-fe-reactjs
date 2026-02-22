import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
// Import the BlogPost component
import BlogPost from './components/BlogPost';

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <button onClick={() => localStorage.setItem('auth', 'true')}>Login</button>
    <button onClick={() => localStorage.removeItem('auth')}>Logout</button>
  </div>
);

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile</Link> | 
        {/* Link using a dynamic ID */}
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Add the dynamic route for blog posts using :id */}
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route 
          path="/profile/*" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;