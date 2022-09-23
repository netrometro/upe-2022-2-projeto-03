const { Router } = require('express');
const express = require('express');
const router = express.Router();


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

