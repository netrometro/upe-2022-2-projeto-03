const { Router } = require('express');
const express = require('express');
const router = express.Router();


//Api de search ***Procurar coisas relacionadas ao usuario***
app.get("/search/:key",async (req,resp)=>{
    let data = await User.find(
        {
            "$or":[
                {Name:{$regex:req.params.key}}, // copiar esta linha para outros parametros no lugar de Name
                {_id:{$regex:req.params.key}},
              ]
         }
        )
        resp.send(data);
    })
  
    app.get("/search/:key",async (req,resp)=>{
      let data = await Quizz.find(
          {
              "$or":[
                  {_id:{$regex:req.params.key}}, // copiar esta linha para outros parametros no lugar de Name
                  {questions:{$regex:req.params.key}},
                ]
           }
          )
          resp.send(data);
      })
  
  