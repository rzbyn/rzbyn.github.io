type TreeNode = { type: string; id: string; children: TreeNode[] };

/** First block (depth-first, document order) whose type isn't supported. */
export function findUnsupportedBlock<T extends TreeNode>(
  blocks: T[],
  supported: ReadonlySet<string>,
): T | undefined {
  for (const block of blocks) {
    if (!supported.has(block.type)) return block;
    const nested = findUnsupportedBlock(block.children as T[], supported);
    if (nested) return nested;
  }
  return undefined;
}
