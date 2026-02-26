const ICONS_PATH = '/assets/icons/';

export interface SocialItem {
  /** Link */
  href: string;
  /** Image source */
  src: string;
  /** Image alt text */
  alt: string;
}

export interface SocialItems extends Array<SocialItem> {}

export const socialItems: SocialItems = [
  {
    href: 'mailto:hi@rzbyn.com',
    src: ICONS_PATH + 'email.svg',
    alt: 'email logo',
  },
  {
    href: 'https://www.github.com/rzbyn',
    src: ICONS_PATH + 'github.svg',
    alt: 'github logo',
  },
  {
    href: 'https://www.linkedin.com/in/rezabayuni',
    src: ICONS_PATH + 'linkedin.svg',
    alt: 'linkedin logo',
  },
];
