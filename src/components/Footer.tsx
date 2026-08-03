import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from 'figma:asset/b1faa4031595f1461db9b2a05d08177da0e5c2ec.png';
import { ORGANISATION } from '../data/organisation';

export function Footer() {
  /**
   * Legal identity items for the bottom bar. Each entry is omitted entirely
   * until the real value exists in src/data/organisation.ts — a missing KvK is
   * a gap, but an invented one is a false statement about a legal record.
   */
  const legalIdentity = [
    ORGANISATION.legalForm,
    ORGANISATION.kvk && `KvK ${ORGANISATION.kvk}`,
    ORGANISATION.rsin && `RSIN ${ORGANISATION.rsin}`,
  ].filter(Boolean) as string[];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Identity */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src={logo}
                alt="CDD Pays-Bas"
                className="h-14 w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              An international business and leadership platform connecting decision-makers,
              entrepreneurs, investors, and senior experts across Europe, Morocco, and Africa.
            </p>
          </div>

          {/* Organisation */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Organisation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-300 hover:text-white transition-colors">
                  Governance &amp; Board
                </Link>
              </li>
              <li>
                <Link to="/advisors" className="text-gray-300 hover:text-white transition-colors">
                  Advisory Council
                </Link>
              </li>
              <li>
                <Link
                  to="/transparency"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Engage */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Engage
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/focus-areas"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/partnerships"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300">
                  {ORGANISATION.registeredAddress || ORGANISATION.country}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <a
                  href={`mailto:${ORGANISATION.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {ORGANISATION.email}
                </a>
              </li>
              {ORGANISATION.phone && (
                <li className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                  <a
                    href={`tel:${ORGANISATION.phone.replace(/\s/g, '')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {ORGANISATION.phone}
                  </a>
                </li>
              )}
              <li className="flex items-start space-x-3">
                <Linkedin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <a
                  href={ORGANISATION.linkedin}
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-gray-700 pt-8 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-gray-400">
            <span className="text-gray-300">{ORGANISATION.fullName}</span>
            {legalIdentity.map((item) => (
              <span key={item} className="flex items-center gap-3">
                <span aria-hidden="true">·</span>
                <span>{item}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy
            </Link>
            <span className="text-gray-500" aria-hidden="true">
              ·
            </span>
            <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
              Cookies
            </Link>
            <span className="text-gray-500" aria-hidden="true">
              ·
            </span>
            <Link to="/accessibility" className="text-gray-300 hover:text-white transition-colors">
              Accessibility
            </Link>
            <span className="text-gray-500" aria-hidden="true">
              ·
            </span>
            <Link to="/transparency" className="text-gray-300 hover:text-white transition-colors">
              Transparency
            </Link>
          </div>

          <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} {ORGANISATION.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
