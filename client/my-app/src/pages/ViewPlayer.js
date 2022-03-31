import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewPlayer = (props) => {
  let { id } = useParams()
  const [playerDetail, setPlayerDetails] = useState({})

  useEffect(() => {
    const getPlayerDetails = async () => {
      const res = await axios.get(`http://localhost:3001/players/${id}`)
      setPlayerDetails(res.data)
    }
    getPlayerDetails()
  }, [id])

  const deletePlayer = async () => {
    const res = await axios
      .delete(`http://localhost:3001/players/${id}`)
      .then((res) => console.log('delete player successful'))
      .catch((err) => console.log(err.data))
  }

  return (
    <div>
      <div>
        <div className="player-details">
          <h3>{playerDetail.name}</h3>
          <h3>{playerDetail.location}</h3>
          <p>{playerDetail.comment}</p>
          <button className="btn btn-danger" onClick={deletePlayer}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewPlayer
