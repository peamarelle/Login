const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.serializeUser((user, done) => { //se utiliza para que el usuario se loguee una sola vez y pueda navegar por todo el sitio
    done(null, user.id);
}); //se almacenan estos datos serializados en el navegador

passport.deserializeUser(async(id, done) => { // se raliza la consulta a la base de datos
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
        usernameField: 'email', //atraves de que dato se autentica el usuario
        passwordField: 'password',
        passReqToCallback: true //para recibir datos por el req y almacenarlos como el email y el pass
    }, async(req, email, password, done) => {
        const user = new User();
        user.email = email;
        user.password = password;
        await user.save();
        done(null, user);
    })) //creo un método callback para tratar los datos recibidos