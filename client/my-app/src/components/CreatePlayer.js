import { useState } from 'react'
import axios from 'axios'

const CreatePlayer = () => {
  const [addPlayer, setAddPlayer] = useState({
    name: '',
    age: 0,
    location: '',
    looking4Party: '',
    comment: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`http://localhost:3001/players`, addPlayer)
      .then((res) => console.log('successful'))
      .catch((err) => console.log(err.data))
  }

  return (
    <div className="addPlayer">
      <h1>Add Player</h1>
      <form onSubmit={handleSubmit}>
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
        <button className="submitButton" text="Submit">
          Add Player
        </button>
      </form>
    </div>
  )
}

export default CreatePlayer
