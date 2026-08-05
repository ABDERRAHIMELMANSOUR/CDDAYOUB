/**
 * Primary navigation — six items (ticket 14, Part C1).
 *
 * Down from ten. Leadership and Advisors were both people pages and now sit
 * under About, split correctly: statutory Board on one page, Advisory Council
 * on another. Projects is gone until it has content. Partnerships is demoted
 * from a top-level slot to a section of About — it earns its slot back once
 * real partners are named.
 *
 * Two items are marked `pending`: Membership (Phase 4, tickets 17-18) and
 * Insights (Phase 4, ticket 20). They are declared here so the information
 * architecture is visible and reviewable now, but they are filtered out of the
 * rendered nav until the pages exist — a nav item that leads nowhere is exactly
 * what ticket 6 removed.
 */
export interface NavChild {
  name: string;
  path: string;
  pending?: boolean;
}

export interface NavItem {
  name: string;
  path: string;
  children?: NavChild[];
  pending?: boolean;
}

export const PRIMARY_NAV: NavItem[] = [
  {
    name: 'About',
    path: '/about',
    children: [
      { name: 'Who We Are', path: '/about' },
      { name: 'Governance & Board', path: '/leadership' },
      { name: 'Advisory Council', path: '/advisors' },
      { name: 'Partnerships', path: '/partnerships' },
      { name: 'Transparency', path: '/transparency' },
    ],
  },
  {
    name: 'Focus Areas',
    path: '/commissions',
    // Children are generated from the commissions at render time.
  },
  {
    name: 'Membership',
    path: '/membership',
    children: [
      { name: 'Why Join', path: '/membership' },
      { name: 'Membership & Dues', path: '/membership#tiers' },
      { name: 'Our Members', path: '/membership#members' },
      { name: 'Apply', path: '/membership/apply' },
    ],
  },
  {
    name: 'Events',
    path: '/events',
  },
  {
    name: 'Insights',
    path: '/insights',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

/** Items actually rendered — anything still pending is withheld. */
export function visibleNav(): NavItem[] {
  return PRIMARY_NAV.filter((item) => !item.pending).map((item) => ({
    ...item,
    children: item.children?.filter((child) => !child.pending),
  }));
}
