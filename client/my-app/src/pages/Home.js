import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import Search from '../components/Search'
import PartyCard from '../components/PartyCard'

const Home = () => {
  const [parties, setParties] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    const getParties = async () => {
      const res = await axios.get(`http://localhost:3001/parties`)
      setParties(res.data)
    }
    getParties()
  }, [])

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  return (
    <div>
      <div className="search">
        <h1 className="pageTitle">Adventr Finder</h1>
        <Search
          onChange={handleChange}
          value={searchQuery}
          //onSubmit={getSearchResult}
        />
      </div>
      <div className="parties">
        <h1>Parties</h1>
        <section className="party-grid">
          {parties.map((party) => (
            <PartyCard name={party.name} location={party.location} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
