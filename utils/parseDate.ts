export function parseDate(input: string): string {
  const date = new Date(input);
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const day = date.getDate();

  return `${year}年${month}月${day}日  ${hour}時${minute}分`;
}
