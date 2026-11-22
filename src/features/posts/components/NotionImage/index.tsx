import type { JSX } from 'react';
import type { PostBlock } from '../../types';
import RichText from '../RichText';

type ImageBlock = Extract<PostBlock, { type: 'image' }>;

interface NotionImageProps {
  block: ImageBlock;
}

/**
 * A post image from its local copy. With a caption, the visible figcaption is
 * its only description (alt="" avoids reading it twice); without one, the
 * image is decorative.
 */
function NotionImage({ block }: NotionImageProps): JSX.Element {
  const { asset } = block;
  // getPost downloads every image first; a missing copy is a bug, not a skip.
  if (!asset) throw new Error(`Image block ${block.id} has no local copy`);
  const caption = block.image.caption;

  return (
    <figure>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export serves the downloaded file as is */}
      <img
        src={asset.src}
        width={asset.width}
        height={asset.height}
        alt=""
        loading="lazy"
        decoding="async"
      />
      {caption.length > 0 && (
        <figcaption>
          <RichText text={caption} />
        </figcaption>
      )}
    </figure>
  );
}

export default NotionImage;
