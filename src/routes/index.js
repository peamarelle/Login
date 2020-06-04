const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/signup', (req, res, next) => { // cuando el usuario ingrese se va a poder registrar
    res.render('signup')
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true //paso todos los datos que escribo desde el cliente
}));

router.get('/signin', (req, res, next) => {});

router.post('/signin', (req, res, next) => {});

router.get('/profile', (req, res, next) => {
    res.render('profile');
});

module.exports = router;