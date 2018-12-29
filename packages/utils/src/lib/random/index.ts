/**
 * Generates a random number.
 *
 * @throws {RangeError} If the min value is greater than the max value.
 */
export default function random(min: number = 1, max: number = 10) {
  if (max <= min) {
    throw new RangeError('The max value must be greater than the min value.')
  }

  return min + Math.round(Math.random() * (max - min))
}
