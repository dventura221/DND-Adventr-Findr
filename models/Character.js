const { Schema } = require('mongoose')

const Character = new Schema(
  {
    player: { type: Schema.Types.ObjectId, ref: 'players' },
    name: { type: String, required: true },
    race: { type: String, required: true },
    class: { type: String, required: true },
    charSheet: { type: String, required: false },
    link: { type: String, required: false },
    comment: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Character
