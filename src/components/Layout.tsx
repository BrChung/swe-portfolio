import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import "../styles/Layout.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', { header: "#navbar" })
}

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
