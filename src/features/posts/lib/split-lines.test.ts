import { deepEqual } from 'node:assert/strict';
import { test } from 'node:test';
import { splitLines } from './split-lines.ts';

test('splits Notion soft line breaks (Shift+Enter) into lines', () => {
  deepEqual(splitLines('Jalan Sudirman\nJakarta'), [
    'Jalan Sudirman',
    'Jakarta',
  ]);
});

test('keeps empty lines from consecutive breaks', () => {
  deepEqual(splitLines('a\n\nb'), ['a', '', 'b']);
});

test('text without breaks is one line', () => {
  deepEqual(splitLines('one line'), ['one line']);
});
