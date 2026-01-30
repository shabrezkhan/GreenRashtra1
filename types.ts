
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix: string;
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
