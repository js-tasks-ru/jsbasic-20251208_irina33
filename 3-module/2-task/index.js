function filterRange(arr, a, b) {
  return arr.filter(elem => elem >= Math.min(a, b) && elem <= Math.max(a, b));
}
