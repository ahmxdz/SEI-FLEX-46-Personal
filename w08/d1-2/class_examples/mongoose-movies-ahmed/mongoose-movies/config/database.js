const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
    }, function (){
    console.log('DB connected Successfully')
    }, function (e) {
    console.log('Unable to connect')
    console.error(e)
    }
);

// shortcut to referencing your db

const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
  });

db.on('error', function (){
    console.log('Error connecting to DB');
})