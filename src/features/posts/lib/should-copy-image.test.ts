import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { shouldCopyImage } from './should-copy-image.ts';

test('copies svg at any width', () => {
  equal(shouldCopyImage('svg', 5000), true);
});

test('copies a gif that needs no shrinking', () => {
  equal(shouldCopyImage('gif', 1400), true);
  equal(shouldCopyImage('gif', 1401), false);
});

test('always re-encodes photos, to strip EXIF', () => {
  equal(shouldCopyImage('webp', 300), false);
});
