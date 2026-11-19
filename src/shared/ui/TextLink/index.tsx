import { cn } from '@shared/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import type { AnchorHTMLAttributes, JSX } from 'react';

export const textLinkVariants = cva(
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
  {
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
  },
);

type TextLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  VariantProps<typeof textLinkVariants> & {
    href: string;
    /** Open in a new tab with rel="noopener" and a strict referrer policy */
    external?: boolean;
  };

function TextLink({
  href,
  external = false,
  tone,
  underline,
  className,
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
      />
    );
  }

  return <Link href={href} className={classes} {...props} />;
}

export default TextLink;
