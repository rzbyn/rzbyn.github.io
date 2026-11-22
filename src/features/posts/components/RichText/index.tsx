import type { RichTextItemResponse } from '@notionhq/client';
import { Fragment, type JSX, type ReactNode } from 'react';
import { splitLines } from '../../lib/split-lines';

interface RichTextProps {
  text: RichTextItemResponse[];
}

function renderItem(item: RichTextItemResponse): ReactNode {
  const { bold, italic, strikethrough, underline, code } = item.annotations;
  // Soft line breaks would collapse to spaces in HTML; keep them as <br />.
  let node: ReactNode = splitLines(item.plain_text).map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
  if (code) node = <code>{node}</code>;
  if (bold) node = <strong>{node}</strong>;
  if (italic) node = <em>{node}</em>;
  if (strikethrough) node = <s>{node}</s>;
  if (underline) node = <u>{node}</u>;
  // Raw anchor: .prose a:not([class]) styles it. Same tab, by design.
  if (item.href) node = <a href={item.href}>{node}</a>;
  return node;
}

/** Notion rich text with its inline formatting. Notion colors are ignored. */
function RichText({ text }: RichTextProps): JSX.Element {
  return (
    <>
      {text.map((item, i) => (
        <Fragment key={i}>{renderItem(item)}</Fragment>
      ))}
    </>
  );
}

export default RichText;
