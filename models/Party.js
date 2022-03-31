const { Schema } = require('mongoose')

const Party = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    format: { type: String, required: true },
    looking4Players: { type: String, required: true },
    dungeonMaster: { type: String, required: true },
    players: [{ type: String, required: true }],
    comment: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Party
