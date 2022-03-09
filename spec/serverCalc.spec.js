/* eslint-disable no-undef */
const calculator = require('../src/server/utils/calculator.js');

describe('addition', function() {
    it('correctly adds', function() {
        const answer = calculator("25 + 4 - 15");
        expect(answer).toEqual(14);
    })
})

describe('subtraction', function() {
    it('correctly subtracts', function() {
        const answer = calculator("15 - 4 + 27");
        expect(answer).toEqual(38);
    })
})

describe('division', function() {
    it('correctly divides', function() {
        const answer = calculator("6 / 2 + 30");
        expect(answer).toEqual(33);
    })
})

describe('power', function() {
    it('correctly calculates the power', function() {
        const answer = calculator("10 ^ 3");
        expect(answer).toEqual(1000);
    })
})