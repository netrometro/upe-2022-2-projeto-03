const express = require('express');
const router = express.Router();

const User = require('../models/user')

router.post('/register', async (req, res) => {
    const {email} = req.body;

    try{
        if (await User.findOne({email}))
            return res.status(400).send({error:'Usuario ja existe'})

        const user = await User.create(req.body)
        user.password = undefined;
        return res.send({user});
    }
    catch(err){
        return res.status(400).send({error:'Erro no registro'});  
    }
});

module.exports = app => app.use('/auth',router);