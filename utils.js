export function replaceText(text) {
  return text
    .toLowerCase()
    .replace('å', 'a')
    .replace('ç', 'c')
    .replace('ô', 'o')
    .replace('é', 'e')
}
