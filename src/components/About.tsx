import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import "../styles/About.scss"

export default function About({ pic }) {
  return (
    <section id="about">
      <div className="about-image-container">
        <Img
          className="about-profile-image"
          fluid={pic.childImageSharp.fluid}
          alt="Avatar"
        />
      </div>
      <div className="about-text-container">
        <h2>
          <span className="accent">1.&nbsp;</span>About Me
        </h2>
        <p>Hello! I’m Michelle, a software engineer based in Fullerton, CA.</p>
        <p>
          I am outgoing, dedicated, and open-minded. I get across to people and
          adjust to changes with ease. I believe that a person should develop
          their professional skills and learn new things all the time.
          Currently, I am looking for new career opportunities to expand my
          horizon.
        </p>
      </div>
      <div className="about-stylish-text">
        <span>ABOUT ME</span>
      </div>
    </section>
  )
}
