import type { JSX } from 'react';
import PostItem, { type PostItemProps } from '../PostItem';

interface PostListProps {
  posts: Array<{ id: string | number } & PostItemProps>;
  /** Text shown when there are no posts */
  emptyMessage: string;
}

function PostList({ posts, emptyMessage }: PostListProps): JSX.Element {
  if (!posts || posts.length === 0 || !Array.isArray(posts))
    return <p>{emptyMessage}</p>;

  return (
    // role="list": Safari drops list semantics under list-style:none
    <ol role="list" className="max-w-content divide-y divide-rule md:-mt-3">
      {posts.map((post): JSX.Element => {
        return (
          <PostItem
            key={post.id}
            title={post.title}
            date={post.date}
            fullpath={post.fullpath}
          />
        );
      })}
    </ol>
  );
}

export default PostList;
