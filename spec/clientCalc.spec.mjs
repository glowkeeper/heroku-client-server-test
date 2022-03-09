/* eslint-disable no-undef */
import { calculator } from '../src/client/utils/calculator.mjs';

describe('addition', function() {
    it('correctly adds', function() {
        const answer = calculator("3 + 4 - 6");
        expect(answer).toEqual(1);
    })
})

describe('subtraction', function() {
    it('correctly subtracts', function() {
        const answer = calculator("15 - 4");
        expect(answer).toEqual(11);
    })
})

describe('division', function() {
    it('correctly divides', function() {
        const answer = calculator("6 / 3 + 10");
        expect(answer).toEqual(12);
    })
})

describe('power', function() {
    it('correctly calculates the power', function() {
        const answer = calculator("10 ^ 2");
        expect(answer).toEqual(100);
    })
})