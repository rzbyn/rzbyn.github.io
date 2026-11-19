import { cn } from '@shared/lib/cn';
import type { HTMLAttributes, JSX } from 'react';

// Headings stand apart by width and weight, not size: wide Archivo at 17px.
// One look for now; bring back cva variants when a second one appears.
const HEADING_CLASS =
  'stretch-wide text-[17px] leading-snug font-[650] text-balance';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2';
};

function Heading({
  as: Tag = 'h1',
  className,
  ...props
}: HeadingProps): JSX.Element {
  return <Tag className={cn(HEADING_CLASS, className)} {...props} />;
}

export default Heading;
