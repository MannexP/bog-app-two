const express = require('express')
const router = express.Router()
const creaturesController = require('../controllers/creaturesController')

const creaturesController = {
    index: (req, res) => {
        creaturesController.find().then((creatures) => {
            res.json(creatures)
        }).catch((err) => {
            console.log(err)
        })
    },
    show: (req, res) => {
        try {
            const creatureId = req.params.id
            const creature = await Creature.findById(creatureId)
            res.json(creature)
        } catch (err) {
            console.log(err)
            res.jason(err)
        }
    },
    create: (req, res) => {
        try {
            const newCreature = req.body
            const savedCreature = await Creature.create(newCreature)
            res.json(savedCreature)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    update: (req, res) => {
        try {
            const creatureId = req.params.id
            const updatedCreature = req.body
            const savedCreature = await Creature.findByIdAndUpdate(creatureId, updatedCreature)
            res.json(savedCreature)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    delete: (req, res) => {
        try {
            const creatureId = req.params.id
            await Creature.findByIdAndRemove(creatureId)
            res.json({
                msg: 'Successfully Deleted'
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}
module.exports = creaturesController