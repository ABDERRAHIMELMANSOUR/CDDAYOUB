import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Leadership } from './components/pages/Leadership';
import { Advisors } from './components/pages/Advisors';
import { Commissions } from './components/pages/Commissions';
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
import { SkipLink, LocaleNavigate } from './i18n/LocaleLink';
import { initAnalytics } from './lib/analytics';
import { Privacy } from './components/pages/legal/Privacy';
import { Cookies } from './components/pages/legal/Cookies';
import { Accessibility } from './components/pages/legal/Accessibility';
import { Transparency } from './components/pages/legal/Transparency';

/**
 * Preserves BOTH the slug and the locale when redirecting an old
 * /focus-areas/:slug URL. A plain <Navigate to="/commissions/..."> is absolute
 * and would drop a Dutch or French visitor onto the English page.
 */
function LegacyCommissionRedirect() {
  const { slug } = useParams();
  return <LocaleNavigate to={`/commissions/${slug ?? ''}`} />;
}

/** Every route, mounted once at the root and once under each locale prefix. */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/advisors" element={<Advisors />} />
      <Route path="/commissions" element={<Commissions />} />
      <Route path="/commissions/:slug" element={<CommissionPage />} />
      {/*
        The site shipped these pages at /focus-areas. The board renamed them to
        Commissions in August 2026; these redirects keep existing links, search
        results and anything already printed on a card from 404ing.
      */}
      <Route path="/focus-areas" element={<LocaleNavigate to="/commissions" />} />
      <Route path="/focus-areas/:slug" element={<LegacyCommissionRedirect />} />
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
