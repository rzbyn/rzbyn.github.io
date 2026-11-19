import { cn } from '@shared/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, JSX } from 'react';

// Headings stand apart by width and weight, not size: wide Archivo at 17px.
export const headingVariants = cva('', {
  variants: {
    variant: {
      display: 'stretch-wide text-[17px] leading-snug font-[650] text-balance',
    },
  },
  defaultVariants: {
    variant: 'display',
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
