import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <div className="navLinkBar">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/createparty">
          Add Party
        </Link>
        <Link className="navLink" to="/createplayer">
          Add Player
        </Link>
      </div>
      <h1 className="pageTitle">Adventr Findr</h1>
    </nav>
  )
}

export default NavBar
