import React from "react"
import "../styles/Work.scss"

export default function Work() {
  return (
    <section id="work">
      <h2>
        <span className="accent">2.&nbsp;</span>
        My Latest Work
      </h2>
      <div className="work-container">
        <div className="work-grid-item-1">Item 1</div>
        <div className="work-grid-item-2">Item 2</div>
        <div className="work-grid-item-3">Item 3</div>
        <div className="work-grid-item-4">Item 4</div>
      </div>
    </section>
  )
}
