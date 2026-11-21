import type { JSX, SVGProps } from 'react';

/**
 * Signature motif: saik galamai, the diamond from Minangkabau Rumah Gadang
 * carvings (a slice of galamai), with a smaller diamond knocked out. Marks
 * the current page in the nav and ends each post. Decorative; swap the path
 * to change the motif (and the mask in `.prose hr` in globals.css).
 */
function Signature(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width={12}
      height={12}
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6 0 12 6 6 12 0 6Z M6 3.4 8.6 6 6 8.6 3.4 6Z"
      />
    </svg>
  );
}

export default Signature;
