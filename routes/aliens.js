const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req,res) => {
    console.log("Get Request")
    try {
            const aliens = await Alien.find()
            res.json(aliens)
    } catch(err){
        res.send('Get Error ' + err)
    }
})

module.exports = router