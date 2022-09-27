const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Quizz = require('../models/quizz');
const User = require('../models/user');

// Api de search ***Procurar coisas relacionadas ao usuario***
router.get("/user/:key",async (req,resp)=>{
    let data = await User.find(
        {
            "$or": [
                // {email: req.params.key}, // copiar esta linha para outros parametros no lugar de Name
                {_id: req.params.key},
            ]
         }
        )
        resp.send(data);
})

router.get("/quizz/:key",async (req,resp)=>{
      let data = await Quizz.find(
          {
              "$or":[
                  {_id: req.params.key}, // copiar esta linha para outros parametros no lugar de Name
                //   {questions:{$regex:req.params.key}},
                ]
           }
          )
          resp.send(data);
})     

module.exports = app => app.use('/',router);