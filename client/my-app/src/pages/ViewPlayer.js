import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewPlayer = (props) => {
  let { id } = useParams()
  const [playerDetail, setPlayerDetails] = useState({})
  const [updatePlayer, setUpdatePlayer] = useState({
    name: playerDetail.name,
    age: playerDetail.age,
    location: playerDetail.location,
    looking4Party: playerDetail.looking4Party,
    comment: playerDetail.comment
  })

  useEffect(() => {
    const getPlayerDetails = async () => {
      const res = await axios.get(`/players/${id}`)
      setPlayerDetails(res.data)
    }
    getPlayerDetails()
  }, [id])

  const deletePlayer = async () => {
    const res = await axios
      .delete(`/players/${id}`)
      .then((res) => console.log('delete player successful'))
      .catch((err) => console.log(err.data))
  }

  const handleUpdatePlayer = async () => {
    const res = await axios
      .put(`http://localhost:3001/players/${id}`, updatePlayer)
      .then((res) => console.log('update player successful'))
      .catch((err) => console.log(err.data))
  }

  return (
    <div>
      <div>
        <div className="player-details">
          <h3>Name: {playerDetail.name}</h3>
          <h4>Age: {playerDetail.age}</h4>
          <h3>Location: {playerDetail.location}</h3>
          <h4>Looking for Party? {playerDetail.looking4Party}</h4>
          <p>Comment: {playerDetail.comment}</p>
        </div>
      </div>
      <div>
        <form onSubmit={handleUpdatePlayer}>
          <input
            type="text"
            name="Player Name"
            value={updatePlayer.name}
            placeholder="Player Name"
            onChange={(e) =>
              setUpdatePlayer({ ...updatePlayer, name: e.target.value })
            }
          ></input>
          <input
            type="number"
            name="Age"
            value={updatePlayer.age}
            placeholder="Player Age"
            onChange={(e) =>
              setUpdatePlayer({ ...updatePlayer, age: e.target.value })
            }
          ></input>
          <input
            type="text"
            name="Location"
            value={updatePlayer.location}
            placeholder="Location"
            onChange={(e) =>
              setUpdatePlayer({ ...updatePlayer, location: e.target.value })
            }
          ></input>
          <select
            id="looking4Party"
            name="Looking4Party"
            value={updatePlayer.looking4Party}
            onChange={(e) =>
              setUpdatePlayer({
                ...updatePlayer,
                looking4Party: e.target.value
              })
            }
          >
            <option value="" selected disabled hidden>
              Looking for Party?
            </option>
            <option value="Yes">Yes, looking for a party.</option>
            <option value="No">No, not looking.</option>
          </select>
          <input
            type="text"
            name="Comment"
            value={updatePlayer.comment}
            placeholder="Comments"
            onChange={(e) =>
              setUpdatePlayer({ ...updatePlayer, comment: e.target.value })
            }
          ></input>
          <button className="submitButton" text="Submit">
            Update Player
          </button>
        </form>
      </div>
      <button className="btn btn-danger" onClick={deletePlayer}>
        Delete
      </button>
    </div>
  )
}

export default ViewPlayer
