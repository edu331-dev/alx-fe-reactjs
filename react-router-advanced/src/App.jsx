import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <button onClick={() => {
      localStorage.setItem('auth', 'true');
      window.location.reload();
    }}>Login</button>
    <button onClick={() => {
      localStorage.removeItem('auth');
      window.location.reload();
    }}>Logout</button>
  </div>
);

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f4f4f4', marginBottom: '20px' }}>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile (Protected)</Link> | 
        <Link to="/blog/1">Blog Post 1</Link> | 
        <Link to="/blog/2">Blog Post 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Dynamic routing for blog posts using :id */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected route implementation */}
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