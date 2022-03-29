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

//Get list of all for Players, Parties, Characters

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

// Search for single Player, Party

app.get('/players/:id', async (req, res) => {
  try {
    const { id } = req.params
    const player = await Player.findById(id)
    if (!player) throw Error('Player not found')
    res.json(player)
  } catch (e) {
    console.log(e)
    res.send('Player not found!')
  }
})

app.get('/parties/:id', async (req, res) => {
  try {
    const { id } = req.params
    const party = await Party.findById(id)
    if (!party) throw Error('Party not found')
    res.json(party)
  } catch (e) {
    console.log(e)
    res.send('Party not found!')
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
