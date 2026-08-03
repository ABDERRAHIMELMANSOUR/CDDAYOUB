import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Leadership } from './components/pages/Leadership';
import { Advisors } from './components/pages/Advisors';
import { FocusAreas } from './components/pages/FocusAreas';
import { Partnerships } from './components/pages/Partnerships';
import { Projects } from './components/pages/Projects';
import { Events } from './components/pages/Events';
import { Contact } from './components/pages/Contact';
import { Privacy } from './components/pages/legal/Privacy';
import { Cookies } from './components/pages/legal/Cookies';
import { Accessibility } from './components/pages/legal/Accessibility';
import { Transparency } from './components/pages/legal/Transparency';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Lets keyboard users bypass the navigation (WCAG 2.4.1). */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/advisors" element={<Advisors />} />
            <Route path="/focus-areas" element={<FocusAreas />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            {/* Trust layer — legal and transparency pages */}
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}