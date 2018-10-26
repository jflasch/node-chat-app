var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Collin',
        text: 'This is a client message from Collin'
    });
});

socket.on('newMessage', function (message) {
    console.log('Recieved new message: ', message);
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});