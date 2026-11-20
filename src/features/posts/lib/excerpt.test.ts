import { equal, ok } from 'node:assert/strict';
import { test } from 'node:test';
import { excerpt } from './excerpt.ts';

test('short text is returned unchanged', () => {
  equal(excerpt('Short text.'), 'Short text.');
});

test('whitespace is collapsed and trimmed', () => {
  equal(excerpt('  a \n b  '), 'a b');
});

test('long text is cut at a word boundary with an ellipsis', () => {
  const result = excerpt('word '.repeat(60));
  ok(result.length <= 160, `length ${result.length}`);
  ok(result.endsWith('…'));
  ok(!result.endsWith(' …'));
  ok(result.startsWith('word word'));
});

test('one long word is hard-cut to exactly 160 including the ellipsis', () => {
  const result = excerpt('x'.repeat(200));
  equal(result.length, 160);
  ok(result.endsWith('…'));
});

test('text of exactly max length is not cut', () => {
  equal(excerpt('y'.repeat(160)), 'y'.repeat(160));
});
