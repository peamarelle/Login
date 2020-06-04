const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose; //utilizamos el esquema de mongoose para definir de que forma se van a guardar los datos en la base de datos

const userSchema = new Schema({
    email: String,
    password: String
});

userSchema.methods.encryptPassword = (password) => { //definimos un metodo que recibe el password
    bcrypt.hashSync(password, bcrypt.genSaltSync(10)) //recibe la contraseña decimos que se ejecuta 10 veces y la cifra
};

userSchema.methods.comparePassword = function(password) {
    bcrypt.compareSync(password, this.password); //Compara lo que ingresamos con lo que está en la base de datos
}

module.exports = mongoose.model('users', userSchema); //cuando se ingresen datos se van a guardar en la Collection users de la forma especificado en el esquema