const db = require('../db')
const { Character, Party, Player } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const player1 = await new Player({
    name: 'David East',
    location: 'Denver, CO',
    age: 34,
    looking4Party: false,
    comment: 'Veteran DM and player LFG, local.'
  })
  player1.save()

  const player2 = await new Player({
    name: 'Shannon South',
    location: 'Boulder, CO',
    age: 32,
    looking4Party: true,
    comment: 'New to dnd, would need help.'
  })
  player2.save()

  const player3 = await new Player({
    name: 'Michael Boss',
    location: 'Chicago, IL',
    age: 42,
    looking4Party: false,
    comment: 'DM LF players.'
  })
  player3.save()

  const player4 = await new Player({
    name: 'Stephanie Boss',
    location: 'Chicago, IL',
    age: 40,
    looking4Party: false,
    comment: 'I love dnd.'
  })
  player4.save()

  const player5 = await new Player({
    name: 'Sydney Borealis',
    location: 'Los Angeles, CA',
    age: 22,
    looking4Party: true,
    comment: 'DM/player LF party'
  })
  player5.save()

  const player6 = await new Player({
    name: 'Jesse Ferguson',
    location: 'San Diego, CA',
    age: 24,
    looking4Party: true,
    comment: 'Player LF group'
  })
  player6.save()

  const char1 = await new Character({
    player: player1._id,
    name: 'Gonthor',
    race: 'Dwarf',
    class: 'Fighter',
    charSheet: true,
    link: 'https://ddb.ac/characters/38203445/8KTr97',
    comment: ''
  })
  char1.save()

  const char2 = await new Character({
    player: player2._id,
    name: 'Sequelia',
    race: 'Elf',
    class: 'Rogue',
    charSheet: true,
    link: 'https://ddb.ac/characters/38203445/8KTr97',
    comment: 'I love being sneaky.'
  })
  char2.save()

  const char3 = await new Character({
    player: player3._id,
    name: 'Nebuzan',
    race: 'Dragonborn',
    class: 'Paladin',
    charSheet: true,
    link: 'https://ddb.ac/characters/38203445/8KTr97',
    comment: 'Pali ftw.'
  })
  char3.save()

  const char4 = await new Character({
    player: player4._id,
    name: 'Cecelia',
    race: 'Half-Elf',
    class: 'Sorceror',
    charSheet: true,
    link: 'https://ddb.ac/characters/38203445/8KTr97',
    comment: 'I would never be a dwarf.'
  })
  char4.save()

  const char5 = await new Character({
    player: player5._id,
    name: 'Daz',
    race: 'Goliath',
    class: 'Barbarian',
    charSheet: true,
    link: 'https://ddb.ac/characters/38203445/8KTr97',
    comment: 'Crush!'
  })
  char5.save()

  const char6 = await new Character({
    player: player6._id,
    name: 'Shenny',
    race: 'Halfling',
    class: 'Wizard',
    charSheet: true,
    link: 'https://ddb.ac/characters/38203445/8KTr97',
    comment: 'Me so smart!'
  })
  char6.save()

  const parties = [
    {
      name: 'Denver DND',
      location: 'Denver, CO',
      online: false,
      inPerson: true,
      looking4Players: true,
      dungeonMaster: player1._id,
      players: [player2._id],
      characters: [char1._id, char2._id],
      comment: 'LFP 4 local Denver metro'
    },
    {
      name: 'Great Lakes DND',
      location: 'Remote',
      online: true,
      inPerson: false,
      looking4Players: true,
      dungeonMaster: player3._id,
      players: [player4._id],
      characters: [char3._id, char4._id],
      comment: 'LFP, online ok'
    }
  ]

  await Party.insertMany(parties)
  console.log('Created Players, Parties, and Characters!')
}

const run = async () => {
  await main()
  db.close()
}

run()
