import { deepEqual } from 'node:assert/strict';
import { test } from 'node:test';
import { linkTarget } from './link-target.ts';

const SITE = new URL('https://rzbyn.com');

test('an http(s) link to another host is external', () => {
  deepEqual(linkTarget('https://github.com/rzbyn', SITE), { kind: 'external' });
  deepEqual(linkTarget('http://example.com/', SITE), { kind: 'external' });
});

test('a subdomain of this site is external', () => {
  deepEqual(linkTarget('https://www.rzbyn.com/', SITE), { kind: 'external' });
});

test('an absolute link to this site becomes an internal path', () => {
  deepEqual(linkTarget('https://rzbyn.com/log/emmet-to-ai/?a=1#end', SITE), {
    kind: 'internal',
    href: '/log/emmet-to-ai/?a=1#end',
  });
});

test('a root-relative link is internal', () => {
  deepEqual(linkTarget('/etc/', SITE), { kind: 'internal', href: '/etc/' });
});

test('hash-only, mailto and malformed links stay plain anchors', () => {
  deepEqual(linkTarget('#notes', SITE), { kind: 'other' });
  deepEqual(linkTarget('mailto:hi@rzbyn.com', SITE), { kind: 'other' });
  deepEqual(linkTarget('http://[', SITE), { kind: 'other' });
});
