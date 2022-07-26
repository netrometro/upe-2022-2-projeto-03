const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../modules/mailer');

const User = require('../models/user')
const { Template } = require('ejs');
require("dotenv").config({path:"./.env"})


function generateToken(params={}){
    return jwt.sign(params,process.env.secret,{
        expiresIn:86400
    })
}

router.get('/', async (req, res) => {
    return res.send('OK')
  });

router.post('/register', async (req, res) => {
    const {email} = req.body;

    try{
        if (await User.findOne({email}))
            return res.status(400).send({error:'Usuario ja existe'})

        const user = await User.create(req.body)
        user.password = undefined;
        return res.status(200).send({sucess:'Usuário cadastrado com sucesso'});
    }
    catch(err){
        return res.status(400).send({error:'Erro no registro'});
    }
});

router.post('/authenticate', async (req,res)=>{
    console.log("autenticando",req)
    const { email, password} = req.body;

    const user = await User.findOne({email}).select('+password');

    if(!user)
        return res.status(400).send({error:'Usuário não encontrado'});
    if(!await bcrypt.compare(password,user.password))
        return res.status(400).send({error:"Senha inválida"})

    user.password = undefined;

    res.send({
        user, 
        token: generateToken({id:user.id}),
    });
});

router.post('/forgot_password', async(req, res) => {    //Recuperação de senha
    const { email } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user)
            return res.status(400).send({error:'Usuário não encontrado'});

        const token = crypto.randomBytes(20).toString('hex');
        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        });

        mailer.sendMail({
            to: email,
            from: 'jonas@teste.com.br',
            template: 'auth/forgot_password',
            context: { token },
        }, (err) => {
            if(err)
                return res.status(400).send({ error: 'não é possível enviar e-mail de senha esquecida' });
            return res.send();
        })
        // console.log(token, now);
    }catch(err) {
        req.status(400).send({ error: 'Erro em esquecer a senha, tente novamente' });
    }
});

router.post('/reset_password', async(req, res) => {     // Formando nova senha
    const { email, token, password } = req.body;

    try{
        const user = await User.findOne({ email })
            .select('+passwordResetToken passwordResetExpires');

        if (!user)
        return res.status(400).send({error:'Usuário não encontrado'});

        if (token !== user.passwordResetToken)
            return res.status(400).send({error: 'Token invalido'});

        const now = new Date();

        if (now > user.passwordResetExpires)
            return res.status(400).send({error: 'Token expirado, gere um novo'});

        user.password = password;

        await user.save();

        res.send();
    } catch(err){
        res.status(400).send({error:'não é possível redefinir a senha, tente novamente'});
    }
});

module.exports = app => app.use('/auth',router);