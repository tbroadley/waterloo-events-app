export default function range(start, end) {
  let result = [];

  for (let i = start; i < end; i++) {
    result[i - start] = i;
  }

  return result;
}
