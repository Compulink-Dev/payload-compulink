// lib/navigation.ts
export interface NavLink {
    name: string;
    href: string;
    subLinks?: NavLink[];
  }
  
  export const NAV_LINKS: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { 
      name: 'Services', 
      href: '/services',
      subLinks: [
        { name: 'Hardware', href: '/services/hardware' },
        { name: 'Software', href: '/services/software' },
        { name: 'Networks', href: '/services/networks' },
        { name: 'Cyber Security', href: '/services/cyber-security' },
        { name: 'Cloud Computing', href: '/services/cloud-computing' },
        { name: 'Technical', href: '/services/technical' },
      ]
    },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Vacancy', href: '/vacancy' },
    { name: 'Contact', href: '/contact' },
  ];