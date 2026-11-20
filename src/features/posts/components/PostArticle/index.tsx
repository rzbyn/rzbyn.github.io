import Heading from '@shared/ui/Heading';
import Prose from '@shared/ui/Prose';
import type { JSX } from 'react';
import { formatPostDate } from '../../lib/format-post-date';
import type { PostDetail } from '../../types';
import NotionBlocks from '../NotionBlocks';

interface PostArticleProps {
  detail: PostDetail;
}

/** A full post: title as the page h1, publish date, then the Notion body. */
function PostArticle({ detail }: PostArticleProps): JSX.Element {
  const { post, blocks, headings } = detail;

  return (
    <article className="max-w-content">
      <header className="mb-8 flex flex-col gap-1">
        <Heading>{post.title}</Heading>
        <time
          dateTime={post.date.toISOString().slice(0, 10)}
          className="text-sm text-muted tabular-nums"
        >
          {formatPostDate(post.date)}
        </time>
      </header>
      <Prose>
        <NotionBlocks blocks={blocks} headings={headings} />
      </Prose>
    </article>
  );
}

export default PostArticle;
