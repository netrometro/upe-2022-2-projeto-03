const express = require('express');
// const session = require('express-session');
const bodyParser = require('body-parser')
// const crypto = require('crypto');
// const mailer = require('mail')

const port = 3000;
// var path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extends:false}))
require('./src/controllers/authController')(app);
require('./src/controllers/quizzController')(app);
require('./src/controllers/projectController')(app);





app.listen(port, ()=>{
  console.log('servidor rodando');
})
