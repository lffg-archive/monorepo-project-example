import random from '.'

describe('Random', () => {
  it('Should return a random number between 1 and 5 and respect the max and min values', () => {
    const set = new Set()

    for (let i = 0; i <= 10000; i++) {
      set.add(random(1, 5))
    }

    for (let i = 1; i <= 5; i++) {
      expect(set.has(i)).toBe(true)
      set.delete(i)
    }

    expect([...set.values()].length).toBe(0)
  })

  it('Should throw `RangeError` when the min is greater than the max', () => {
    expect(() => random(10, 1)).toThrow(RangeError)
  })
})
