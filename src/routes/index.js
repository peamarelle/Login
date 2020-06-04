const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/signup', (req, res, next) => { // cuando el usuario ingrese se va a poder registrar
    res.render('signup')
});

router.post('/signup', (req, res, next) => { //devuelve los datos del usuario 
    console.log(req.body.email);
    res.redirect('/');
});

router.get('/signin', (req, res, next) => {});

router.post('/signin', (req, res, next) => {});

module.exports = router;