import type { RichTextItemResponse } from '@notionhq/client';
import Link from 'next/link';
import { Fragment, type JSX, type ReactNode } from 'react';
import { SITE_URL } from '@shared/consts/site-metadata.const';
import { linkTarget } from '../../lib/link-target';
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
  if (item.href) node = renderLink(item.href, node);
  return node;
}

// No classes, so .prose a:not([class]) styles every variant. Same tab, by
// design. Off-site links get the same rel and referrer policy as TextLink
// external; on-site links use next/link like TextLink internal.
function renderLink(href: string, children: ReactNode): ReactNode {
  const target = linkTarget(href, SITE_URL);
  if (target.kind === 'internal') {
    return <Link href={target.href}>{children}</Link>;
  }
  if (target.kind === 'external') {
    return (
      <a
        href={href}
        rel="noopener"
        referrerPolicy="strict-origin-when-cross-origin"
      >
        {children}
      </a>
    );
  }
  return <a href={href}>{children}</a>;
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
