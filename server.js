const express = require('express')
//const routes = require('./server/routes')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const db = require('./db')
const { Player, Party, Character } = require('./models')
const { add } = require('./models/Player')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))

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

// Post new Player, Party, Char

app.post('/players', async (req, res) => {
  try {
    const player = await new Player(req.body)
    await player.save()
    return res.status(201).json({
      player
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

app.post('/parties', async (req, res) => {
  try {
    const party = await new Party(req.body)
    await party.save()
    return res.status(201).json({
      party
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

app.post('/characters', async (req, res) => {
  try {
    const char = await new Character(req.body)
    await char.save()
    return res.status(201).json({
      char
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

// Delete Player, Party, Char by ID

app.delete('/players/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Player.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Player deleted')
    }
    throw new Error('Player not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.delete('/parties/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Party.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Party deleted')
    }
    throw new Error('Party not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.delete('/characters/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Character.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Character deleted')
    }
    throw new Error('Character not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

// Update

app.put('/players/:id', async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(player)
  } catch (err) {
    res.send(err.message)
  }
})

app.put('/parties/:id', async (req, res) => {
  try {
    const party = await Party.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(party)
  } catch (err) {
    res.send(err.message)
  }
})

app.put('/characters/:id', async (req, res) => {
  try {
    const char = await Character.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(char)
  } catch (err) {
    res.send(err.message)
  }
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
