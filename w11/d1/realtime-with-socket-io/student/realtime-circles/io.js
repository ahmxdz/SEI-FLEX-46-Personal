const io = require('socket.io')();

io.on('connection', function(socket){
    console.log(`Client connected to socket.io socket ID:${socket.id}`),

    // catches events that are emitted locally
    socket.on('clear-circles', function(data){
        console.log('clear-circles')
        console.log(data)
        // use parent socket to broadcast to every client
        io.emit('clear-circles clicked', data)
    })
    socket.on('all-files-sent', function(){
        socket.disconnect()
    })
})

module.exports = io