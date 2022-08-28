const { Router } = require('express');
const express = require('express');
const router = express.Router();

const Quizz = require('../models/quizz')

router.post('/createquizz', async (req, resp) => {
  try{
    const quizz = await Quizz.create(req.body)
    return resp.send({
      quizz,      
    })
  }
  catch(err){
    resp.status(400).send({error: 'Erro ao criar quizz'})
  }
})

module.exports = app => app.use('/quiz', router);