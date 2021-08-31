export default function padNumber(num: number | string): string {
  const numStr = String(num);
  return numStr.length === 2 ? numStr : `0${numStr}`;
}
