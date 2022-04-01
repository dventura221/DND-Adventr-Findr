import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewParty = (props) => {
  let { id } = useParams()
  const [partyDetail, setPartyDetails] = useState({})
  const [updateParty, setUpdateParty] = useState({
    name: partyDetail.name,
    location: partyDetail.location,
    format: partyDetail.format,
    looking4Players: partyDetail.looking4Players,
    dungeonMaster: partyDetail.dungeonMaster,
    players: partyDetail.players,
    characters: partyDetail.characters,
    comment: partyDetail.comment
  })

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

  const handleUpdateParty = async () => {
    const res = await axios
      .put(`http://localhost:3001/parties/${id}`, updateParty)
      .then((res) => console.log('update party successful'))
      .catch((err) => console.log(err.data))
  }

  return (
    <div>
      <div className="party-details">
        <h2>{partyDetail.name}</h2>
        <h3>{partyDetail.location}</h3>
        <p>Format: {partyDetail.format}</p>
        <p>Comments: {partyDetail.comment}</p>
        <p>Dungeon Master: {partyDetail.dungeonMaster}</p>
        <p>Players: {partyDetail.players}</p>
        <p>Characters: {partyDetail.characters}</p>
      </div>
      <div>
        <form onSubmit={handleUpdateParty} className="updatePartyForm">
          <input
            type="text"
            name="Party Name"
            value={updateParty.name}
            placeholder="Party Name"
            onChange={(e) =>
              setUpdateParty({ ...updateParty, name: e.target.value })
            }
          ></input>
          <input
            type="text"
            name="Location"
            value={updateParty.location}
            placeholder="Location"
            onChange={(e) =>
              setUpdateParty({ ...updateParty, location: e.target.value })
            }
          ></input>
          <select
            id="format"
            name="Format"
            value={updateParty.format}
            placeholder="Online or In Person"
            onChange={(e) =>
              setUpdateParty({ ...updateParty, format: e.target.value })
            }
          >
            <option value="" selected disabled hidden>
              Online or In-Person?
            </option>
            <option value="Online">Online</option>
            <option value="In-Person">In-Person</option>
          </select>
          <select
            id="looking"
            name="Looking 4 players"
            value={updateParty.looking4Players}
            onChange={(e) =>
              setUpdateParty({
                ...updateParty,
                looking4Players: e.target.value
              })
            }
          >
            <option value="" selected disabled hidden>
              Looking for more players?
            </option>
            <option value="Yes">Yes, looking for players.</option>
            <option value="No">No, not looking for players.</option>
          </select>
          <input
            type="text"
            name="Dungeon Master"
            value={updateParty.dungeonMaster}
            placeholder="Dungeon Master"
            onChange={(e) =>
              setUpdateParty({ ...updateParty, dungeonMaster: e.target.value })
            }
          ></input>
          <input
            type="text"
            name="Players"
            value={updateParty.players}
            placeholder="Players"
            onChange={(e) =>
              setUpdateParty({ ...updateParty, players: e.target.value })
            }
          ></input>
          <input
            type="text"
            name="Characters"
            value={updateParty.characters}
            placeholder="Characters"
            onChange={(e) =>
              setUpdateParty({ ...updateParty, characters: e.target.value })
            }
          ></input>
          <input
            type="text"
            name="Comment"
            value={updateParty.comment}
            placeholder="Comments"
            onChange={(e) =>
              setUpdateParty({ ...updateParty, comment: e.target.value })
            }
          ></input>
          <button className="submitButton" text="Submit">
            Update Party
          </button>
        </form>
      </div>
      <button className="btn btn-danger" onClick={deleteParty}>
        Delete
      </button>
    </div>
  )
}

export default ViewParty
