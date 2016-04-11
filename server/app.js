/**
 * Created by will on 4/11/2016.
 */
var app = require('http').createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello world!");
});
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3380);

io.on('connection', function (socket) {
    console.log('this is the server');
    socket.emit('news', { 'hello': 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});