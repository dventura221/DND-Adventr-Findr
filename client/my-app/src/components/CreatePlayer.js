import { useState } from 'react'
import axios from 'axios'

const CreatePlayer = () => {
  const [addPlayer, setAddPlayer] = useState({
    name: '',
    age: undefined,
    location: '',
    looking4Party: '',
    comment: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`/players`, addPlayer)
      .then((res) => console.log('successful'))
      .catch((err) => console.log(err.data))
  }

  return (
    <div className="addPlayer">
      <h1>Add Player</h1>
      <form onSubmit={handleSubmit} className="createPlayerForm">
        <input
          required
          type="text"
          name="Player Name"
          value={addPlayer.name}
          placeholder="Player Name"
          onChange={(e) => setAddPlayer({ ...addPlayer, name: e.target.value })}
        ></input>
        <input
          required
          type="number"
          name="Age"
          value={addPlayer.age}
          placeholder="Player Age"
          onChange={(e) => setAddPlayer({ ...addPlayer, age: e.target.value })}
        ></input>
        <input
          required
          type="text"
          name="Location"
          value={addPlayer.location}
          placeholder="Location"
          onChange={(e) =>
            setAddPlayer({ ...addPlayer, location: e.target.value })
          }
        ></input>
        <select
          id="looking4Party"
          required
          name="Looking4Party"
          value={addPlayer.looking4Party}
          onChange={(e) =>
            setAddPlayer({ ...addPlayer, looking4Party: e.target.value })
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
          value={addPlayer.comment}
          placeholder="Comments"
          onChange={(e) =>
            setAddPlayer({ ...addPlayer, comment: e.target.value })
          }
        ></input>
        <button className="submitButton" text="Submit">
          Add Player
        </button>
      </form>
    </div>
  )
}

export default CreatePlayer
