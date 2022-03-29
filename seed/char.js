// const db = require('../db')
// const { Character, Player } = require('../models')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {
//   const characters = [
//     {
//       player: player1._id,
//       name: 'Gonthor',
//       race: 'Dwarf',
//       class: 'Fighter',
//       charSheet: true,
//       link: 'https://ddb.ac/characters/38203445/8KTr97',
//       comment: ''
//     },
//     {
//       player: player2._id,
//       name: 'Sequelia',
//       race: 'Elf',
//       class: 'Rogue',
//       charSheet: true,
//       link: 'https://ddb.ac/characters/38203445/8KTr97',
//       comment: 'I love being sneaky.'
//     },
//     {
//       player: player3._id,
//       name: 'Nebuzan',
//       race: 'Dragonborn',
//       class: 'Paladin',
//       charSheet: true,
//       link: 'https://ddb.ac/characters/38203445/8KTr97',
//       comment: 'Pali ftw.'
//     },
//     {
//       player: player4._id,
//       name: 'Cecelia',
//       race: 'Half-Elf',
//       class: 'Sorceror',
//       charSheet: true,
//       link: 'https://ddb.ac/characters/38203445/8KTr97',
//       comment: 'I would never be a dwarf.'
//     },
//     {
//       player: player5._id,
//       name: 'Daz',
//       race: 'Goliath',
//       class: 'Barbarian',
//       charSheet: true,
//       link: 'https://ddb.ac/characters/38203445/8KTr97',
//       comment: 'Crush!'
//     },
//     {
//       player: player6._id,
//       name: 'Shenny',
//       race: 'Halfling',
//       class: 'Wizard',
//       charSheet: true,
//       link: 'https://ddb.ac/characters/38203445/8KTr97',
//       comment: 'Me so smart!'
//     }
//   ]

//   await Character.insertMany(characters)
//   console.log('Created Characters!')
// }

// const run = async () => {
//   await main()
//   db.close()
// }

// run()
