const { Schema } = require('mongoose')

const Party = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    format: { type: String, required: true },
    looking4Players: { type: String, required: true },
    dungeonMaster: { type: Schema.Types.ObjectId, ref: 'players' },
    players: [{ type: Schema.Types.ObjectId, ref: 'players' }],
    comment: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Party
