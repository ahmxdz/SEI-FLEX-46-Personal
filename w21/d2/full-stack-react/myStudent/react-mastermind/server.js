const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan')

const port = process.env.PORT || 6001;
const app = express();

app.use(logger('dev'));
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/data', function (req, res) {
  res.send({
    status: 200,
    data: [
      {firstName: 'Ahmed', lastName: 'Ali'}
    ]
  })
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, function() {
   console.log(`Express app running on port ${port}`)
});