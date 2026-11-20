import { deepEqual } from 'node:assert/strict';
import { test } from 'node:test';
import { headingTags } from './heading-tags.ts';

test('maps heading_1..3 to h2..h4', () => {
  deepEqual(headingTags([1, 2, 3]), { 1: 'h2', 2: 'h3', 3: 'h4' });
});

test('a post starting at heading_2 still gets h2 first', () => {
  deepEqual(headingTags([2, 3, 2]), { 2: 'h2', 3: 'h3' });
});

test('closes gaps between used levels', () => {
  deepEqual(headingTags([1, 3]), { 1: 'h2', 3: 'h3' });
});

test('no headings gives an empty map', () => {
  deepEqual(headingTags([]), {});
});
