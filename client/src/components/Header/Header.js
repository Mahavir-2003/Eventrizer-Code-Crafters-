import React from 'react'
import "./Header.css"
import Logo from '../../SVG/Group 1.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
      <Link className="addEvent" to="/addEvent">
      Add Event
      </Link>
    </div>
  )
}

export default Header
