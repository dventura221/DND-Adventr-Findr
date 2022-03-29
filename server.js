const express = require('express')
//const routes = require('./server/routes')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const db = require('./db')
const { Player, Party, Character } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('I am root!')
})

app.get('/players', async (req, res) => {
  const players = await Player.find()
  res.json(players)
}) //Check - works in Insomnia

app.get('/parties', async (req, res) => {
  const parties = await Party.find()
  res.json(parties)
}) //Check - works in Insomnia

app.get('/characters', async (req, res) => {
  const characters = await Character.find()
  res.json(characters)
}) //Check - works in Insomnia

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
