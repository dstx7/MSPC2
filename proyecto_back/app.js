var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./config/database");
var auth = require("./auth/main_auth");
var cors = require("cors"); //esto es necesario para dar respuesta a la solicitud del front

var usuariosRouter = require("./routes/usuario.router");
var empleadosRouter = require("./routes/empleados.router");
var vehiculosRouter = require("./routes/vehiculos.router");
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors()) 

//mongo connect
database.mongoConnect();
app.use('/usuarios',usuariosRouter);
app.use(auth);

//router
app.use("/usuarios", usuariosRouter);
app.use("/empleados", empleadosRouter);
app.use("/vehiculos", vehiculosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
