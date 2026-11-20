import { deepEqual } from 'node:assert/strict';
import { test } from 'node:test';
import { resizedSize } from './resized-size.ts';

test('uses output width and height', () => {
  deepEqual(resizedSize({ width: 1400, height: 3117 }), {
    width: 1400,
    height: 3117,
  });
});

test('uses one frame height for animated images', () => {
  deepEqual(resizedSize({ width: 400, height: 3000, pageHeight: 300 }), {
    width: 400,
    height: 300,
  });
});
