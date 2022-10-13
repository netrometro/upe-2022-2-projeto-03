const express = require('express');
const bodyParser = require('body-parser')
const connectToDataBase = require('./src/database')
const port = 3000;
const app = express();
connectToDataBase();
app.use(express.json());
app.use(express.urlencoded({extends:false}))

require("dotenv").config({path:"./.env"})

require('./src/controllers/authController')(app);
require('./src/controllers/quizzController')(app);
require('./src/controllers/projectController')(app);
require('./src/controllers/searchController')(app);
require('./src/controllers/deleteController')(app);




app.listen(port, ()=>{
  console.log('servidor rodando');
})

// ADD THIS TWO LINE
var cors = require('cors');
app.use(cors());