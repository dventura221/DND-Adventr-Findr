import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewParty = (props) => {
  let { id } = useParams()
  const [partyDetail, setPartyDetails] = useState({})

  useEffect(() => {
    const getPartyDetails = async () => {
      const res = await axios.get(`http://localhost:3001/parties/${id}`)
      setPartyDetails(res.data)
    }
    getPartyDetails()
  }, [id])

  return (
    <div>
      <div className="party-details">
        <h3>{partyDetail.name}</h3>
        <h3>{partyDetail.location}</h3>
        <p>{partyDetail.comment}</p>
      </div>
    </div>
  )
}

export default ViewParty
