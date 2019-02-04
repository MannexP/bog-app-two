const mongoose = require('./connection')
const {Creature} = require('./schema')

Creature.remove().then(() => {
    const luke = new Creature({name: 'Luke', description: 'Jedi'})
    return luke.save()
  }).then(() => {
    const darth = new Creature({name: 'Darth Vader', description: 'Father of Luke'})
    return darth.save()
  }).then(() => {
    db.close()
  })