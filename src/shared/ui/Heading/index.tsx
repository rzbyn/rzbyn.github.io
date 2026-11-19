import { cn } from '@shared/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, JSX } from 'react';

export const headingVariants = cva('', {
  variants: {
    variant: {
      page: 'pb-3 uppercase font-bold tracking-wide',
      item: 'text-base font-bold',
    },
  },
  defaultVariants: {
    variant: 'page',
  },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: 'h1' | 'h2';
  };

function Heading({
  as: Tag = 'h1',
  variant,
  className,
  ...props
}: HeadingProps): JSX.Element {
  return (
    <Tag className={cn(headingVariants({ variant }), className)} {...props} />
  );
}

export default Heading;
