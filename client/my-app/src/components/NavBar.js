import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link className="headLink" to="/">
        Home
      </Link>
      <h1 className="pageTitle">Adventr Findr</h1>
    </nav>
  )
}

export default NavBar
