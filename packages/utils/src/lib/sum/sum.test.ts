import sum from '.'

describe('Sum', () => {
  it('Should return the sum of two numbers', () => {
    expect(sum(3, 7)).toBe(3 + 7)
  })
})
