var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var message = generateMessage('Jared', 'This is a test message');
        expect(message.text).toBe('This is a test message');
        expect(message.from).toBe('Jared');
        expect(typeof message.createdAt).toBe('number');
    })
});

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
        var message = generateLocationMessage('Jared', 30, 50);
        var testURL = 'https://www.google.com/maps?q=30,50';
        expect(message.from).toBe('Jared');
        expect(message.url).toBe(testURL);
        expect(typeof message.createdAt).toBe('number');
    });
});