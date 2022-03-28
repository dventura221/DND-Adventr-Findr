const { Schema } = require('mongoose')

const Player = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    age: { type: Number, required: true },
    looking4Party: { type: Boolean, required: true },
    comment: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Player
