const { expect } = require('@jest/globals')
const sum = require('../functions/sum')

test('adds two tests correctly', () => {
    expect(sum(1, 2)).toBe(3)
})