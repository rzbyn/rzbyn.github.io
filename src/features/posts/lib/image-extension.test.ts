import { equal, throws } from 'node:assert/strict';
import { test } from 'node:test';
import { imageExtension } from './image-extension.ts';

test('maps image content types to file extensions', () => {
  equal(imageExtension('image/jpeg'), 'jpg');
  equal(imageExtension('image/png; charset=binary'), 'png');
  equal(imageExtension('image/gif'), 'gif');
  equal(imageExtension('image/webp'), 'webp');
  equal(imageExtension('image/avif'), 'avif');
  equal(imageExtension('image/svg+xml'), 'svg');
  equal(imageExtension('IMAGE/JPEG'), 'jpg');
});

test('throws on non-image or missing content types', () => {
  throws(() => imageExtension('text/html'));
  throws(() => imageExtension(null));
});
