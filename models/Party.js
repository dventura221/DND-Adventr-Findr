const { Schema } = require('mongoose')

const Party = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Party
