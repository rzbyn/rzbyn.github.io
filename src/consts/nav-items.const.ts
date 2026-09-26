export interface NavItem {
  /** Text to display */
  text: string;
  /** Full path to the page */
  fullpath: string;
  /** Path to the page */
  path: string;
}

export interface NavItems extends Array<NavItem> {}

export const navItems: NavItems = [
  {
    text: 'About',
    fullpath: '/',
    path: '',
  },
  {
    text: 'Writing',
    fullpath: '/writing',
    path: 'writing',
  },
  {
    text: 'Misc',
    fullpath: '/misc',
    path: 'misc',
  },
];
