const LIST_TYPES = {
  bulleted_list_item: 'bulleted_list',
  numbered_list_item: 'numbered_list',
} as const;

type ListItemType = keyof typeof LIST_TYPES;

export type ListGroup<T> = {
  type: (typeof LIST_TYPES)[ListItemType];
  id: string;
  items: T[];
};

function isListItemType(type: string): type is ListItemType {
  return type in LIST_TYPES;
}

/** Notion has no list block: groups runs of same-type list items into one list. */
export function groupListItems<T extends { type: string; id: string }>(
  blocks: T[],
): Array<T | ListGroup<T>> {
  const result: Array<T | ListGroup<T>> = [];
  let current: ListGroup<T> | undefined;

  for (const block of blocks) {
    if (!isListItemType(block.type)) {
      current = undefined;
      result.push(block);
      continue;
    }
    const listType = LIST_TYPES[block.type];
    if (current?.type !== listType) {
      current = { type: listType, id: block.id, items: [] };
      result.push(current);
    }
    current.items.push(block);
  }

  return result;
}
