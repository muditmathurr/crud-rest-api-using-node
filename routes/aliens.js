const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req, res) => {
    console.log("Get Request")
    try {
            const aliens = await Alien.find()
            res.json(aliens)
    } catch(err){
        res.send('Get Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        res.send(alien)
    } catch(err) {
        res.send('Get Error ' + err)
    }
})
router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1) 
    } catch(err) {
        res.send('Error')
    }
})

router.patch('/:id', async(req, res) => {
    console.log('inside patch')
    try {
        console.log('inside try')
        const a1ien = await Alien.findById(req.params.id)
        a1ien.sub = req.body.sub
        const a1 = await a1ien.save()
        res.json(a1)
    } catch(err){
        res.send('Error')
    }
})

// router.delete('/:id', async(req, res) => {
//     console.log('inside delete');
//     try {
//         const alien = await Alien.findById(req.params.id)
//         alien.name = req.body.name
//         const a1 = await alien.delete()
//         console.log('inside try')
//         res.json(a1)
//     } catch(err) {
//         res.send('Error')
//     }
// })


router.delete('/:id', async (req, res) => {
    console.log('inside delete')
    try {
        console.log('inside try')
        const alien = await Alien.findByIdAndDelete(req.params.id)
        if (!alien) return res.status(404).send('Alien not found')
        res.status(200).send('Alien deleted successfully')
    } catch (err) {
        res.status(500).send(err)
    }
})


module.exports = router