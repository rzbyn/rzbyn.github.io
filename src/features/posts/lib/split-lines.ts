/** Splits text on Notion soft line breaks (Shift+Enter arrives as "\n"). */
export function splitLines(text: string): string[] {
  return text.split('\n');
}
