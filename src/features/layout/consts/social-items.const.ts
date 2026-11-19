import type { ComponentType, SVGProps } from 'react';
import { EmailIcon, GitHubIcon, LinkedInIcon } from '../components/SocialIcons';

export interface SocialItem {
  /** Link */
  href: string;
  /** Visually hidden link name */
  label: string;
  /** Opens in a new tab */
  external: boolean;
  /** Decorative icon, drawn in currentColor */
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface SocialItems extends Array<SocialItem> {}

export const socialItems: SocialItems = [
  {
    href: 'mailto:hi@rzbyn.com',
    label: 'Email',
    external: false,
    Icon: EmailIcon,
  },
  {
    href: 'https://www.github.com/rzbyn',
    label: 'GitHub',
    external: true,
    Icon: GitHubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/rezabayuni',
    label: 'LinkedIn',
    external: true,
    Icon: LinkedInIcon,
  },
];
