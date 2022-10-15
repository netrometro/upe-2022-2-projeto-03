const express = require('express');
const bodyParser = require('body-parser')
const connectToDataBase = require('./src/database')
const port = 3000;
const app = express();
connectToDataBase();
app.use(express.json());
app.use(express.urlencoded({extends:false}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require("dotenv").config({path:"./.env"})

require('./src/controllers/authController')(app);
require('./src/controllers/quizzController')(app);
require('./src/controllers/projectController')(app);
require('./src/controllers/searchController')(app);
require('./src/controllers/deleteController')(app);




app.listen(port, ()=>{
  console.log('servidor rodando');
  console.log(port);
})

// ADD THIS TWO LINE
// var cors = require('cors');
// app.use(cors());