const { expect } = require('@jest/globals')
const subtract = require('../functions/subtract')

test('subtracts two numbers correctly', () => {
    expect(
        subtract(1, 2)
        ).toBe(-1)
})