const ICONS_PATH = '/assets/icons/';

export interface SocialItem {
  /** Link */
  href: string;
  /** Image source */
  src: string;
  /** Image alt text, used as the link's accessible name */
  alt: string;
  /** Opens in a new tab */
  external: boolean;
  /** Dimensions used to preserve the image aspect ratio */
  width: number;
  height: number;
}

export interface SocialItems extends Array<SocialItem> {}

export const socialItems: SocialItems = [
  {
    href: 'mailto:hi@rzbyn.com',
    src: `${ICONS_PATH}email.svg`,
    alt: 'Email',
    external: false,
    width: 24,
    height: 24,
  },
  {
    href: 'https://www.github.com/rzbyn',
    src: `${ICONS_PATH}github.svg`,
    alt: 'GitHub',
    external: true,
    width: 122,
    height: 120,
  },
  {
    href: 'https://www.linkedin.com/in/rezabayuni',
    src: `${ICONS_PATH}linkedin.svg`,
    alt: 'LinkedIn',
    external: true,
    width: 840,
    height: 779,
  },
];
