const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const routes = require('./routes/index')
const morgan = require('morgan');
const app = express();
require('./database')
const port = 3000;

//middlewares
app.use(morgan('dev'));//muestra datos de la comunicación con el cliente
app.use(express.urlencoded({ extended: false }));
//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//Routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});