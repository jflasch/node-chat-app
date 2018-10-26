const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('isRealString', () => {
    it('should reject non string values', () => {
        var isString = isRealString(75);
        expect(isString).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        var isString = isRealString('     ');
        expect(isString).toBeFalsy();
    });

    it('should allow string containing non-space characters', () => {
        var isString = isRealString('This string is okay');
        expect(isString).toBeTruthy();
    });
});