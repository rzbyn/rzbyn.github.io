import { deepEqual } from 'node:assert/strict';
import { test } from 'node:test';
import { groupListItems } from './group-list-items.ts';

const block = (type: string, id: string) => ({ type, id });
const p1 = block('paragraph', 'p1');
const p2 = block('paragraph', 'p2');
const n1 = block('numbered_list_item', 'n1');
const n2 = block('numbered_list_item', 'n2');
const n3 = block('numbered_list_item', 'n3');
const b1 = block('bulleted_list_item', 'b1');
const b2 = block('bulleted_list_item', 'b2');

test('groups consecutive numbered items into one list', () => {
  deepEqual(groupListItems([p1, n1, n2, n3, p2]), [
    p1,
    { type: 'numbered_list', id: 'n1', items: [n1, n2, n3] },
    p2,
  ]);
});

test('a change of list type starts a new group', () => {
  deepEqual(groupListItems([b1, n1]), [
    { type: 'bulleted_list', id: 'b1', items: [b1] },
    { type: 'numbered_list', id: 'n1', items: [n1] },
  ]);
});

test('a non-list block splits a list in two', () => {
  deepEqual(groupListItems([b1, p1, b2]), [
    { type: 'bulleted_list', id: 'b1', items: [b1] },
    p1,
    { type: 'bulleted_list', id: 'b2', items: [b2] },
  ]);
});

test('empty input gives empty output', () => {
  deepEqual(groupListItems([]), []);
});
