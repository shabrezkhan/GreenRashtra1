
import { ServiceItem, StatItem, NavLink } from './types';

export const COLORS = {
  primary: '#2d5a27',
  secondary: '#1e3a1d',
  accent: '#a8d5ba',
  light: '#f0fdf4',
};

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Impact', href: '#impact' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'it-recycling',
    title: 'IT Asset Recycling',
    description: 'Safe and compliant recycling of laptops, desktops, servers, and networking equipment.',
    icon: 'fa-laptop-code',
  },
  {
    id: 'data-destruction',
    title: 'Secure Data Destruction',
    description: 'Certified shredding and erasure of hard drives and sensitive storage media.',
    icon: 'fa-shield-halved',
  },
  {
    id: 'epr-compliance',
    title: 'EPR Fulfillment',
    description: 'Assisting producers and manufacturers in meeting their Extended Producer Responsibility targets.',
    icon: 'fa-file-signature',
  },
  {
    id: 'collection',
    title: 'Doorstep Collection',
    description: 'Hassle-free e-waste pickup from residential and corporate premises across the nation.',
    icon: 'fa-truck-pickup',
  },
];

export const STATS: StatItem[] = [
  { label: 'E-Waste Recycled', value: '500', suffix: 'Tons+', icon: 'fa-recycle' },
  { label: 'Corporate Clients', value: '250', suffix: '+', icon: 'fa-building' },
  { label: 'Happy Families', value: '10', suffix: 'k+', icon: 'fa-users' },
  { label: 'CO2 Saved', value: '1.2', suffix: 'm Kg', icon: 'fa-leaf' },
];
