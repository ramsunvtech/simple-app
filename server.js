/**
 * Server side Code
 **/
var express = require('express'),
    session = require('express-session'),
    app = express(),
    pg = require('pg'),
    path = require('path'),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    bodyParser = require('body-parser');

var routes = require('./routes/index'),
    userRoutes = require('./routes/user'),
    postRoutes = require('./routes/post');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({
  genid: function(req) {
    return '1234' // use UUIDs for session IDs
  },
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '/app')));

app.use('/', routes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

var port = process.env.PORT || 4000;
server.listen(port);

console.log('server listening to ' + port);

io.sockets.on('connection', function (socket) {

  socket.on('sendMessage', function (data) {
    io.sockets.emit('newMessage', data);
  });

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});