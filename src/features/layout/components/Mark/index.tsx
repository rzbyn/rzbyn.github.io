import type { JSX, SVGProps } from 'react';

/**
 * Site mark: a rounded square with a pixel "R" (5 rows by 4 columns of 4-unit cells) knocked out.
 * Decorative; the wordmark next to it carries the name. Swap the path to
 * change the logo.
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
        d="M6 0h20a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6Z M8 6h12v4h-8v4h8v4h-8v8H8Z M20 10h4v4h-4Z M16 18h4v4h-4Z M20 22h4v4h-4Z"
      />
    </svg>
  );
}

export default Mark;
