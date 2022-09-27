const jwt = require('jsonwebtoken')
require("dotenv").config({path:"./.env"})

module.exports = (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({error: 'O token não foi aprovado'})

    const parts = authHeader.split(' ');

    if(!parts.lenght === 2)
        return res.status(401).send({error:'Erro no token'})
    
    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error:'Token mal formatado'})
    
    jwt.verify(token,process.env.secret,(err, decoded)=>{
        if(err) return res.status(401).send({error:'Token invalido'})
    req.userId = decoded.id;
    return next();
    })
    

}