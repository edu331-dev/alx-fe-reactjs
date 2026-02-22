import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
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
        <Link to="/profile">Profile (Protected)</Link> | 
        <Link to="/blog/123">Blog Post 123</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Dynamic Route */}
        <Route path="/blog/:postId" element={<BlogPost />} />

        {/* Protected and Nested Routes */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<div>Detailed User Info</div>} />
          <Route path="settings" element={<div>User Account Settings</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;