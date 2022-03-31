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

  const deleteParty = async () => {
    const res = await axios
      .delete(`http://localhost:3001/parties/${id}`)
      .then((res) => console.log('delete party successful'))
      .catch((err) => console.log(err.data))
  }

  return (
    <div>
      <div className="party-details">
        <h3>{partyDetail.name}</h3>
        <h3>{partyDetail.location}</h3>
        <p>{partyDetail.comment}</p>
      </div>
      <button className="btn btn-danger" onClick={deleteParty}>
        Delete
      </button>
    </div>
  )
}

export default ViewParty
