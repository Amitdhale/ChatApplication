const express = require("express");

const app = express();
const http = require('http').Server(app);
require('dotenv').config();




const io = require('socket.io')(http, {
    cors: {
        origin: `${process.env.FRONTEND_URL}` || "*", 
        methods: ["GET", "POST"],
        credentials: true
    }
});

const userSocketmap = {};

const getReceiverSocketId = (receiverId) => {
	return userSocketmap[receiverId];
};

io.on('connection', function(socket){
    // console.log('A user connected');
    
    const userId = socket.handshake.query.userId;
    // console.log(userId);
    if(userId) {
        userSocketmap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketmap));

    socket.on('disconnect', function () {
        // console.log('A user disconnected');
        delete userSocketmap[userId];
	    io.emit("getOnlineUsers", Object.keys(userSocketmap));
    });
});


module.exports = {app,io,http,getReceiverSocketId};