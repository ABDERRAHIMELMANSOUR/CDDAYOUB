import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Leadership } from './components/pages/Leadership';
import { Advisors } from './components/pages/Advisors';
import { FocusAreas } from './components/pages/FocusAreas';
import { CommissionPage } from './components/pages/CommissionPage';
import { Partnerships } from './components/pages/Partnerships';
import { Projects } from './components/pages/Projects';
import { Events } from './components/pages/Events';
import { Contact } from './components/pages/Contact';
import { Membership } from './components/pages/Membership';
import { MembershipApply } from './components/pages/MembershipApply';
import { Insights, InsightArticle } from './components/pages/Insights';
import { LocaleProvider } from './i18n/LocaleProvider';
import { LOCALES } from './i18n/config';
import { SkipLink } from './i18n/LocaleLink';
import { initAnalytics } from './lib/analytics';
import { Privacy } from './components/pages/legal/Privacy';
import { Cookies } from './components/pages/legal/Cookies';
import { Accessibility } from './components/pages/legal/Accessibility';
import { Transparency } from './components/pages/legal/Transparency';

/** Every route, mounted once at the root and once under each locale prefix. */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/advisors" element={<Advisors />} />
      <Route path="/focus-areas" element={<FocusAreas />} />
      <Route path="/focus-areas/:slug" element={<CommissionPage />} />
      <Route path="/partnerships" element={<Partnerships />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/events" element={<Events />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/membership/apply" element={<MembershipApply />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/insights/:slug" element={<InsightArticle />} />
      <Route path="/contact" element={<Contact />} />
      {/* Trust layer — legal and transparency pages */}
      <Route path="/transparency" element={<Transparency />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/accessibility" element={<Accessibility />} />
    </Routes>
  );
}

function Shell() {
  // Cookieless analytics — loads only when VITE_PLAUSIBLE_DOMAIN is configured.
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <LocaleProvider>
      <div className="min-h-screen flex flex-col">
        <SkipLink />
        <Navigation />
        <main id="main-content" className="flex-grow">
          <Routes>
            {/* Locale-prefixed routes (/nl/..., /fr/...) plus the unprefixed English site. */}
            {LOCALES.filter((l) => l !== 'en').map((locale) => (
              <Route key={locale} path={`/${locale}/*`} element={<AppRoutes />} />
            ))}
            <Route path="/*" element={<AppRoutes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}

export default function App() {
  return (
    <Router>
      <Shell />
    </Router>
  );
}
