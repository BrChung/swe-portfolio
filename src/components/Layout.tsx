import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import "../styles/Layout.scss"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
