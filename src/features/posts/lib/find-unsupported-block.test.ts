import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { findUnsupportedBlock } from './find-unsupported-block.ts';

type Node = { type: string; id: string; children: Node[] };
const node = (type: string, id: string, children: Node[] = []): Node => ({
  type,
  id,
  children,
});

const supported = new Set(['paragraph', 'column_list', 'column']);

test('returns undefined when every block is supported', () => {
  equal(findUnsupportedBlock([node('paragraph', 'p')], supported), undefined);
});

test('finds an unsupported block nested inside columns', () => {
  const tree = [
    node('column_list', 'cl', [
      node('column', 'c', [node('paragraph', 'p'), node('embed', 'e')]),
    ]),
  ];
  equal(findUnsupportedBlock(tree, supported)?.id, 'e');
});

test('returns the first unsupported block in document order', () => {
  const tree = [node('video', 'v'), node('embed', 'e')];
  equal(findUnsupportedBlock(tree, supported)?.id, 'v');
});
