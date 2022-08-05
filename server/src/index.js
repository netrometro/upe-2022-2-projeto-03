const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000);

require('./controllers/authController')(app);

// app.get('/', (req, res)=>{
//   res.send('Okay');
// });