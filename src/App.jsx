import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Socials from './components/Socials';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import OtherProjects from './components/OtherProjects';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Socials />
      <About />
      <Experience />
      <Work />
      <OtherProjects />
      <ContactSection />
      <Footer />
      
    </>
  );
}

export default App;
