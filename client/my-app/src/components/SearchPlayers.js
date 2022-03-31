const SearchPlayers = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        className="playerSearchBar"
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Players"
        onChange={props.onChange}
      ></input>
      <button className="submitButton" text="Submit">
        Search
      </button>
    </form>
  )
}
export default SearchPlayers
