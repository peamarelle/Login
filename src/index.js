const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const routes = require('./routes/index')
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

//inicialización
const app = express();
require('./database');
require('./passport/local-auth');
const port = 3000;

//middlewares
app.use(morgan('dev')); //muestra datos de la comunicación con el cliente
app.use(express.urlencoded({ extended: false }));
app.use(session({ //config de la sesion
    secret: 'mysrectsession',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize()); //inicializo
app.use(passport.session());

//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//Routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});