import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import logo from 'figma:asset/b1faa4031595f1461db9b2a05d08177da0e5c2ec.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img src={logo} alt="CDD Pays-Bas" className="h-14 w-auto brightness-0 invert opacity-90" />
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              An international business and leadership platform connecting decision-makers, entrepreneurs, 
              investors, and senior experts across Europe, Morocco, and Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/leadership" className="text-gray-400 hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/advisors" className="text-gray-400 hover:text-white transition-colors">Advisors</Link></li>
              <li><Link to="/focus-areas" className="text-gray-400 hover:text-white transition-colors">Focus Areas</Link></li>
              <li><Link to="/partnerships" className="text-gray-400 hover:text-white transition-colors">Partnerships</Link></li>
              {/* Events and Contact were missing, so header and footer disagreed
                  about what the site contains. */}
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Connect</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <span className="text-gray-400">The Netherlands</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <a href="mailto:contact@cddpaysbas.nl" className="text-gray-400 hover:text-white transition-colors">
                  contact@cddpaysbas.nl
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Linkedin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <a
                 href="https://www.linkedin.com/company/club-des-dirigeants-%E2%80%93-cdd-les-pays-bas/?viewAsMember=true" 
                 className="text-gray-400 hover:text-white transition-colors"
                 target="_blank"
                 >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CDD Pays-Bas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}