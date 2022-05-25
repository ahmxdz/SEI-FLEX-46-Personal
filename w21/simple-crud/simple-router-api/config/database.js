const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/students',
{useNewUrlParser: true}
);

const db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to MongoDb at ${db.host}:${db.port}`)
});