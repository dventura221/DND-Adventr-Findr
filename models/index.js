const mongoose = require('mongoose')
const PlayerSchema = require('./Player')
const PartySchema = require('./Party')
const CharacterSchema = require('./Character')

const Player = mongoose.model('Player', PlayerSchema)
const Party = mongoose.model('Party', PartySchema)
const Character = mongoose.model('Character', CharacterSchema)

module.exports = {
  Player,
  Party,
  Character
}
