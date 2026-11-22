import type { JSX, ReactNode } from 'react';
import { groupListItems, type ListGroup } from '../../lib/group-list-items';
import type { HeadingTags } from '../../lib/heading-tags';
import type { SupportedBlockType } from '../../consts/supported-blocks.const';
import type { PostBlock } from '../../types';
import Callout from '../Callout';
import NotionImage from '../NotionImage';
import RichText from '../RichText';

interface RenderContext {
  /** Notion heading level → HTML tag for this post. */
  headings: HeadingTags;
}

interface NotionBlocksProps extends RenderContext {
  blocks: PostBlock[];
}

/** Nested blocks under a parent (indented paragraphs, toggleable headings, …). */
function Children({
  block,
  headings,
}: RenderContext & { block: PostBlock }): ReactNode {
  if (block.children.length === 0) return null;
  return <NotionBlocks blocks={block.children} headings={headings} />;
}

function List({
  group,
  headings,
}: RenderContext & { group: ListGroup<PostBlock> }): JSX.Element {
  const Tag = group.type === 'numbered_list' ? 'ol' : 'ul';
  return (
    <Tag>
      {group.items.map((item) => {
        const text =
          item.type === 'numbered_list_item'
            ? item.numbered_list_item.rich_text
            : item.type === 'bulleted_list_item'
              ? item.bulleted_list_item.rich_text
              : [];
        return (
          <li key={item.id}>
            <RichText text={text} />
            <Children block={item} headings={headings} />
          </li>
        );
      })}
    </Tag>
  );
}

function Block({
  block,
  headings,
}: RenderContext & { block: PostBlock }): ReactNode {
  const children = <Children block={block} headings={headings} />;

  switch (block.type) {
    case 'paragraph':
      return (
        <>
          {block.paragraph.rich_text.length > 0 && (
            <p>
              <RichText text={block.paragraph.rich_text} />
            </p>
          )}
          {children}
        </>
      );
    case 'heading_1':
    case 'heading_2':
    case 'heading_3': {
      const level = Number(block.type.slice(-1)) as 1 | 2 | 3;
      const content =
        block.type === 'heading_1'
          ? block.heading_1
          : block.type === 'heading_2'
            ? block.heading_2
            : block.heading_3;
      const Tag = headings[level] ?? 'h2';
      return (
        <>
          <Tag>
            <RichText text={content.rich_text} />
          </Tag>
          {children}
        </>
      );
    }
    case 'quote':
      return (
        <blockquote>
          <p>
            <RichText text={block.quote.rich_text} />
          </p>
          {children}
        </blockquote>
      );
    case 'callout':
      return <Callout block={block}>{children}</Callout>;
    case 'toggle':
      return (
        <details>
          <summary>
            <RichText text={block.toggle.rich_text} />
          </summary>
          <div className="mt-[1.1em] space-y-[1.1em]">{children}</div>
        </details>
      );
    case 'code':
      return (
        <pre data-language={block.code.language}>
          <code>{block.code.rich_text.map((t) => t.plain_text).join('')}</code>
        </pre>
      );
    case 'column_list':
      return (
        <div className="grid gap-6 md:auto-cols-fr md:grid-flow-col">
          {block.children.map((column) => (
            <div key={column.id} className="min-w-0 space-y-[1.1em]">
              <Children block={column} headings={headings} />
            </div>
          ))}
        </div>
      );
    case 'column':
      // Normally rendered by its column_list; a lone column just shows its content.
      return children;
    case 'bulleted_list_item':
    case 'numbered_list_item':
      // Normally grouped by NotionBlocks; a lone item is a one-item list.
      return (
        <List
          group={{
            type:
              block.type === 'numbered_list_item'
                ? 'numbered_list'
                : 'bulleted_list',
            id: block.id,
            items: [block],
          }}
          headings={headings}
        />
      );
    case 'image':
      return <NotionImage block={block} />;
    case 'divider':
      return <hr />;
    default: {
      // Compile error if a type in SUPPORTED_BLOCK_TYPES has no case above.
      const unhandled: Exclude<PostBlock['type'], SupportedBlockType> =
        block.type;
      // getPost rejects unsupported types first; reaching here is a bug.
      throw new Error(`No renderer for Notion block "${unhandled}"`);
    }
  }
}

/** Renders a Notion block tree inside Prose, grouping list items into lists. */
function NotionBlocks({ blocks, headings }: NotionBlocksProps): JSX.Element {
  return (
    <>
      {groupListItems(blocks).map((node) =>
        'items' in node ? (
          <List key={node.id} group={node} headings={headings} />
        ) : (
          <Block key={node.id} block={node} headings={headings} />
        ),
      )}
    </>
  );
}

export default NotionBlocks;
