const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/react-mastermind', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected with Mongo DB on ${db.host}:${db.port}`)
})