import { Routes, Route, Link } from 'react-router-dom';

// Define the child components within the same file or import them
const ProfileDetails = () => <div>Detailed User Info Content</div>;
const ProfileSettings = () => <div>User Account Settings Content</div>;

const Profile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details">View Details</Link> | 
        <Link to="settings">View Settings</Link>
      </nav>
      <hr />

      {/* Internal Routes for nested paths */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;