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
      console.log(res)
      setParties(res.data)
    }
    getParties()
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

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  return (
    <div>
      <div className="search">
        <h1 className="pageTitle">Adventr Findr</h1>
        <Search
          onChange={handleChange}
          value={searchQuery}
          onSubmit={getSearchResult}
        />
      </div>
      <div className="parties">
        <h1>Parties</h1>
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
    </div>
  )
}

export default Home
