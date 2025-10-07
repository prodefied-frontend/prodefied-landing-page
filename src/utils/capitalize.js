export default function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) return "";
  const firstChar = str[0].toUpperCase();
  const restChars = str.slice(1);
  return firstChar + restChars;
}