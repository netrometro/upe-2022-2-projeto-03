const moongose = require('mongoose');


moongose.connect('mongodb://localhost/api')
Promise = global.Promise;
module.exports = moongose;