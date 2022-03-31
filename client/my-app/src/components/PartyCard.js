const PartyCard = (props) => {
  return (
    <div className="partyCard" onClick={props.onClick}>
      <div className="partCardText">
        <h3>{props.name}</h3>
        <h4>{props.location}</h4>
      </div>
    </div>
  )
}

export default PartyCard
