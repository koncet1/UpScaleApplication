import Header from './components/Header'; 
import PrimarySection from './components/PrimarySection';
import FeaturesSection from './components/FeaturesSection';
import CommunitySection from './components/CommunitySection';
import InstallationSection from './components/InstallationSection';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
    <div className="app-wrapper">
      <Header />
      <main> 
        <PrimarySection />
        <FeaturesSection />
        <InstallationSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App
