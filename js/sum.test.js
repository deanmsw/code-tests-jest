const { expect } = require('@jest/globals')
const sum = require('./sum')

test('adds two tests correctly', () => {
    expect(sum(1, 2)).toBe(3)
})