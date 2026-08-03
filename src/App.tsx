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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}