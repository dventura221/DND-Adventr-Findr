const { Schema } = require('mongoose')

const Party = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    online: { type: Boolean, required: true },
    inPerson: { type: Boolean, required: true },
    looking4Players: { type: Boolean, required: true },
    dungeonMaster: { type: Schema.Types.ObjectId, ref: 'players' },
    players: [{ type: Schema.Types.ObjectId, ref: 'players' }],
    characters: [{ type: Schema.Types.ObjectId, ref: 'characters' }],
    comment: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Party
