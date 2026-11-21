import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { postCardMeta } from './post-card-meta.ts';

test('joins section label and post date', () => {
  equal(
    postCardMeta('log', new Date('2025-05-22T00:00:00Z')),
    'Log · 22 May 2025',
  );
  equal(
    postCardMeta('etc', new Date('2026-11-06T00:00:00Z')),
    'Etc · 6 Nov 2026',
  );
});
