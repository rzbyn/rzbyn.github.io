const ICONS_PATH = '/assets/icons/';

export interface SocialItem {
  /** Link */
  href: string;
  /** Image source */
  src: string;
  /** Image alt text */
  alt: string;
  /** Dimensions used to preserve the image aspect ratio */
  width: number;
  height: number;
}

export interface SocialItems extends Array<SocialItem> {}

export const socialItems: SocialItems = [
  {
    href: 'mailto:hi@rzbyn.com',
    src: `${ICONS_PATH}email.svg`,
    alt: 'email',
    width: 24,
    height: 24,
  },
  {
    href: 'https://www.github.com/rzbyn',
    src: `${ICONS_PATH}github.svg`,
    alt: 'github',
    width: 122,
    height: 120,
  },
  {
    href: 'https://www.linkedin.com/in/rezabayuni',
    src: `${ICONS_PATH}linkedin.svg`,
    alt: 'linkedin',
    width: 840,
    height: 779,
  },
];
