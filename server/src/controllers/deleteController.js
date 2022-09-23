const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Quizz = require('../models/quizz');
const User = require('../models/user');

router.delete("/user/:id", async (req, res) => {
    const id = req.params.id

    await User.deleteOne({ _id: id })   
        .then(msg => {
            return res.status(204).json({mensagem: "Usuário excluido com sucesso!"}) 
        })
        .catch(err => {
            return res.status(400).json({mensagem: "Erro ao excluir usuário."})
        })
})

router.delete("/quizz/:id", async (req, res) => {
    const id = req.params.id
    
    await Quizz.deleteOne({ _id: id })   
        .then(msg => {
            return res.status(204).json({mensagem: "Quizz excluido com sucesso!"}) 
        })
        .catch(err => {
            return res.status(400).json({mensagem: "Erro ao excluir quizz."})
        })
})

module.exports = app => app.use('/',router);