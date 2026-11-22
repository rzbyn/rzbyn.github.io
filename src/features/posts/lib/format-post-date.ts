// Fixed short months: Intl's en-GB prints "Sept" on current ICU, which would
// break the date column's even width.
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

/** Formats a post date as "6 Nov 2026", read in UTC so it never shifts a day. */
export function formatPostDate(date: Date): string {
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
