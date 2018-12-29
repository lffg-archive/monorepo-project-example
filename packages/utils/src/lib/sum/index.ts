/**
 * Sum all the passed numbers.
 */
export default function sum(...numbers: number[]) {
  if (numbers.find((n) => typeof n !== 'number')) {
    return 0
  }

  return numbers.reduce((p, c) => p + c, 0)
}
