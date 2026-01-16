import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile
        name="John Doe"
        age={28}
        bio="A passionate traveler and software developer."
      />
      <Footer />
    </>
  );
}

export default App;
