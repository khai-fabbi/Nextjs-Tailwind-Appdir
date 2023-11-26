import {
  AgentIcon,
  DashboardIcon,
  MessageIcon,
  ProfileIcon,
  PropertyIcon,
  StarIcon,
} from '@/components/icons';

export const SIDE_BAR_LIST = [
  {
    title: 'Dashboard',
    href: '/',
    icon: <DashboardIcon />,
  },
  {
    title: 'Property',
    href: '/property',
    icon: <PropertyIcon />,
  },
  {
    title: 'Agent',
    href: '/components',
    icon: <AgentIcon />,
  },
  {
    title: 'Review',
    href: '/learn-react',
    icon: <StarIcon />,
  },
  {
    title: 'Message',
    href: '/message',
    icon: <MessageIcon />,
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: <ProfileIcon />,
  },
];
