import { Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CVPage from './components/CVPage';

function PortfolioPage({ isDark, toggleTheme }) {
  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  const [isDark, toggleTheme] = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <Routes>
        <Route
          path="/"
          element={<PortfolioPage isDark={isDark} toggleTheme={toggleTheme} />}
        />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </div>
  );
}

export default App;
