import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import "../styles/Layout.scss"

export default function Layout({ children }) {
  return (
    <div className="body-container">
      <Header />
      <main className="main-container">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
