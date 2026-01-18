import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from "./components/Counter";

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
      <Counter />
      <Footer />
    </>
  );
}

export default App;
