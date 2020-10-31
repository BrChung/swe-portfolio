import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import Contact from "../components/Contact"
import Landing from "../components/Landing"
import Work from "../components/Work"
import "../styles/index.scss"

export default function Home() {
  return (
    <Layout>
      <Landing />
      <About />
      <Work />
      <Contact />
    </Layout>
  )
}
