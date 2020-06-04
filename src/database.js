const mongoose = require('mongoose'); //modulo para crear conexion con mongodb
mongoose.set('useFindAndModify', false);
const { mongodb } = require('./keys'); //reqiero la propiedad del objeto mongodb

mongoose.connect(mongodb.URI, { useNewUrlParser: true }) //uso una promise una vez que conecta envio el mensaje
    .then(db => console.log('database is connected'))
    .catch(err => console.error(err)); //si ocurre un error muestro el error