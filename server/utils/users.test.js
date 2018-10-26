const expect = require('expect');

const {Users} = require('./users.js');



describe('Users', () => {

    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Jared',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Collin',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Hannah',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = users.addUser(1, 'Jared', 'Test Room');
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var testUsers = [users.users[1], users.users[2]];
        var user = users.removeUser('1');
        expect(user.id).toBe('1');
        expect(users.users).toEqual(testUsers);
        
    });

    it('should not remove user', () => {
        var originalUsers = users;
        var user = users.removeUser('5');
        expect(user).toBeFalsy();
        expect(users).toEqual(originalUsers);
    });

    it('should find user', () => {
        var user = users.getUser('1');
        expect(user.id).toBe('1');
    });

    it('should not find a user', () => {
        var user = users.getUser('5');
        expect(user).toBeFalsy();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Jared', 'Hannah']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Collin']);
    });
});