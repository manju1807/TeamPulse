import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};

export const users: User[] = [
  {
    id: 1,
    name: 'Emily Chen',
    company: 'Google',
    role: 'AI Research Scientist',
    verified: true,
    status: 'Active'
  },
  {
    id: 2,
    name: 'Aiden Patel',
    company: 'Amazon',
    role: 'Cloud Architect',
    verified: false,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    company: 'Apple',
    role: 'iOS Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: `Liam O'Connor`,
    company: 'Microsoft',
    role: 'Cybersecurity Specialist',
    verified: true,
    status: 'Active'
  },
  {
    id: 5,
    name: 'Zoe Kim',
    company: 'Tesla',
    role: 'Robotics Engineer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 6,
    name: 'Marcus Johnson',
    company: 'Facebook',
    role: 'VR Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Ava Nguyen',
    company: 'Netflix',
    role: 'Data Scientist',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Ethan Baker',
    company: 'Uber',
    role: 'Mobile App Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Isabella Morales',
    company: 'SpaceX',
    role: 'Aerospace Engineer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Noah Singh',
    company: 'Adobe',
    role: 'UX/UI Designer',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number;
  latitude?: number;
  job: string;
  profile_picture?: string | null;
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/dashboard/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Employee',
    href: '/dashboard/employee',
    icon: 'employee',
    label: 'employee'
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Kanban',
    href: '/dashboard/kanban',
    icon: 'kanban',
    label: 'kanban'
  },
  {
    title: 'Logout',
    href: '/',
    icon: 'logout',
    label: 'logout'
  }
];
