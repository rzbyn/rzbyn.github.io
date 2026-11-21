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
    text: 'Home',
    fullpath: '/',
    path: '',
  },
  {
    text: 'Log',
    fullpath: '/log',
    path: 'log',
  },
  {
    text: 'Etc',
    fullpath: '/etc',
    path: 'etc',
  },
];
