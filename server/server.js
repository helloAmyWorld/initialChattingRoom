/**
 * Created by hshen on 9/23/16.
 */
var userArray=[];
// Import modules
var express = require('express');
var path = require('path');
var ejs = require('ejs');
/*记住这个系统小黎就是管理员*/
// Create server
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;
server.listen(port);

// Return index.html for '/'
app.get('/', function (req, res) {
    res.render('index');
});

// Set path for views and static resources
app.set('views', '../client/src/html');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use('/static', express.static('../client/build'));

var userNumber = 0;

io.sockets.on('connection', function (socket) {
    var signedIn = false;

    socket.on('newMessage', function (text) {
        io.sockets.emit('newMessage',{
            userName: socket.userName,
            text: text
        })
    });
/**/
    socket.on('signIn', function (userName) {
        if (signedIn)
            return;
//如果该用户已经在系统里面
        // we store the username in the socket session for this client
        socket.userName = userName;/*返回去*/
        ++userNumber;/**/
        signedIn = true;
        userArray.push(userName);
        io.sockets.emit('userJoined', {
            userName: userName,
            userNumber: userNumber,
            userArray:userArray
        });
    });
//
    socket.on('disconnect', function () {
        if (signedIn) {
            --userNumber;
            /*谁退出了，对应数组也要清除*/
         //   userArray.indexOf();
            io.sockets.emit('userLeft', {
                userName: socket.userName,
                userNumber: userNumber
            });
        }
    });

});