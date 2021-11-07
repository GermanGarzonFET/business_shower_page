const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path')
const bodyParser = require('body-parser');

//db
const pool = require('./settings/db');


//configuracion
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 4000);
app.use(express.static(__dirname + '/public'));
    app.engine('.hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }));
    app.set('views', path.join(__dirname, '/views'));
    app.set('view engine', '.hbs');

app.engine('handlebars', hbs());
app.set('view engine', '.hbs');


//middleware
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));

//rutas
app.use(require('./routes/app'));

/* app.get('/home', function (req, res) {
    res.render('home');
}); */

//servidor
app.listen(app.get('port'),()=>{
    console.log("Server in port ",app.get('port'));
})