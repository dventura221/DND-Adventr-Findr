const PartyCard = (props) => {
  return (
    <div className="partyCard" onClick={props.onClick}>
      <div className="partCardText">
        <h3>{props.name}</h3>
        <h3>{props.location}</h3>
      </div>
    </div>
  )
}

export default PartyCard
