var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var  mid=require('./servicios/middleware.js');



var app = express();
http.createServer(app).listen(process.env.PORT || 8080);
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});
//configuracion de las vistas
app.set('views', path.join(__dirname, 'views'));
app.engine("html", require("ejs").renderFile);
app.set('view engine', 'html');


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);



//realizamos una conexion a la base de datos
var mongoose = require('mongoose');
mongoose.connect('mongodb://deyber:deyber@ds047782.mongolab.com:47782/challenge', function(error){
       if(error){
          throw error; 
       }else{
          console.log('conexion en mongo!! realizado ');
       }
    });

//fin conexion a la base de datos

require('./routes/routuser.js')(app);

//rotas administrativas
require('./routes/admin/routadmin.js')(app);

/// en caso de que no exista la ruta redireccionamos

 app.use(function(req, res) {
     res.redirect('/');
  });


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
     
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
