const express = require('express');
const authMiddle = require('../middle/auth')
const router = express.Router();


router.use(authMiddle)
router.get('/', (req,res)=>{
    res.send({ok:true, user:req.userId})
})

module.exports = app => app.use('/project',router);