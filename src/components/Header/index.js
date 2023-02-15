import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-name-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="logo-name">Wave</h1>
    </div>
    <ul className="options-container">
      <li className="List">
        <Link className="link-name" to="/">
          Home
        </Link>
      </li>
      <li className="List">
        <Link className="link-name" to="/about">
          About
        </Link>
      </li>
      <li className="List">
        <Link className="link-name" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
