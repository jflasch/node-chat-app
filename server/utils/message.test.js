var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var message = generateMessage('Jared', 'This is a test message');
        expect(message.text).toBe('This is a test message');
        expect(message.from).toBe('Jared');
        expect(typeof message.createdAt).toBe('number');
    })
});