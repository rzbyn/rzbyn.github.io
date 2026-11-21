import type { JSX, SVGProps } from 'react';

/**
 * Site mark: a rounded square with a saik galamai diamond cut out and a
 * pixel R inside it. The 16px favicon uses the plain diamond tile in
 * src/app/icon.svg. Decorative; the wordmark next to it carries the name.
 * Swap the path to change the logo.
 */
function Mark(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={32}
      height={32}
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6 0h20a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6Z M16 4.5 27.5 16 16 27.5 4.5 16Z M11 9.75h2.5v2.5h-2.5Z M13.5 9.75h2.5v2.5h-2.5Z M16 9.75h2.5v2.5h-2.5Z M11 12.25h2.5v2.5h-2.5Z M18.5 12.25h2.5v2.5h-2.5Z M11 14.75h2.5v2.5h-2.5Z M13.5 14.75h2.5v2.5h-2.5Z M16 14.75h2.5v2.5h-2.5Z M11 17.25h2.5v2.5h-2.5Z M16 17.25h2.5v2.5h-2.5Z M11 19.75h2.5v2.5h-2.5Z M18.5 19.75h2.5v2.5h-2.5Z"
      />
    </svg>
  );
}

export default Mark;
