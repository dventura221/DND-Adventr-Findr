const PlayerCard = (props) => {
  return (
    <div className="playerCard" onClick={props.onClick}>
      <div className="playerCardText">
        <h3>{props.name}</h3>
        <h4>{props.location}</h4>
      </div>
    </div>
  )
}

export default PlayerCard
