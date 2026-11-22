import { equal, throws } from 'node:assert/strict';
import { test } from 'node:test';
import { imageOutputFormat } from './image-output-format.ts';

test('re-encodes raster photos as webp', () => {
  for (const type of [
    'image/jpeg',
    'image/png; charset=binary',
    'image/webp',
    'image/avif',
    'IMAGE/JPEG',
  ]) {
    equal(imageOutputFormat(type), 'webp');
  }
});

test('keeps gif and svg', () => {
  equal(imageOutputFormat('image/gif'), 'gif');
  equal(imageOutputFormat('image/svg+xml'), 'svg');
});

test('throws on non-image or missing content types', () => {
  throws(() => imageOutputFormat('text/html'));
  throws(() => imageOutputFormat(null));
});
