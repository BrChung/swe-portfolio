import React from "react"
import PropTypes from "prop-types"
import "../styles/Layout.scss"

export default function Layout({ children }) {
  return <main className="main-container">{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
