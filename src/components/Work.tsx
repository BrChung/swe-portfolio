import React from "react"
import Img from "gatsby-image"
import "../styles/Work.scss"

export default function Work({ pic1, pic2, pic3, pic4 }) {
  return (
    <section id="work">
      <h2>
        <span className="accent">2.&nbsp;</span>
        My Latest Work
      </h2>
      <div className="work-container">
        <div className="work-grid-item-1">
          <Img
            className="work-grid-item-image"
            fluid={pic1.childImageSharp.fluid}
          />
        </div>
        <div className="work-grid-item-2">
          <Img
            className="work-grid-item-image"
            fluid={pic2.childImageSharp.fluid}
          />
        </div>
        <div className="work-grid-item-3">
          <Img
            className="work-grid-item-image"
            fluid={pic3.childImageSharp.fluid}
          />
        </div>
        <div className="work-grid-item-4">
          <Img
            className="work-grid-item-image"
            fluid={pic4.childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  )
}
