import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" to="/createparty">
        Add Party
      </Link>
      <h1 className="pageTitle">Adventr Findr</h1>
    </nav>
  )
}

export default NavBar
