import { cn } from '@shared/lib/cn';
import type { HTMLAttributes, JSX } from 'react';

/** Long-form text: Literata at reading size. Styles live in globals.css (.prose). */
function Prose({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={cn('prose', className)} {...props} />;
}

export default Prose;
