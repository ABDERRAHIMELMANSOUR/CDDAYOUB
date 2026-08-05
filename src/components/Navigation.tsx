import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import logo from 'figma:asset/b1faa4031595f1461db9b2a05d08177da0e5c2ec.png';
import { visibleNav, type NavItem } from '../lib/navigation';
import { COMMISSIONS } from '../data/commissions';
import { useLocale, useTranslation } from '../i18n/LocaleProvider';
import { LocaleLink } from '../i18n/LocaleLink';
import { LocaleSwitcher } from '../i18n/LocaleSwitcher';
import { localisePath } from '../i18n/config';
import { pick } from '../i18n/localised';
import { SMART_PLATFORM, buildLoginUrl, isPlatformLive } from '../lib/smartPlatform';

/**
 * Primary navigation — six items with grouped dropdowns (ticket 14).
 *
 * Commissions builds its children from the commission list, so adding or
 * retiring a commission updates the menu automatically.
 */
export function Navigation() {
  const location = useLocation();
  const t = useTranslation();
  const { locale, canonicalPath } = useLocale();
  const loginUrl = buildLoginUrl(SMART_PLATFORM);
  const loginLive = isPlatformLive(SMART_PLATFORM);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const NAV_LABELS: Record<string, string> = {
    '/about': t.nav.about,
    '/commissions': t.nav.commissions,
    '/membership': t.nav.membership,
    '/events': t.nav.events,
    '/insights': t.nav.insights,
    '/contact': t.nav.contact,
  };
  const CHILD_LABELS: Record<string, string> = {
    '/about': t.nav.whoWeAre,
    '/leadership': t.nav.governanceBoard,
    '/advisors': t.nav.advisoryCouncil,
    '/partnerships': t.nav.partnerships,
    '/transparency': t.nav.transparency,
    '/membership': t.nav.whyJoin,
    '/membership#tiers': t.nav.tiersAndDues,
    '/membership#members': t.nav.ourMembers,
    '/membership/apply': t.nav.apply,
  };

  const navItems: NavItem[] = visibleNav()
    .map((item) => ({
      ...item,
      name: NAV_LABELS[item.path] ?? item.name,
      children: item.children?.map((c) => ({ ...c, name: CHILD_LABELS[c.path] ?? c.name })),
    }))
    .map((item) =>
    item.path === '/commissions'
      ? {
          ...item,
          children: [
            { name: t.nav.allCommissions, path: '/commissions' },
            ...COMMISSIONS.map((c) => ({
              name: pick(c.title, locale),
              path: `/commissions/${c.slug}`,
            })),
          ],
        }
      : item
  );

  // Close menus on navigation.
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  // Close the dropdown on outside click or Escape (keyboard accessibility).
  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenGroup(null);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenGroup(null);
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const isActive = (item: NavItem) => {
    if (canonicalPath === item.path) return true;
    if (item.path !== '/' && canonicalPath.startsWith(`${item.path}/`)) return true;
    return item.children?.some((c) => canonicalPath === c.path) ?? false;
  };

  return (
    <nav
      ref={navRef}
      className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <LocaleLink to="/" className="flex items-center" aria-label="CDD Pays-Bas">
            <img src={logo} alt="CDD Pays-Bas" className="h-16 w-auto" />
          </LocaleLink>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = isActive(item);
              const hasChildren = Boolean(item.children?.length);

              if (!hasChildren) {
                return (
                  <LocaleLink
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/30'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </LocaleLink>
                );
              }

              const expanded = openGroup === item.path;
              return (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(item.path)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    onClick={() => setOpenGroup(expanded ? null : item.path)}
                    className={`inline-flex items-center gap-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/30'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  {expanded && (
                    <div className="absolute left-0 top-full pt-2 w-64">
                      <ul className="bg-white rounded-2xl border border-gray-100 shadow-xl py-2 overflow-hidden">
                        {item.children!.map((child) => (
                          <li key={child.path}>
                            <LocaleLink
                              to={child.path}
                              className={`block px-5 py-2.5 text-sm transition-colors ${
                                canonicalPath === child.path
                                  ? 'text-blue-700 font-semibold bg-blue-50'
                                  : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                              }`}
                            >
                              {child.name}
                            </LocaleLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Member Login — right-aligned, where a member area belongs. */}
            <LocaleSwitcher className="ml-3" />

            <div className="pl-3 ml-2 border-l border-gray-200">
              {loginLive && loginUrl ? (
                <a
                  href={loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  {t.nav.memberLogin}
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 cursor-not-allowed"
                  title={t.nav.memberLoginPending}
                >
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  {t.nav.memberLogin}
                </span>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            {navItems.map((item) => {
              const expanded = openGroup === item.path;
              return (
                <div key={item.path} className="mb-1">
                  <div className="flex items-center">
                    <LocaleLink
                      to={item.path}
                      className={`flex-grow px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive(item)
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </LocaleLink>
                    {item.children?.length ? (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.name}`}
                        onClick={() => setOpenGroup(expanded ? null : item.path)}
                        className="p-3 text-gray-600 hover:text-gray-900"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    ) : null}
                  </div>

                  {expanded && item.children?.length ? (
                    <ul className="pl-4 py-1">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <LocaleLink
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-700"
                          >
                            {child.name}
                          </LocaleLink>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              <LocaleSwitcher />
              {loginLive && loginUrl ? (
                <a
                  href={loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-blue-600 text-blue-700"
                >
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  {t.nav.memberLogin}
                </a>
              ) : (
                <span className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-gray-200 text-gray-600">
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  {t.nav.memberLogin}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
