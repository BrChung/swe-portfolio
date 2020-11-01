import React from "react"
import { Link } from "gatsby"
import "../styles/Header.scss"

export default function Header() {
  return (
    <header className="navbar">
      <nav className="navbar-elm">
        <div>
          <span className="nav-site-title">
            <Link to="/">Michelle Jones</Link>
          </span>
        </div>
        <ul className="nav-elm-right-container">
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#work">Work</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
