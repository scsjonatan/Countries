export function replaceText(text) {
  return text
    .replace('å', 'a')
    .replace('ç', 'c')
    .replace('ô', 'o')
    .replace('é', 'e')
    .toLowerCase()
}
