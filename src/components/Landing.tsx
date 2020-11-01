import React from "react"
import Img from "gatsby-image"
import Particles from "react-particles-js"
import particleOptions from "../config/particles"
import "../styles/Landing.scss"

export default function Landing({ pic }) {
  return (
    <section id="landing">
      <div className="landing-text-container">
        <p className="accent">Hello there!</p>
        <h1>I'm Michelle</h1>
        <p>I'm a Software Engineer based in Orange County!</p>
        <a href="#">
          <div className="landing-button">Hire Me</div>
        </a>
      </div>
      <div className="landing-picture-container">
        <div className="landing-picture-diamond"></div>
        <Img
          className="landing-profile-image"
          fluid={pic.childImageSharp.fluid}
        />
      </div>
      <div className="particles-container">
        <Particles params={particleOptions as any} />
      </div>
      <div className="landing-stylish-text">
        <span>UI/UX DESIGN</span>
      </div>
    </section>
  )
}
