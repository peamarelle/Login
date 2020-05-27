const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const { mongodb } = require('./keys');

mongoose.connect(mongodb.URI, 
{useNewUrlParser: true })
.then(db => console.log('database is connected'))
.catch(err => console.error(err));