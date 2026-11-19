import { cn } from '@shared/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import type { AnchorHTMLAttributes, JSX } from 'react';

// Focus ring comes from the global :focus-visible rule in globals.css.
export const textLinkVariants = cva('', {
  variants: {
    tone: {
      accent: 'text-accent',
      inherit: '',
      'hover-accent': 'hover:text-accent',
    },
    underline: {
      always: 'underline',
      hover: 'hover:underline',
      none: '',
    },
  },
  defaultVariants: {
    tone: 'accent',
    underline: 'always',
  },
});

type TextLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  VariantProps<typeof textLinkVariants> & {
    href: string;
    /** Open in a new tab (announced to screen readers) with rel="noopener" and a strict referrer policy */
    external?: boolean;
  };

function TextLink({
  href,
  external = false,
  tone,
  underline,
  className,
  children,
  ...props
}: TextLinkProps): JSX.Element {
  const classes = cn(textLinkVariants({ tone, underline }), className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        referrerPolicy="strict-origin-when-cross-origin"
        className={classes}
        {...props}
      >
        {children}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

export default TextLink;
