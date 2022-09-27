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
    let data = await Quiz.find(
        {
            "$or":[
                {_id:{$regex:req.params.key}}, // copiar esta linha para outros parametros no lugar de Name
                {questions:{$regex:req.params.key}},
              ]
         }
        )
        resp.send(data);
    })


  app.delete("/user/:id") , (req, res) => {
      const  usurario = user.deleteOne({_id: req.params.id } , (err) => {
         if(err) return res.status(400).json({
          error: true,
          message: "Erro ao deletar"
         });

         return res.json({
          error: false,
          message: "Deletado"
      });
          
      })
    
  }
      app.delete("/Quizz/:id") , (req, res) => {
        const  Quiz = quizz.deleteOne({_id: req.params.id } , (err) => {
           if(err) return res.status(400).json({
            error: true,
            message: "Erro ao deletar"
           });
  
           return res.json({
            error: false,
            message: "Deletado"
        });
            
        })
  
  }



app.listen(port, ()=>{
  console.log('servidor rodando');
})
