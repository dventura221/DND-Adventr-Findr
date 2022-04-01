import { useState } from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom'

const CreateParty = () => {
  const [addParty, setAddParty] = useState({
    name: '',
    location: '',
    format: '',
    looking4Players: '',
    dungeonMaster: '',
    players: '',
    characters: '',
    comment: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`/parties`, addParty)
      .then((res) => console.log('successful'))
      .catch((err) => console.log(err.data))
  }

  return (
    <div className="addParty">
      <h1>Add Party</h1>
      <form onSubmit={handleSubmit} className="createPartyForm">
        <input
          required
          type="text"
          name="Party Name"
          value={addParty.name}
          placeholder="Party Name"
          onChange={(e) => setAddParty({ ...addParty, name: e.target.value })}
        ></input>
        <input
          required
          type="text"
          name="Location"
          value={addParty.location}
          placeholder="Location"
          onChange={(e) =>
            setAddParty({ ...addParty, location: e.target.value })
          }
        ></input>
        <select
          id="format"
          required
          name="Format"
          value={addParty.format}
          placeholder="Online or In Person"
          onChange={(e) => setAddParty({ ...addParty, format: e.target.value })}
        >
          <option value="" selected disabled hidden>
            Online or In-Person?
          </option>
          <option value="Online">Online</option>
          <option value="In-Person">In-Person</option>
        </select>
        <select
          id="looking"
          required
          name="Looking 4 players"
          value={addParty.looking4Players}
          onChange={(e) =>
            setAddParty({ ...addParty, looking4Players: e.target.value })
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
          required
          name="Dungeon Master"
          value={addParty.dungeonMaster}
          placeholder="Dungeon Master"
          onChange={(e) =>
            setAddParty({ ...addParty, dungeonMaster: e.target.value })
          }
        ></input>
        <input
          type="text"
          required
          name="Players"
          value={addParty.players}
          placeholder="Players"
          onChange={(e) =>
            setAddParty({ ...addParty, players: e.target.value })
          }
        ></input>
        <input
          type="text"
          required
          name="Characters"
          value={addParty.characters}
          placeholder="Characters"
          onChange={(e) =>
            setAddParty({ ...addParty, characters: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="Comment"
          value={addParty.comment}
          placeholder="Comments"
          onChange={(e) =>
            setAddParty({ ...addParty, comment: e.target.value })
          }
        ></input>
        <button className="submitButton" text="Submit">
          Add Party
        </button>
      </form>
    </div>
  )
}

export default CreateParty
