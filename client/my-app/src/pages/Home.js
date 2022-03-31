import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import PartyCard from '../components/PartyCard'
import PlayerCard from '../components/PlayerCard'
import SearchPlayers from '../components/SearchPlayers'

const Home = () => {
  const [parties, setParties] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searched, setSearched] = useState(false)
  const [players, setPlayers] = useState([])
  const [searchResultPlayers, setSearchResultPlayers] = useState([])
  const [searchQueryPlayers, setSearchQueryPlayers] = useState('')
  const [searchedPlayers, setSearchedPlayers] = useState(false)

  useEffect(() => {
    const getParties = async () => {
      const res = await axios.get(`http://localhost:3001/parties`)
      setParties(res.data)
    }
    getParties()
  }, [])

  useEffect(() => {
    const getPlayers = async () => {
      const res = await axios.get(`http://localhost:3001/players`)
      setPlayers(res.data)
    }
    getPlayers()
  }, [])

  const getSearchResult = async (e) => {
    e.preventDefault()
    const res = await axios.get(`http://localhost:3001/parties/`)
    const searchedParties = res.data.filter((item) => {
      return item.name.toLowerCase().includes(`${searchQuery}`)
    })
    console.log(searchedParties)
    setSearchQuery('')
    setSearched(true)
    setSearchResult(searchedParties)
  }

  const getSearchResultPlayers = async (e) => {
    e.preventDefault()
    const res = await axios.get(`http://localhost:3001/players/`)
    const searchedPlayers = res.data.filter((item) => {
      return item.name.toLowerCase().includes(`${searchQueryPlayers}`)
    })
    console.log(searchedPlayers)
    setSearchQueryPlayers('')
    setSearchedPlayers(true)
    setSearchResultPlayers(searchedPlayers)
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  const handleChangePlayer = (e) => {
    setSearchQueryPlayers(e.target.value.toLowerCase())
  }

  return (
    <div>
      <div className="searchForParty">
        <Search
          onChange={handleChange}
          value={searchQuery}
          onSubmit={getSearchResult}
        />
      </div>
      <div className="parties">
        <h3>Parties</h3>
        <section className="party-grid">
          {parties.map((party) => (
            <Link
              className="viewParty"
              to={`/parties/${party._id}`}
              key={party._id}
            >
              <PartyCard name={party.name} location={party.location} />
            </Link>
          ))}
        </section>
      </div>
      <div className="searchForPlayer">
        <SearchPlayers
          onChange={handleChangePlayer}
          value={searchQueryPlayers}
          onSubmit={getSearchResultPlayers}
        />
      </div>
      <div className="players">
        <h3>Players</h3>
        <section className="player-grid">
          {players.map((player) => (
            <Link
              className="viewPlayer"
              to={`/players/${player._id}`}
              key={player._id}
            >
              <PlayerCard name={player.name} location={player.location} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
