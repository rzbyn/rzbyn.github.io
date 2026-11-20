import type { JSX, ReactNode } from 'react';
import type { PostBlock } from '../../types';
import RichText from '../RichText';

type CalloutBlock = Extract<PostBlock, { type: 'callout' }>;

interface CalloutProps {
  block: CalloutBlock;
  /** Rendered nested blocks, if any. */
  children?: ReactNode;
}

/** A Notion callout as an aside; only emoji icons are shown, and hidden from screen readers. */
function Callout({ block, children }: CalloutProps): JSX.Element {
  const { icon, rich_text } = block.callout;

  return (
    <aside>
      {icon?.type === 'emoji' && <span aria-hidden="true">{icon.emoji}</span>}
      <div className="min-w-0 flex-1 space-y-[1.1em]">
        {rich_text.length > 0 && (
          <p>
            <RichText text={rich_text} />
          </p>
        )}
        {children}
      </div>
    </aside>
  );
}

export default Callout;
