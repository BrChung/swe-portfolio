import React from "react"
import "../styles/index.scss"

export default function Home() {
  return (
    <main className="main-container">
      <section id="landing">
        <span>This is the landing section</span>
      </section>
      <section id="about">
        <span>This is the about section</span>
      </section>
      <section id="work">
        <span>This is the work section</span>
      </section>
      <section id="contact">
        <span>This is the contact section</span>
      </section>
    </main>
  )
}
